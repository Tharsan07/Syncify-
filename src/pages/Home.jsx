import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Layers, DollarSign, Settings, AlertTriangle, CheckCircle2, Activity, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import StepFlow from '../components/StepFlow';
import HeroImage from '../assets/Hero_Section.png';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Standardized Green Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-[70vh] flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight break-words">
              Sync Shopify with Salesforce In Real Time
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 leading-relaxed font-medium max-w-2xl">
              Eliminate manual data entry. Syncify automatically bi-directionally syncs orders, customers, and products between Shopify and Salesforce.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button to="/contact" variant="secondary" className="w-full sm:w-auto px-8 py-4 font-bold text-lg">
                Start Free Trial <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button to="/contact" variant="outline" className="w-full sm:w-auto px-8 py-4 font-bold text-lg">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-sm p-4 rounded-2xl border border-white/10 shadow-2xl">
              <img
                src={HeroImage}
                alt="Syncify Real-time Integration Hub"
                className="w-full h-auto rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Marquee */}
      <div className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">Trusted by Enterprise Teams</div>
            <div className="relative overflow-hidden w-full">
              <div className="animate-marquee-content animate-marquee flex items-center space-x-12 text-sm font-bold uppercase tracking-widest text-slate-300">
                <span>Real-time Sync</span>
                <span>Bi-directional Data</span>
                <span>Shopify & Salesforce</span>
                <span>No-Code Platform</span>
                <span>Enterprise Grade</span>
                <span>Automated Workflows</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview - Split Layout */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">Feature Stack</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Everything you need to connect your stack</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                A robust, enterprise-grade integration that works out of the box. No coding required. Eliminate silos and unify your customer journey.
              </p>
              <div className="pt-4">
                <Button to="/features" variant="outline-dark" className="px-6 py-3">Explore All Features</Button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: RefreshCw, title: "Real-time Sync", description: "Changes reflect instantly." },
                { icon: ArrowRight, title: "Bi-directional", description: "Sync orders and updates." },
                { icon: Layers, title: "Multi-store", description: "Connect multiple storefronts." },
                { icon: Settings, title: "Custom Mapping", description: "Map any custom fields." }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <feature.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Product Demo Flow - Split Layout (Visual Left, Text Right) */}
      <SectionWrapper className="bg-white py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-3/5 relative">
              <div className="absolute -inset-4 bg-green-50 rounded-3xl -rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <StepFlow />
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">See Syncify in Action</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                A live look at how your data connects seamlessly between Shopify and Salesforce. Watch your orders transform into rich CRM insights in seconds.
              </p>
              <div className="space-y-4 pt-4">
                {[
                  "Visual workflow designer",
                  "Automated conflict resolution",
                  "Deep-link data tracking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-gray-800">
                    <CheckCircle2 className="text-green-600" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Use Cases - Staggered/Mixed Layout */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Built for every team</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Empower your entire organization with a single source of truth across all sales and support channels.
              </p>
            </div>
            <div className="hidden md:block">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-green-600 flex items-center justify-center text-xs font-bold text-white">
                   +50
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Card */}
            <div className="md:col-span-8 bg-white p-10 rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl group">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="md:w-1/2 space-y-6">
                  <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                    <Activity size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Sales & Growth Teams</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Give reps full visibility into customer purchase history without leaving Salesforce.</p>
                  <ul className="space-y-3">
                    <li className="flex gap-2 text-sm text-gray-700 font-bold"><CheckCircle2 className="text-green-600 shrink-0" size={18} /> <span>Upsell opportunities</span></li>
                    <li className="flex gap-2 text-sm text-gray-700 font-bold"><CheckCircle2 className="text-green-600 shrink-0" size={18} /> <span>Account scoring</span></li>
                  </ul>
                </div>
                <div className="md:w-1/2 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
                    <div className="h-20 bg-green-100 rounded-xl w-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Smaller Cards */}
            <div className="md:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl group h-full">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support Teams</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">Resolve tickets faster with order status and tracking info.</p>
                <Link to="/use-cases" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="md:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl group h-full">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Settings size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Operations</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm font-medium">Automate fulfillment and keep inventory levels synced.</p>
                <Link to="/use-cases" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">Learn more <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="md:col-span-8 bg-green-600 p-10 rounded-3xl text-white flex items-center justify-between overflow-hidden relative group">
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl font-bold">Ready to see more?</h3>
                <p className="text-green-50/80 font-medium max-w-md">Discover how Syncify helps businesses across every industry scale their operations.</p>
                <Button to="/use-cases" variant="outline" className="border-white/20 text-white hover:bg-white/10">View All Use Cases</Button>
              </div>
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
                <Layers size={200} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <section className="relative overflow-hidden bg-white py-32 text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full mb-8">Get Started Today</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-gray-900">Ready to unify your commerce stack?</h2>
          <p className="text-gray-600 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Join hundreds of forward-thinking companies running on Syncify. Seamlessly connect Shopify and Salesforce today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contact" variant="secondary" className="px-10 py-5 text-lg font-bold shadow-xl shadow-green-600/20">
              Start Free Trial
            </Button>
            <Button to="/contact" variant="outline-dark" className="px-10 py-5 text-lg font-bold">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}