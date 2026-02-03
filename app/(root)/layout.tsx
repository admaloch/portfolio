import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { routesConfig } from "@/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col overflow-visible">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}></MainNav>

          <nav className="flex items-center gap-5">
            <ModeToggle />
          </nav>
        </div>
      </header>

      {/* Scrollable Main Content */}
      <main className="md:container flex-1">{children}</main>

      <SiteFooter />
    </div>
  );
}
