import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      {/* Contact bar */}
      <div className="bg-primary text-primary-foreground py-6">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-bold text-sm">Email Us</h4>
            <p className="text-sm opacity-90">info@cylinderstanks.com</p>
          </div>
          <div>
            <h4 className="font-bold text-sm">Visit Us</h4>
            <p className="text-sm opacity-90">Bugesera, Rwanda</p>
          </div>
          <div>
            <h4 className="font-bold text-sm">Website</h4>
            <p className="text-sm opacity-90">cylinderstanksindustries.rw</p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-navy text-navy-foreground py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              <span className="text-primary">CTIR</span>
            </h3>
            <p className="text-sm opacity-80 max-w-md leading-relaxed">
              Cylinders & Tanks Industries Rwanda is Rwanda's first-ever LPG cylinder manufacturing and revalidation company, 
              established to strengthen national energy infrastructure and promote safe, reliable, and affordable use of LPG.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm opacity-70">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Bugesera, Rwanda</span>
              <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> info@cylinderstanks.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-bold text-sm mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/manufacturing" className="hover:text-primary transition-colors">Cylinder Manufacturing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm mb-3">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Domestic Cylinders</li>
                <li>Commercial Tanks</li>
                <li>Cylinder Revalidation</li>
                <li>Quality Testing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mt-10 pt-6 border-t border-muted-foreground/20">
          <p className="text-xs opacity-60 text-center">© 2026 Cylinders & Tanks Industries Rwanda Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
