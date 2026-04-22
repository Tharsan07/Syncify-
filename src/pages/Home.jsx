import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Layers, DollarSign, Settings, AlertTriangle, CheckCircle2, Activity, Users } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import StepFlow from '../components/StepFlow';
import HeroImage from '../assets/HomePage_HeroSection.png';

export default function Home() {
  return (
    <div className="">
      {/* Standardized Green Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 min-h-[600px] lg:h-[80vh] flex items-center text-white px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight break-words">
              Real-Time Shopify to Salesforce Sync Connector
            </h1>
            <p className="text-lg md:text-xl text-green-50/90 leading-relaxed font-medium max-w-2xl">
              Sync orders, customers, products, & inventory between Shopify and Salesforce.
            </p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="secondary" className="px-10 py-5 text-lg font-bold shadow-xl shadow-green-600/20">
                  Start Free Trial
                </Button>
                <Button to="/contact" variant="outline-dark" className="px-10 py-5 text-lg font-bold">
                  Book a Demo
                </Button>
              </div>
              <p className="text-sm text-white-500 font-medium">
                Trusted by growing e-commerce teams to sync and manage critical data at scale
              </p>
            </div>
          </div>

          {/* Right Content Column - Integrated with Ambient Border */}
          <div className="hidden lg:block lg:col-span-5 relative">

            {/* 1. Deep Ambient Glow (Adopts Hero Green) */}
            <div className="absolute inset-0 bg-green-400/20 blur-[120px] rounded-full transform scale-125"></div>

            {/* 2. Inner Soft Border Light */}
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-90"></div>

            <div className="relative z-10 flex items-center justify-center">
              <img
                src={HeroImage}
                alt="Syncify Real-time Integration Hub"
                /* The drop-shadow now uses a slight green tint (rgba 74, 222, 128) 
                   to act as a "soft border" that adopts the section's theme.
                */
                className="max-w-full max-h-[500px] object-contain drop-shadow-[0_20px_50px_rgba(74,222,128,0.3)] transform hover:scale-[1.03] transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Trust Bar / Marquee */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <div className="relative overflow-hidden w-full flex justify-center">
              <div className="animate-marquee-slow flex items-center space-x-12 text-sm font-bold uppercase tracking-widest text-slate-300">
                <span className="px-4">1M+ records synced daily</span>
                <span className="px-4">99.9% sync reliability</span>
                <span className="px-4">Go live in minutes</span>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Everything you need to sync Shopify and Salesforce seamlessly </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Set up real-time, bi-directional sync without engineering effort. Keep your Shopify and Salesforce data aligned, accurate, and ready for action.
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

            {/* Left Column */}
            <div className="w-full lg:w-3/5 relative">
              <div className="absolute -inset-4 bg-green-50 rounded-3xl -rotate-2"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <StepFlow />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-2/5 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                See Syncify in Action
              </h2>

              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                A live look at how your data connects seamlessly between Shopify and Salesforce. Watch your orders transform into rich CRM insights in seconds.
              </p>

              {/* Short, compact video container */}
              <div className="relative w-full max-w-[380px] aspect-video rounded-lg overflow-hidden shadow-md border border-gray-100 group">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/hWijX3VUW0E"
                  title="Syncify Quick Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="space-y-4 pt-2">
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

      {/* Use Cases Section */}
      {/* Use Cases Section */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Explore how teams use Syncify to scale
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              From e-commerce to complex sales operations, see how teams sync and manage data efficiently across Shopify and Salesforce.
            </p>
          </div>
        </div>

        {/* Main Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

          {/* Card 1 */}
          <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="flex-grow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sales & Growth Teams</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm font-medium">
                Get full visibility into customer purchases directly inside Salesforce
              </p>

              {/* Bullet points */}
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium">
                <li>Identify upsell and cross-sell opportunities faster</li>
                <li>Improve account scoring with real-time data</li>
              </ul>
            </div>

            <Link to="/use-cases" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-4 border-t border-gray-50">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="flex-grow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support Teams</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm font-medium">
                Access order and customer data instantly to resolve tickets faster
              </p>

              {/* Bullet points */}
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium">
                <li>Reduce back-and-forth between tools</li>
                <li>Deliver faster, more accurate support</li>
              </ul>
            </div>

            <Link to="/use-cases" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-4 border-t border-gray-50">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col">
            <div className="flex-grow">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operations</h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm font-medium">
                Automate order syncing and eliminate manual reconciliation
              </p>

              {/* Bullet points */}
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 font-medium">
                <li>Keep inventory and order data aligned</li>
                <li>Reduce operational overhead and errors</li>
              </ul>
            </div>

            <Link to="/use-cases" className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all pt-4 border-t border-gray-50">
              Learn more <ArrowRight size={16} />
            </Link>
          </div>

          {/* Bottom CTA */}
          <div className="md:col-span-12 bg-green-600 p-10 rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between overflow-hidden relative group mt-4">
            <div className="relative z-10 space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold">Explore how teams use Syncify to scale</h3>
              <p className="text-green-50/80 font-medium max-w-xl">
                From e-commerce to complex sales operations, see how teams sync and manage data efficiently across Shopify and Salesforce.
              </p>
            </div>

            <div className="relative z-10 mt-6 sm:mt-0">
              <Button to="/use-cases" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-green-600 transition-all px-8 py-3">
                View All Use Cases
              </Button>
            </div>

            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
              <Layers size={220} />
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