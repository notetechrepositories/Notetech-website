"use client";

import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import Badge from "@/components/ui/Badge";
import {
  headerCta,
  headerUtilityExternal,
  mainNavigation,
} from "@/data/navigation";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      triggerRef.current?.focus();
      return;
    }

    const panel = panelRef.current;
    const prevActiveElement = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const selector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const getFocusable = () => {
      if (!panel) return [] as HTMLElement[];
      return Array.from(panel.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true",
      );
    };

    const focusable = getFocusable();
    (focusable[0] ?? panel)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }

      if (e.key !== "Tab") return;
      const currentFocusable = getFocusable();
      if (!currentFocusable.length) {
        e.preventDefault();
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      if (prevActiveElement && prevActiveElement.isConnected) {
        prevActiveElement.focus();
      }
    };
  }, [open]);

  return (
    <div className="flex items-center xl:hidden">
      <button
        type="button"
        ref={triggerRef}
        className="text-ink motion-interactive -mr-1 inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-card)] hover:bg-primary/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] xl:hidden" id={panelId}>
          <button
            type="button"
            className="absolute inset-0 bg-navy/80 backdrop-blur-[3px]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            tabIndex={-1}
            className="absolute right-0 top-0 z-10 flex h-full w-full max-w-sm flex-col border-l border-stone-200 bg-white shadow-2xl shadow-navy/20"
          >
            <div className="flex items-center justify-between border-b border-stone-200 bg-white px-5 py-4">
              <span className="text-[0.65rem] font-bold tracking-[0.2em] text-slate-500 uppercase">Navigation</span>
              <button
                type="button"
                className="motion-interactive flex min-h-10 min-w-10 items-center justify-center rounded-[var(--radius-card)] text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              <nav aria-label="Mobile main">
                <ul className="space-y-0.5">
                  {mainNavigation.map((item) =>
                    item.children?.length ? (
                      <li
                        key={item.label}
                        className="border-border-subtle border-b last:border-b-0"
                      >
                        <div className="w-full py-4 text-left text-base font-semibold tracking-tight text-ink">
                          <span className="flex min-h-[2.75rem] items-center justify-between gap-3">
                            {item.href ? (
                              <Link
                                href={item.href}
                                className="motion-interactive hover:text-primary"
                                onClick={() => setOpen(false)}
                              >
                                {item.label}
                              </Link>
                            ) : (
                              item.label
                            )}
                            <span className="text-label text-primary">Browse</span>
                          </span>
                        </div>
                        <ul className="mb-4 space-y-0.5 border-l-2 border-primary/25 pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className="text-ink-muted motion-interactive block py-3 text-[0.9375rem] leading-snug hover:text-primary"
                                onClick={() => setOpen(false)}
                              >
                                <span className="flex flex-wrap items-center gap-2">
                                  {child.label}
                                  {child.badge ? (
                                    <Badge
                                      variant="subtle"
                                      className="normal-case tracking-normal"
                                    >
                                      {child.badge}
                                    </Badge>
                                  ) : null}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : item.href ? (
                      <li
                        key={item.label}
                        className="border-border-subtle border-b last:border-b-0"
                      >
                        <Link
                          href={item.href}
                          className="text-ink motion-interactive flex min-h-14 items-center text-base font-semibold tracking-tight hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </nav>

              <div className="border-border-subtle mt-10 space-y-5 border-t pt-8">
                <NavLink
                  href={headerUtilityExternal.href}
                  external
                  className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-ink-muted hover:text-primary"
                >
                  {headerUtilityExternal.label}
                  <span className="text-ink-subtle" aria-hidden>
                    ↗
                  </span>
                </NavLink>
                <Button
                  href={headerCta.href}
                  className="min-h-12 w-full text-[0.9375rem]"
                  variant="primary"
                  onClick={() => setOpen(false)}
                >
                  {headerCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
