import SectionWrapper from '../components/SectionWrapper';
import Card from '../components/Card';
import Button from '../components/Button';
import {
  Users, Award, Briefcase, Smile, Target, Sparkles,
  MapPin, Mail, Phone, CheckCircle2, ChevronRight, Globe
} from 'lucide-react';

export default function About() {
  const team = [
    { name: 'Dineshkumar R', role: 'Founder & Managing Director' },
    { name: 'Murali V', role: 'Director' },
    { name: 'Keerthiga D', role: 'Director of Finance' },
    { name: 'Krishna V R', role: 'Growth Advisor' },
    { name: 'Brez Jacobus', role: 'Global Business Head' },
    { name: 'Vijay Ratnnakar', role: 'Growth Partner (ANZ Region)' },
  ];

  const locations = [
    { country: 'USA', address: '1007 N Orange St, Wilmington, Delaware', phone: '+1 615 380 4749' },
    { country: 'India', address: 'Tiruppur, Tamil Nadu', phone: '+91 84285 75275' },
    { country: 'Singapore', address: 'Suntec Tower One', phone: '+1 615 380 4749' }
  ];

  return (
    <div className=" min-h-screen bg-gray-50">
      {/* Green Hero Section with Floating Shapes and Marquee */}
      {/* Standardized Green Hero Section - Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 min-h-[500px] lg:h-[75vh] flex items-center text-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">Our Story</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              We Don't Just Implement Tech We Make It Work for You
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              We go beyond implementation crafting seamless, intelligent solutions that drive efficiency, productivity, and real business results.
            </p>
            <div className="pt-4">
              <Button variant="secondary" className="px-8 py-4 font-bold text-lg">Join Our Team</Button>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
              <Users size={200} className="relative text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Effect */}
      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="animate-marquee-slow flex items-center space-x-12 text-sm font-bold uppercase tracking-widest text-slate-300">
            <span>Salesforce</span>
            <span>Shopify</span>
            <span>Automation</span>
            <span>Data</span>
            <span>Efficiency</span>
            <span>Innovation</span>
            {/* Duplicate for seamless loop */}
            <span>Salesforce</span>
            <span>Shopify</span>
            <span>Automation</span>
            <span>Data</span>
            <span>Efficiency</span>
            <span>Innovation</span>
          </div>
        </div>
      </div>

      {/* 2. Company Stats - Split Layout */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Driving impact at scale, every single day.</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Our numbers tell the story of a team dedicated to excellence and a community of clients who trust us with their most critical operations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Years Experience', value: '5+', icon: Award },
                { label: 'Projects Completed', value: '100+', icon: Briefcase },
                { label: 'Satisfaction Rate', value: '95%', icon: Smile },
                { label: 'Global Clients', value: '50+', icon: Globe }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-green-600 mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-bold uppercase tracking-wider text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3. Mission & Vision - Split Layout (Visual Left, Text Right) */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-square bg-green-50 rounded-3xl relative overflow-hidden flex items-center justify-center">
                <Target size={120} className="text-green-600/20 absolute transform -rotate-12 -translate-x-12 -translate-y-12" />
                <div className="relative z-10 w-20 h-20 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <Target size={40} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                We’re not just another tech service provider we’re your growth partners. Our mission is to help businesses streamline operations, scale efficiently, and unlock the full potential of technology.
              </p>
              <div className="grid grid-cols-1 gap-4 pt-4">
                {[
                  "Workflow automation excellence",
                  "Seamless CRM integrations",
                  "Data-driven analytics solutions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-green-200 transition-colors">
                    <CheckCircle2 className="text-green-600" size={20} />
                    <span className="font-bold text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 4. Founding Story - Structured Timeline */}
      <SectionWrapper className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left max-w-2xl mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">The Founding Story</h2>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              A journey driven by the belief that technology should empower, not complicate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block"></div>

            <div className="relative pr-0 md:pr-16">
              <div className="absolute right-0 top-6 w-4 h-4 bg-green-600 rounded-full translate-x-1/2 hidden md:block border-4 border-white shadow-sm"></div>
              <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left md:text-right">
                <div className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">2021</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Spark</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  La Confianza was founded to deliver high-quality Salesforce consulting and build long-term client partnerships. We focused on bridging the gap between complex tech and tangible business value.
                </p>
              </div>
            </div>

            <div className="md:mt-32 relative pl-0 md:pl-16">
              <div className="absolute left-0 top-6 w-4 h-4 bg-green-600 rounded-full -translate-x-1/2 hidden md:block border-4 border-white shadow-sm"></div>
              <div className="bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">2025</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Future</h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  Continuing our global expansion, launching new proprietary connector products like Syncify, and empowering teams worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 5. Our Team - Staggered Grid */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Meet Our Leadership Team</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                The driving force behind our innovative solutions and global expansion.
              </p>
            </div>
            <div className="pb-2">
              <Button variant="outline" className="px-6 py-3">View Open Roles</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-gray-50 flex flex-col items-start h-full hover:shadow-xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-white rounded-2xl mb-6 shadow-sm flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-green-600 font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* 6. Why Choose Us - Structured Feature Block */}
      <SectionWrapper className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest rounded-full">Value Proposition</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Why Choose Us</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                What makes La Confianza the preferred partner for modern enterprises seeking technical excellence and long-term growth.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Award, title: "Salesforce Certified", desc: "Deep technical expertise backed by industry-standard certifications." },
                { icon: Briefcase, title: "Niche Expertise", desc: "Specialized knowledge across a wide array of complex enterprise platforms." },
                { icon: Smile, title: "Client-Centric", desc: "Your goals are our goals. We build partnerships, not just software." },
                { icon: Sparkles, title: "Proven Track Record", desc: "Over 100+ successful projects and a 95% satisfaction rate." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 7. Global Presence - Split Layout */}
      <SectionWrapper className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest rounded-full">Global Reach</div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">Visit Our Offices Worldwide</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                Scaling businesses globally requires a local touch. Our offices are strategically placed to serve our international client base.
              </p>
              <div className="pt-4">
                <a href="mailto:sales@laconfianzatech.com" className="inline-flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-green-600 font-bold hover:bg-green-50 transition-colors">
                  <Mail size={20} /> sales@laconfianzatech.com
                </a>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all">
                      <MapPin size={20} />
                    </div>
                    {loc.country}
                  </h3>
                  <p className="text-gray-500 mb-6 font-medium leading-relaxed">{loc.address}</p>
                  <div className="flex items-center gap-2 text-gray-900 font-bold text-sm">
                    <Phone size={16} className="text-green-600" /> {loc.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 8. Newsletter - Focused Block */}
      <section className="bg-gray-50 py-32 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white p-12 md:p-20 rounded-[40px] shadow-xl shadow-green-900/5 border border-gray-100">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Stay ahead of the curve</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto font-medium leading-relaxed">
              Get the latest insights on Salesforce automation, Shopify growth, and enterprise efficiency delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-grow bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-all font-medium"
              />
              <Button type="submit" className="py-4 px-8 font-bold whitespace-nowrap shadow-lg shadow-green-600/20">
                Subscribe <ChevronRight size={18} className="ml-1" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
