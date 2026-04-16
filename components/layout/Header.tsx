import Logo from "@/components/brand/Logo";
import Container from "@/components/ui/Container";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/96 shadow-[0_10px_30px_-24px_rgb(11_18_32/0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-white/92">
      <Container className="flex min-h-[4.1rem] items-center justify-between gap-4 sm:min-h-[4.4rem] lg:min-h-[4.55rem] lg:gap-6 xl:gap-8">
        <Logo variant="header" />

        <DesktopNav />
        <MobileMenu />
      </Container>
    </header>
  );
}
