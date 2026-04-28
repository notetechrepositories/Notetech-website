 "use client";

import Badge from "@/components/ui/Badge";
import NavLink from "@/components/ui/NavLink";
import {
  headerCta,
  headerUtilityExternal,
  mainNavigation,
} from "@/data/navigation";
import type { NavNode } from "@/data/navigation";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

function DesktopDropdown({ item, isOpen }: { item: NavNode; isOpen: boolean }) {
  if (!item.children?.length) return null;

  return (
    <div
      className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-out ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      role="menu"
    >
      <div className="border-border-subtle bg-surface min-w-[17rem] rounded-[var(--radius-hero)] border py-2 shadow-[var(--shadow-card-hover-value)] ring-1 ring-primary/[0.04]">
        <ul className="max-h-[min(24rem,70vh)] overflow-y-auto">
          {item.children.map((child) => (
            <li key={child.href} role="none">
              <Link
                href={child.href}
                role="menuitem"
                className="motion-interactive flex flex-wrap items-center gap-x-2 px-4 py-2.5 text-sm text-[#0b0f18] hover:-translate-y-px hover:bg-badge-soft hover:text-primary active:translate-y-0"
              >
                <span>{child.label}</span>
                {child.badge ? (
                  <Badge
                    variant="subtle"
                    className="normal-case tracking-normal"
                  >
                    {child.badge}
                  </Badge>
                ) : null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="hidden min-w-0 items-center gap-6 xl:flex 2xl:gap-8">
      <nav aria-label="Main" className="min-w-0">
        <ul className="flex items-center gap-3 2xl:gap-4">
          {mainNavigation.map((item) => (
            <li
              key={item.label}
              className="relative shrink-0"
              onMouseEnter={() =>
                item.children?.length ? setActiveDropdown(item.label) : setActiveDropdown(null)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.children?.length ? (
                <>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-2 text-[0.72rem] font-semibold leading-none tracking-[0.06em] text-[#0b0f18] uppercase">
                    {item.href ? (
                      <NavLink
                        href={item.href}
                        external={item.external}
                        className="leading-tight hover:text-primary"
                      >
                        {item.label}
                      </NavLink>
                    ) : (
                      <span className="leading-tight">{item.label}</span>
                    )}
                    <span
                      className={`shrink-0 text-[#0b0f18] transition-all duration-200 ${activeDropdown === item.label ? "rotate-180 text-primary/80" : ""}`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.label}
                      aria-hidden
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </span>
                  <DesktopDropdown item={item} isOpen={activeDropdown === item.label} />
                </>
              ) : item.href ? (
                <NavLink
                  href={item.href}
                  external={item.external}
                  className="block whitespace-nowrap px-2 py-2 text-[0.72rem] font-semibold leading-tight tracking-[0.06em] text-[#0b0f18] uppercase hover:text-primary"
                >
                  {item.label}
                </NavLink>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-border-subtle flex shrink-0 items-center gap-3.5 border-l pl-6 2xl:gap-4 2xl:pl-7">
        <NavLink
          href={headerUtilityExternal.href}
          external
          className="motion-interactive text-[0.66rem] font-semibold tracking-[0.08em] text-[#0b0f18] uppercase hover:-translate-y-px hover:text-primary active:translate-y-0"
        >
          {headerUtilityExternal.label}
          <span className="ml-0.5 inline-block align-middle text-[#0b0f18]/85" aria-hidden>
            ↗
          </span>
        </NavLink>
        <Button
          href={headerCta.href}
          variant="primary"
          className="min-h-9 shrink-0 px-4 py-2 text-[0.72rem] font-semibold tracking-[0.06em] uppercase shadow-sm"
        >
          {headerCta.label}
        </Button>
      </div>
    </div>
  );
}
