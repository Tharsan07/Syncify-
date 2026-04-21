import SectionWrapper from '../components/SectionWrapper';
import { Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    { id: "collection", title: "1. Information We Collect" },
    { id: "usage", title: "2. Use of Your Information" },
    { id: "security", title: "3. Security Measures" },
    { id: "contact", title: "4. Contact Us" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-[60vh] flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Security</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Last updated: April 21, 2026 • Your data security is our top priority. We implement enterprise-grade measures to protect your information.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <Shield size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>
      <SectionWrapper className="py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-1 border-l border-gray-200 ml-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-semibold text-gray-500 hover:text-green-700 hover:border-green-700 border-l-2 border-transparent -ml-[2px] transition-all"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 animate-fade-up">
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="prose prose-gray max-w-none prose-headings:scroll-mt-32">
                <p className="text-gray-600 leading-relaxed italic border-b border-gray-100 pb-8 mb-8">
                  At Syncify, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our application.
                </p>

              <div id="collection" className="py-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
                <ul className="space-y-4">
                  <li>
                    <strong className="text-slate-900">Personal Data:</strong>
                    <span className="block text-slate-600">Personally identifiable information, such as your name, shipping address, email address, and telephone number.</span>
                  </li>
                  <li>
                    <strong className="text-slate-900">Integration Data:</strong>
                    <span className="block text-slate-600">Data synced between your connected platforms (e.g., Shopify and Salesforce). We temporarily process this data to facilitate the sync but do not store your customers' PII permanently unless required for error logging.</span>
                  </li>
                  <li>
                    <strong className="text-slate-900">Derivative Data:</strong>
                    <span className="block text-slate-600">Information our servers automatically collect when you access the Site, such as your IP address, your browser type, and your operating system.</span>
                  </li>
                </ul>
              </div>

              <div id="usage" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information to:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Create and manage your administrative account.</li>
                  <li>Facilitate the synchronization of data between your chosen platforms.</li>
                  <li>Email you regarding account updates or technical order issues.</li>
                  <li>Fulfill and manage purchases, payments, and other transactions.</li>
                </ul>
              </div>

              <div id="security" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 text-blue-800 text-sm">
                  <strong>Encryption Standard:</strong> All data in transit between Shopify, Syncify, and Salesforce is encrypted using industry-standard SSL/TLS protocols.
                </div>
                <p>
                  While we have taken reasonable steps to secure the personal information you provide, please be aware that no security measures are perfect or impenetrable.
                </p>
              </div>

                <div id="contact" className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200 transition-all hover:border-green-200 group">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 mt-0">4. Contact Us</h2>
                  <p className="text-gray-600 mb-6 font-medium">
                    If you have questions or comments about this Privacy Policy, please contact our privacy officer.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:sales@laconfianzatech.com" className="font-bold text-green-700 hover:text-green-800 transition-colors group-hover:underline">
                      sales@laconfianzatech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </SectionWrapper>
    </div>
  );
}