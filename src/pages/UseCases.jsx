import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import { Briefcase, HeadphonesIcon, Settings, Globe, CheckCircle2 } from 'lucide-react';

export default function UseCases() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-[70vh] flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Use Cases</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Built for Every Team in Your Organization
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Discover how different departments leverage Syncify to eliminate silos, drive efficiency, and accelerate growth.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <Globe size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>

      {/* Sales Teams Section - Split Layout */}
      <SectionWrapper className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-up">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                <Briefcase size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Sales Teams (B2B & Wholesale)</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Equip your sales reps with real-time purchasing data. When a wholesale customer places an order on your Shopify Plus B2B store, it immediately syncs to Salesforce as an Opportunity.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {[
                  "Trigger automated follow-ups",
                  "View cart abandonment data",
                  "Manage custom pricing tiers"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative animate-fade-up">
              <div className="absolute -inset-4 bg-green-50 rounded-3xl rotate-2"></div>
              <div className="relative rounded-2xl border border-gray-100 overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 p-2 bg-white">
                <img src="./src/assets/Salesteam.png" alt="Salesforce Sales Interface" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Support Teams Section - Split Layout (Visual Left) */}
      <SectionWrapper className="bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative animate-fade-up">
              <div className="absolute -inset-4 bg-white rounded-3xl -rotate-2"></div>
              <div className="relative rounded-2xl border border-gray-100 overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 p-2 bg-white">
                <img src="./src/assets/Serviceteam.png" alt="Service Cloud Interface" className="w-full h-auto rounded-xl" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-up">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                <HeadphonesIcon size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Support Teams</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Reduce resolution times by giving agents context. When a ticket opens in Service Cloud, agents can instantly see the customer's lifetime value, recent orders, and tracking statuses.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {[
                  "Process refunds from Salesforce",
                  "Automated shipping delay alerts",
                  "Customer tier segmentation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Operations Section - Split Layout */}
      <SectionWrapper className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 space-y-8 animate-fade-up">
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center shadow-sm">
                <Settings size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Operations & Fulfillment</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Ensure your ERP, 3PL, and Shopify store are perfectly aligned. Syncify acts as the routing engine for complex order fulfillment workflows.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {[
                  "Multi-location inventory syncing",
                  "Custom order routing rules",
                  "Real-time return & RMA sync"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative animate-fade-up">
              <div className="absolute -inset-4 bg-green-50 rounded-3xl rotate-2"></div>
              <div className="relative rounded-2xl border border-gray-100 overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 p-2 bg-white">
                <img src="./src/assets/OperationAndFullfilment.png" alt="Operations Dashboard" className="w-full h-auto rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA - Focused Block */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-900 p-12 md:p-20 rounded-[40px] shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 space-y-8">
               <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Ready to empower your teams?</h2>
               <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                 Discover how Syncify can transform your departmental efficiency and drive measurable growth.
               </p>
               <div className="pt-4">
                 <Button to="/contact" variant="primary" className="px-12 py-5 text-xl font-bold shadow-xl shadow-green-600/20">
                   Book Your Demo
                 </Button>
               </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}