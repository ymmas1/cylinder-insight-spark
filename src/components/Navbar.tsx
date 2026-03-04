import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Cylinder Manufacturing", to: "/manufacturing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      {/* Top bar */}
      <div className="bg-navy text-navy-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> info@cylinderstanks.com</span>
            <span className="hidden sm:flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Bugesera, Rwanda</span>
          </div>
          <Link to="/manufacturing#contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </div>
      </div>
      
      {/* Main nav */}
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-primary">CTIR</span>
          <span className="text-foreground ml-1 text-sm font-sans font-normal hidden sm:inline">Cylinders & Tanks</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link to="/manufacturing#contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          <div className="container flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="w-fit">
              <Link to="/manufacturing#contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
