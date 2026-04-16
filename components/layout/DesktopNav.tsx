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

function DesktopDropdown({ item }: { item: NavNode }) {
  if (!item.children?.length) return null;

  return (
    <div
      className="absolute left-0 top-full z-50 pt-2 opacity-0 invisible transition-all duration-200 ease-out group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible"
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
  return (
    <div className="hidden min-w-0 items-center gap-4 xl:flex 2xl:gap-6">
      <nav aria-label="Main" className="min-w-0">
        <ul className="flex items-center gap-1.5">
          {mainNavigation.map((item) => (
            <li key={item.label} className="group relative shrink-0">
              {item.children?.length ? (
                <>
                  <button
                    type="button"
                    className="text-[#0b0f18] motion-interactive inline-flex items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-card)] px-2.5 py-2 text-[0.7rem] font-semibold leading-none tracking-[0.06em] uppercase outline-none hover:-translate-y-px hover:bg-primary/[0.06] hover:text-primary active:translate-y-0 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
                    aria-haspopup="true"
                  >
                    <span className="leading-tight">{item.label}</span>
                    <span className="text-[#0b0f18] group-hover:text-primary/80 shrink-0 transition-colors" aria-hidden>
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
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
                  </button>
                  <DesktopDropdown item={item} />
                </>
              ) : item.href ? (
                <NavLink
                  href={item.href}
                  external={item.external}
                  className="block whitespace-nowrap rounded-[var(--radius-card)] px-2.5 py-2 text-[0.7rem] font-semibold leading-tight tracking-[0.06em] text-[#0b0f18] uppercase hover:-translate-y-px hover:bg-primary/[0.06] hover:text-primary active:translate-y-0"
                >
                  {item.label}
                </NavLink>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-border-subtle flex shrink-0 items-center gap-2.5 border-l pl-4 2xl:gap-3 2xl:pl-5">
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
