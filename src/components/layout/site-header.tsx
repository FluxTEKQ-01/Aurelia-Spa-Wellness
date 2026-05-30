import Link from "next/link";
import { User, Settings, Grid, Calendar, ShoppingBag, BookOpen, MessageSquare } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: Grid },
  { label: "Bookings", href: "/contact", icon: Calendar },
  { label: "Services", href: "/services", icon: User },
  { label: "Inventory", href: "/shop", icon: ShoppingBag },
  { label: "Logs", href: "/journal", icon: BookOpen },
  { label: "About", href: "/about", icon: MessageSquare },
];

export function SiteHeader() {
  return (
    <header className="glass-panel z-50 flex lg:w-64 lg:flex-col lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-border">
      <div className="flex items-center justify-between p-5 lg:p-6 border-b border-border/50">
        <Link href="/" className="font-display text-2xl font-bold tracking-tighter text-foreground flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
          Aurelia
        </Link>
      </div>
      <nav className="hidden lg:flex flex-col gap-2 p-4 flex-1">
        <div className="micro-label mb-2 px-2 text-muted-foreground">Modules</div>
        {navItems.map(({ label, href, icon: Icon }) => (
          <Link key={href} href={href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground group">
            <Icon className="w-4 h-4 text-accent group-hover:text-primary transition-colors" />
            {label}
          </Link>
        ))}
      </nav>
      {/* Mobile nav quick links */}
      <nav className="flex lg:hidden overflow-x-auto p-4 gap-4 items-center">
        {navItems.map(({ label, href }) => (
          <Link key={href} href={href} className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            {label}
          </Link>
        ))}
      </nav>
      <div className="hidden lg:block p-4 mt-auto border-t border-border/50">
        <button className="command-strip w-full px-4 py-3 rounded-xl text-sm font-bold shadow-lg hover-lift flex items-center justify-center gap-2">
          <Settings className="w-4 h-4" /> System Settings
        </button>
      </div>
    </header>
  );
}
