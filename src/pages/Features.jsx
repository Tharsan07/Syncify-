import SectionWrapper from '../components/SectionWrapper';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';
import { 
  RefreshCw, ArrowRight, Layers, DollarSign, Settings, AlertTriangle, 
  Database, Shield, Clock, Search, Zap, CheckCircle2 
} from 'lucide-react';

export default function Features() {
  const features = [
    { icon: RefreshCw, title: "Real-time Sync", description: "Changes sync within milliseconds. No batch processing delays." },
    { icon: ArrowRight, title: "Bi-directional", description: "Flow data in either direction based on your system of truth." },
    { icon: Layers, title: "Multi-store Support", description: "Connect unlimited Shopify stores to a single Salesforce org." },
    { icon: DollarSign, title: "Multi-currency", description: "Native support for complex multi-currency setups." },
    { icon: Settings, title: "Custom Mapping", description: "Map custom fields, metafields, and custom objects effortlessly." },
    { icon: AlertTriangle, title: "Error Monitoring", description: "Detailed logs and automatic retries for API rate limits." },
    { icon: Database, title: "Historical Sync", description: "Import years of historical data with a single click." },
    { icon: Shield, title: "Enterprise Security", description: "SOC2 Type II certified with end-to-end encryption." },
    { icon: Clock, title: "Scheduled Syncs", description: "Optionally batch syncs on your preferred schedule." },
    { icon: Search, title: "Advanced Filtering", description: "Only sync the data you need using complex logic rules." },
    { icon: Zap, title: "High Throughput", description: "Built on AWS to handle flash sales and Black Friday volume." },
    { icon: CheckCircle2, title: "Data Validation", description: "Pre-flight checks ensure bad data never enters your CRM." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 min-h-[500px] lg:h-[70vh] flex items-center text-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Platform Capabilities</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Powerful Features for Complex Enterprise Setups
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Everything you need to build a bulletproof, real-time integration between Shopify and Salesforce without writing a single line of code.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
             <div className="relative">
               <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl"></div>
               <Zap size={180} className="relative text-white/10" />
             </div>
          </div>
        </div>
      </section>

      {/* Core Features - Split Layout */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/3 space-y-6">
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Core Sync Capabilities</h2>
               <p className="text-lg text-gray-600 font-medium leading-relaxed">
                 The foundation of Syncify is built on speed, reliability, and precision. These core features ensure your data flows exactly how you need it.
               </p>
               <div className="pt-4">
                 <Button variant="outline-dark" className="px-6 py-3">Book a Technical Deep-Dive</Button>
               </div>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="p-10 rounded-[32px] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-white text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Advanced Features - Staggered Grid */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Advanced Enterprise Logic</h2>
            <p className="text-lg text-gray-600 font-medium">Built to handle the most demanding commerce environments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(4).map((feature, idx) => (
              <div key={idx} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <feature.icon size={20} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* The Syncify Advantage - Split Layout */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3 space-y-6">
               <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">Comparison</div>
               <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">The Syncify Advantage</h2>
               <p className="text-lg text-gray-600 font-medium leading-relaxed">
                 Stop wasting resources on custom dev and maintenance. Syncify gives you a production-ready, enterprise-grade integration in minutes.
               </p>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="overflow-x-auto border border-gray-100 rounded-3xl shadow-2xl shadow-gray-200/50">
                <table className="w-full min-w-[600px] text-left border-collapse bg-white">
                  <thead>
                    <tr className="border-b border-gray-100 bg-gray-50/50">
                      <th className="py-6 px-8 font-bold text-gray-900">Capability</th>
                      <th className="py-6 px-8 font-bold text-green-700 bg-green-50/50">With Syncify</th>
                      <th className="py-6 px-8 font-bold text-gray-400">Without</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Setup Time', 'Minutes (No code)', 'Months (Custom dev)'],
                      ['Maintenance', 'Fully managed', 'Manual updates'],
                      ['Reliability', '99.99% SLA', 'Rate limit errors'],
                      ['Scalability', 'Auto-scales', 'Manual upgrades']
                    ].map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-0">
                        <td className="py-6 px-8 font-bold text-gray-900 text-sm">{row[0]}</td>
                        <td className="py-6 px-8 bg-green-50/10">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="text-green-600 shrink-0" size={16}/> 
                            <span className="text-green-700 font-bold text-sm">{row[1]}</span>
                          </div>
                        </td>
                        <td className="py-6 px-8 text-gray-400 text-sm font-medium">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      
      {/* Final CTA - Focused Block */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-slate-900 p-12 md:p-20 rounded-[40px] shadow-2xl shadow-slate-900/20 text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 space-y-8">
               <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Ready to see it in action?</h2>
               <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto">
                 Book a live demo with one of our integration specialists and see how Syncify can transform your commerce operations.
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
