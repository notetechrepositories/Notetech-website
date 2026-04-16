import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import NavGroup from "@/components/layout/NavGroup";
import NavLink from "@/components/ui/NavLink";
import { footerColumns, footerNote } from "@/data/footer";
import { siteName } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-white/10 bg-navy text-navy-foreground">
      <Container className="py-section">
        <div className="mb-12 lg:mb-16">
          <Logo variant="footer" />
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-y-14">
          {footerColumns.map((column) => (
            <NavGroup key={column.title} title={column.title} tone="onDark">
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <NavLink
                      href={link.href}
                      external={link.external}
                      className="text-sm font-medium text-navy-foreground/78 hover:text-aqua"
                    >
                      {link.label}
                      {link.external ? (
                        <span className="ml-0.5 text-navy-foreground/45" aria-hidden>
                          ↗
                        </span>
                      ) : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </NavGroup>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-navy-foreground/52 lg:mt-14">
          {footerNote}
        </p>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-10 lg:mt-14">
          <p className="text-sm text-navy-foreground/55">
            © {year} {siteName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
