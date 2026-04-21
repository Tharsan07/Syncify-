import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from '../assets/logo.svg';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'How it Works', path: '/how-it-works' },
    { name: 'Use Cases', path: '/use-cases' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className="sticky top-0 w-full z-50 bg-white border-b border-gray-200 py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={Logo} alt="Syncify Logo" className="h-10 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-300 py-1 ${isActive ? 'text-green-600' : 'text-gray-600 hover:text-green-600'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/contact" className="text-sm font-bold text-gray-600 hover:text-green-600 transition-colors">
              Log in
            </Link>
            <Button to="/contact" variant="primary">
              Book a Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-base font-bold rounded-md transition-colors ${isActive ? 'bg-green-50 text-green-700' : 'text-slate-700 hover:bg-green-50/30 hover:text-green-600'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-3 text-base font-bold rounded-md transition-colors ${location.pathname === '/terms' ? 'bg-green-50 text-green-700' : 'text-slate-700 hover:bg-green-50/30 hover:text-green-600'
                }`}
            >
              Terms of Service
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Button to="/contact" variant="secondary" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
                Log in
              </Button>
              <Button to="/contact" variant="primary" onClick={() => setMobileMenuOpen(false)} className="w-full justify-center">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}