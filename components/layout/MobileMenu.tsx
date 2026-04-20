"use client";

import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import Badge from "@/components/ui/Badge";
import {
  headerCta,
  headerUtilityExternal,
  mainNavigation,
} from "@/data/navigation";
import Logo from "@/components/brand/Logo";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
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

  const toggle = (label: string) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <div className="flex items-center xl:hidden">
      {/* Hamburger trigger */}
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
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] xl:hidden" id={panelId} style={{ height: "100dvh" }}>
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            tabIndex={-1}
            className="absolute right-0 top-0 z-10 flex w-full max-w-sm flex-col shadow-2xl shadow-navy/30"
            style={{ height: "100dvh", background: "#eaf3fb" }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between bg-white px-5 py-4 shadow-[0_1px_0_0_#d1e4f3]">
              <Logo variant="header" />
              <button
                type="button"
                className="motion-interactive flex min-h-10 min-w-10 items-center justify-center rounded-[var(--radius-card)] text-slate-500 hover:bg-primary/[0.08] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable nav */}
            <div className="flex-1 overflow-y-auto">
              <nav aria-label="Mobile main">
                <ul>
                  {mainNavigation.map((item) =>
                    item.children?.length ? (
                      <li key={item.label} className="border-b border-[#c8dff0]">
                        {/* Accordion trigger row */}
                        <div className="flex items-stretch">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="flex flex-1 items-center px-5 py-4 text-[0.7rem] font-bold tracking-[0.18em] text-[#0b1220] uppercase hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <span className="flex flex-1 items-center px-5 py-4 text-[0.7rem] font-bold tracking-[0.18em] text-[#0b1220] uppercase">
                              {item.label}
                            </span>
                          )}
                          <button
                            type="button"
                            aria-expanded={expanded === item.label}
                            aria-label={`${expanded === item.label ? "Collapse" : "Expand"} ${item.label}`}
                            onClick={() => toggle(item.label)}
                            className="flex items-center justify-center px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                          >
                            <svg
                              className={`h-4 w-4 shrink-0 text-primary transition-transform duration-200 ${expanded === item.label ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              aria-hidden
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>

                        {/* Accordion sub-items */}
                        {expanded === item.label && (
                          <ul className="bg-white/70 pb-2">
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className="group flex items-center justify-between px-5 py-3 text-[0.9rem] text-slate-700 hover:bg-primary/[0.07] hover:text-primary"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="flex flex-wrap items-center gap-2">
                                    {child.label}
                                    {child.badge ? (
                                      <Badge variant="subtle" className="normal-case tracking-normal">
                                        {child.badge}
                                      </Badge>
                                    ) : null}
                                  </span>
                                  <svg className="h-3.5 w-3.5 shrink-0 text-primary/50 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ) : item.href ? (
                      <li key={item.label} className="border-b border-[#c8dff0]">
                        <Link
                          href={item.href}
                          className="flex items-center justify-between px-5 py-4 text-[0.7rem] font-bold tracking-[0.18em] text-[#0b1220] uppercase hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                          <svg className="h-4 w-4 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </nav>

              {/* Footer actions */}
              <div className="px-5 py-7 space-y-3">
                <Button
                  href={headerCta.href}
                  className="min-h-12 w-full text-[0.9375rem]"
                  variant="primary"
                  onClick={() => setOpen(false)}
                >
                  {headerCta.label}
                </Button>
                <NavLink
                  href={headerUtilityExternal.href}
                  external
                  className="flex items-center justify-center gap-1.5 py-2 text-sm font-semibold text-slate-500 hover:text-primary"
                >
                  {headerUtilityExternal.label}
                  <span className="text-slate-400" aria-hidden>↗</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
