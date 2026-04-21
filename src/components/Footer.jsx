import { Link } from 'react-router-dom';
import { Share2, Globe, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 to-green-900 text-green-100 py-12 border-t border-green-700 mt-auto">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">

          {/* Logo + Description */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center select-none">
                {/* FIXED LOGO: Using text instead of an image 
                   This removes the white 'reflection' inside the 'A' 
                */}
                <span className="text-black text-4xl font-black tracking-tighter mr-2">
                  LA
                </span>
                <span className="bg-[#56bfff] text-white px-3 py-1 text-2xl font-bold uppercase tracking-wide shadow-sm">
                  CONFIANZA
                </span>
              </div>
            </Link>

            <p className="text-green-100/80 leading-relaxed font-medium text-sm">
              We go beyond implementation — crafting seamless, intelligent solutions that drive efficiency, productivity, and real business results.
            </p>

            <div className="flex space-x-5">
              {[MessageCircle, Globe, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-green-100 hover:bg-white hover:text-green-900 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-8">Solutions</h3>
            <ul className="space-y-4">
              {['Salesforce', 'HubSpot', 'Shopify', 'AWS', 'Databricks'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm font-bold text-green-200 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-8">Products</h3>
            <ul className="space-y-4">
              {['Syncify', 'WhatsApp Connect', 'OneDrive Connector', 'Realty Pro', 'Omni Tracker'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-sm font-bold text-green-200 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-8">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blogs', 'Privacy Policy', 'Terms of Service', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={
                      link === 'About Us' ? '/about' :
                        link === 'Contact' ? '/contact' :
                          link === 'Privacy Policy' ? '/privacy-policy' :
                            link === 'Terms of Service' ? '/terms' : '#'
                    }
                    className="text-sm font-bold text-green-200 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-sm font-bold text-green-200/60">
            &copy; {new Date().getFullYear()} La Confianza Technologies. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm font-bold text-green-200">
            <Mail size={16} className="text-white" />
            <a
              href="mailto:sales@laconfianzatech.com"
              className="hover:text-white transition-colors"
            >
              sales@laconfianzatech.com
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}