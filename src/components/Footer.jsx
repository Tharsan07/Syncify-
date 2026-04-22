import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

// Custom Brand Icons as SVG components since they were removed in lucide-react v1.0.0
const LinkedinIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const YoutubeIcon = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 58.38 58.38 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 58.38 58.38 0 0 1-15 0 2 2 0 0 1-2-2z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-green-100 py-12 border-t border-green-700 mt-auto">

      <div className="max-w-[90rem] mx-auto px-8">

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">

          {/* Left Side */}
          <div className="flex flex-col gap-4 min-w-[320px]">
            <Link to="/" className="inline-block">
              <div className="flex items-center select-none">
                <span className="text-black text-4xl font-black tracking-tighter mr-2">
                  LA
                </span>
                <span className="bg-[#56bfff] text-white px-3 py-1 text-2xl font-bold uppercase tracking-wide">
                  CONFIANZA
                </span>
              </div>
            </Link>

            <p className="text-green-100/70 text-sm max-w-[300px] leading-relaxed">
              A Shopify – Salesforce connector for seamless integration.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-1 w-full lg:w-auto">

            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-between border-b border-green-700/50 pb-6 mb-6 gap-6">

              <nav className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { name: 'Features', path: '/features' },
                  { name: 'How it Works', path: '/how-it-works' },
                  { name: 'Use Cases', path: '/use-cases' },
                  { name: 'Pricing', path: '/pricing' }

                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm font-semibold hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Social Icons - Using Custom Icons */}
              <div className="flex gap-3">
                {[
                  { Icon: LinkedinIcon, href: "#" },
                  { Icon: XIcon, href: "#" },
                  { Icon: YoutubeIcon, href: "#" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-9 h-9 rounded-full border border-green-700/50 flex items-center justify-center text-green-100/70 hover:bg-white hover:text-green-900 transition-all"
                  >
                    <social.Icon size={16} />
                  </a>
                ))}
              </div>

            </div>

            {/* Bottom Row */}
            <div className="flex flex-wrap items-center justify-between gap-y-6">

              <nav className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  { name: 'About Us', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                  { name: 'Privacy Policy', path: '/privacy-policy' },
                  { name: 'Terms and Conditions', path: '/terms' }
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-sm text-green-200/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-6 text-sm text-green-200/70">
                <span>&copy; {new Date().getFullYear()} La Confianza Technologies</span>

                <div className="flex items-center gap-2 border-l border-green-700/50 pl-6">
                  <Mail size={14} className="text-white/80" />
                  <a
                    href="mailto:sales@laconfianzatech.com"
                    className="hover:text-white lowercase"
                  >
                    sales@laconfianzatech.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}