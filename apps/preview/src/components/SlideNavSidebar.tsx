"use client";

import * as React from "react";
import { useRef, useEffect, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SlideThumbnail } from "./SlideThumbnail";
import type { SlideEntry } from "../../../../slides/presentations";

interface SlideNavSidebarProps {
  slides: SlideEntry[];
  activeIndex: number;
  collapsed: boolean;
  onSelect: (index: number) => void;
  onToggle: () => void;
  onReorder: (newSlides: SlideEntry[]) => void;
}

function SortableThumbnail({
  slide,
  index,
  isActive,
  onSelect,
  itemRef,
}: {
  slide: SlideEntry;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  itemRef: (el: HTMLDivElement | null) => void;
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: slide.label ?? `slide-${index}` });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  // Compose both refs
  const composedRef = useCallback(
    (el: HTMLDivElement | null) => {
      setNodeRef(el);
      itemRef(el);
    },
    [setNodeRef, itemRef],
  );

  return (
    <div ref={composedRef} style={style} {...attributes} {...listeners}>
      <SlideThumbnail index={index} isActive={isActive} onClick={onSelect}>
        <slide.Component />
      </SlideThumbnail>
    </div>
  );
}

export function SlideNavSidebar({
  slides,
  activeIndex,
  collapsed,
  onSelect,
  onToggle,
  onReorder,
}: SlideNavSidebarProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor),
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const ids = slides.map((s, i) => s.label ?? `slide-${i}`);
      const oldIndex = ids.indexOf(String(active.id));
      const newIndex = ids.indexOf(String(over.id));
      if (oldIndex === -1 || newIndex === -1) return;

      onReorder(arrayMove(slides, oldIndex, newIndex));
    },
    [slides, onReorder],
  );

  // Auto-scroll sidebar to keep active thumbnail visible
  useEffect(() => {
    if (collapsed) return;
    const el = itemRefs.current[activeIndex];
    const list = listRef.current;
    if (!el || !list) return;

    const elTop = el.offsetTop - list.offsetTop;
    const elBottom = elTop + el.offsetHeight;
    const scrollTop = list.scrollTop;
    const viewHeight = list.clientHeight;

    if (elTop < scrollTop) {
      list.scrollTo({ top: elTop, behavior: "smooth" });
    } else if (elBottom > scrollTop + viewHeight) {
      list.scrollTo({ top: elBottom - viewHeight, behavior: "smooth" });
    }
  }, [activeIndex, collapsed]);

  const sortableIds = slides.map((s, i) => s.label ?? `slide-${i}`);

  return (
    <aside
      className={`
        relative flex h-full max-h-screen shrink-0 flex-col overflow-hidden border-r border-white/[0.06] bg-[#0a0a0a]
        transition-[width] duration-200 ease-out
        ${collapsed ? "w-12" : "w-[260px]"}
      `}
    >
      {/* Header with toggle */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.06] px-3">
        {!collapsed && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-white/30">
            Slides
          </span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className={`
            flex h-7 w-7 items-center justify-center rounded-md text-white/40
            transition-colors hover:bg-white/[0.06] hover:text-white/70
            ${collapsed ? "mx-auto" : ""}
          `}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
          >
            <path
              d="M10 4L6 8L10 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail list with drag-and-drop */}
      {!collapsed && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortableIds}
            strategy={verticalListSortingStrategy}
          >
            <div
              ref={listRef}
              className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-x-hidden overflow-y-auto overscroll-contain p-3"
            >
              {slides.map((slide, i) => (
                <SortableThumbnail
                  key={slide.label ?? `slide-${i}`}
                  slide={slide}
                  index={i}
                  isActive={i === activeIndex}
                  onSelect={() => onSelect(i)}
                  itemRef={(el) => {
                    itemRefs.current[i] = el;
                  }}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {/* Collapsed state: just show numbers */}
      {collapsed && (
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              className={`
                flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium tabular-nums
                transition-colors
                ${
                  i === activeIndex
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:bg-white/[0.06] hover:text-white/60"
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
