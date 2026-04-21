import SectionWrapper from '../components/SectionWrapper';
import { FileText } from 'lucide-react';

export default function Terms() {
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "subscriptions", title: "2. Subscriptions" },
    { id: "fairuse", title: "3. Fair Use" },
    { id: "liability", title: "4. Limitation of Liability" },
    { id: "changes", title: "5. Changes" },
    { id: "contact", title: "6. Contact Us" },
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
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Legal</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Last updated: April 20, 2026 • Please read these terms carefully to understand your rights and obligations.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <FileText size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>
      <SectionWrapper className="py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-1 border-l border-slate-200 ml-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-semibold text-slate-500 hover:text-green-600 hover:border-green-600 border-l-2 border-transparent -ml-[2px] transition-all"
                >
                  {section.title}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-9 space-y-8 animate-fade-up">
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="prose prose-gray max-w-none prose-headings:scroll-mt-32">
                <p className="text-gray-600 leading-relaxed italic border-b border-gray-100 pb-8 mb-8">
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Syncify website and application operated by Syncify Inc.
                </p>

                <div id="acceptance" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. This agreement applies to all visitors, users, and others who access or use the Service.
                  </p>
                </div>

              <div id="subscriptions" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Subscriptions</h2>
                <p>
                  Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle").
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>Billing cycles are set on a monthly or annual basis.</li>
                  <li>Subscriptions automatically renew unless cancelled.</li>
                  <li>A valid payment method is required to process the payment for your Subscription.</li>
                </ul>
              </div>

              <div id="fairuse" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Fair Use & Rate Limiting</h2>
                <p>
                  Syncify provides high-volume data synchronization. However, to ensure quality of service for all users, we enforce rate limits based on your Subscription tier.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 my-6">
                  <p className="text-amber-800 text-sm m-0">
                    <strong>Note:</strong> Attempting to bypass these limits or abusing our API infrastructure may result in immediate account suspension without prior notice.
                  </p>
                </div>
              </div>

              <div id="liability" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitation of Liability</h2>
                <p>
                  In no event shall Syncify Inc, nor its directors, employees, partners, agents, or affiliates, be liable for any indirect, incidental, special, or consequential damages, including without limitation, loss of profits, data, use, or other intangible losses.
                </p>
              </div>

              <div id="changes" className="py-8 border-t border-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Changes to Terms</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least <strong>30 days notice</strong> prior to any new terms taking effect.
                </p>
              </div>

                <div id="contact" className="mt-12 bg-gray-50 rounded-xl p-8 border border-gray-200 transition-all hover:border-green-200 group">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 mt-0">6. Contact Us</h2>
                  <p className="text-gray-600 mb-6">
                    If you have any questions about these Terms, please contact our legal team.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="mailto:sales@laconfianzatech.com" className="font-semibold text-green-700 hover:text-green-800 transition-colors group-hover:underline">
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