import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import { DollarSign, RefreshCw } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 min-h-[500px] lg:h-[70vh] flex items-center text-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Pricing Plans</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Simple, Transparent Pricing for Scale
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Start for free, then choose a plan that scales with your business volume. No hidden fees, just pure value.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <DollarSign size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Split Layout */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Flexible plans for every stage</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Whether you're a boutique brand or a global enterprise, we have a plan that fits your volume and complexity.
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <RefreshCw className="text-green-600" size={18} />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-gray-700">
                  <RefreshCw className="text-green-600" size={18} />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col md:flex-row gap-8 items-stretch">
              <div className="flex-1">
                <PricingCard 
                  title="Standard Plan"
                  price="20"
                  description="Perfect for small to medium businesses starting out."
                  features={[
                    "Up to 5,000 orders/month",
                    "Real-time sync",
                    "Standard field mapping",
                    "1 Shopify Store connection",
                    "Email Support"
                  ]}
                />
              </div>
              <div className="flex-1">
                <PricingCard 
                  title="Pro Plan"
                  price="30"
                  description="For growing brands with complex data requirements."
                  isPopular={true}
                  features={[
                    "Up to 25,000 orders/month",
                    "Advanced custom mapping",
                    "Multiple Shopify Stores",
                    "Multi-currency support",
                    "Priority 24/7 Support",
                    "Historical Data Import"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Enterprise Section - Split Layout */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl md:rounded-[40px] p-8 md:p-16 text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest rounded-full">Enterprise</div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">Need Enterprise volume?</h2>
                <p className="text-slate-400 text-lg font-medium leading-relaxed">
                  For businesses processing over 25,000 orders per month, or requiring custom SLA and dedicated account management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Button to="/contact" variant="primary" className="px-10 py-4 text-lg font-bold shadow-xl shadow-green-600/20">Contact Sales</Button>
                <Button to="/contact" variant="outline" className="px-10 py-4 text-lg font-bold border-white/20 text-white hover:bg-white/10">Book a Demo</Button>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Everything you need to know about our pricing, plans, and technical requirements.
              </p>
              <div className="pt-4">
                 <p className="text-sm font-bold text-gray-400">Still have questions?</p>
                 <Link to="/contact" className="text-green-600 font-bold hover:underline">Chat with our team</Link>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4">
              <FAQAccordion question="Do you offer a free trial?" answer="Yes, all plans come with a 14-day free trial. No credit card is required to start." isOpen={true} />
              <FAQAccordion question="What counts as an 'order'?" answer="Any transaction created in Shopify that syncs to Salesforce counts towards your monthly limit. Updates to existing orders do not count as new orders." />
              <FAQAccordion question="Can I upgrade or downgrade anytime?" answer="Absolutely. Your billing will be pro-rated automatically based on when you change your plan." />
              <FAQAccordion question="Is there a setup fee?" answer="No, there are no hidden setup fees. If you need dedicated onboarding assistance, we offer a paid white-glove implementation service." />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
