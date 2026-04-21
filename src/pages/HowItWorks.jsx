import SectionWrapper from '../components/SectionWrapper';
import FAQAccordion from '../components/FAQAccordion';
import StepFlow from '../components/StepFlow';
import { ArrowRightLeft, Layers } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-[70vh] flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">The Process</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              How Syncify Connects Your Commerce Data
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              A seamless, no-code bridge that ensures your front-end storefront and back-end CRM are always perfectly in sync.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <Layers size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>

      {/* Step Flow Section - Centered Vertical Layout */}
      <SectionWrapper className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">Implementation made simple</h2>
            <p className="text-base text-gray-600 font-medium leading-relaxed">
              Connect, map, and sync. Our streamlined onboarding ensures you're up and running in minutes, not months.
            </p>
          </div>
          <StepFlow />
          <div className="mt-10 max-w-xl mx-auto">
            <div className="bg-green-50 p-5 rounded-2xl border border-green-100 text-center">
              <p className="text-sm text-green-800 font-bold leading-relaxed">
                "Syncify reduced our implementation time by 85% compared to our previous custom solution."
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Data Flow Section - Split Layout (Visual Left, Text Right) */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5">
              <div className="bg-white rounded-[40px] border border-gray-100 overflow-hidden shadow-2xl shadow-gray-200/50">
                <div className="grid grid-cols-3 bg-gray-50/50 p-8 font-bold text-gray-400 border-b border-gray-100 uppercase tracking-widest text-[10px]">
                  <div>Shopify</div>
                  <div className="flex justify-center"><ArrowRightLeft size={16} /></div>
                  <div>Salesforce</div>
                </div>
                <div className="divide-y divide-gray-50">
                  {[
                    ['Customer', 'Account & Contact'],
                    ['Order', 'Opportunity / Order'],
                    ['Product', 'Product2 & Pricebook'],
                    ['Fulfillment', 'Fulfillment Object'],
                    ['Refund', 'Credit Memo']
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 p-8 items-center hover:bg-green-50/20 transition-all group">
                      <div className="font-bold text-gray-900">{row[0]}</div>
                      <div className="flex justify-center">
                         <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                           <ArrowRightLeft size={14} />
                         </div>
                      </div>
                      <div className="font-bold text-gray-900">{row[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">Data Architecture</div>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Standard Data Mapping</h2>
               <p className="text-lg text-gray-600 font-medium leading-relaxed">
                 Syncify comes with pre-configured mapping for all standard commerce objects. Our intelligent engine handles complex relationships automatically.
               </p>
               <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                     <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs shrink-0 mt-1">1</div>
                     <p className="text-sm font-bold text-gray-700 leading-relaxed">Objects are matched based on unique identifiers to prevent duplicates.</p>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs shrink-0 mt-1">2</div>
                     <p className="text-sm font-bold text-gray-700 leading-relaxed">Bi-directional sync ensures updates flow back to Shopify instantly.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section - Split Layout */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Technical FAQs</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Deep dive into the technical aspects of how Syncify handles your data security and synchronization.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <FAQAccordion question="How long does it take to set up?" answer="Most customers complete the initial setup and field mapping within 30 minutes. Complex custom logic might take a few days to fully test." isOpen={true} />
              <FAQAccordion question="Do I need a developer?" answer="No. Syncify is designed to be configured by Salesforce Admins or eCommerce Managers without writing any code." />
              <FAQAccordion question="What happens if Salesforce is down?" answer="Syncify queues all Shopify events. Once Salesforce is back online, we automatically process the queue so no data is lost." />
              <FAQAccordion question="Can I map custom fields?" answer="Yes! Syncify fully supports custom objects, custom fields, and Shopify Metafields." />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
