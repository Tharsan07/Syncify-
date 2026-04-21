import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: Mail, title: "Email Us", desc: "Our friendly team is here to help.", link: "hello@syncify.io", href: "mailto:hello@syncify.io" },
  { icon: Phone, title: "Call Us", desc: "Mon-Fri from 8am to 5pm PST.", link: "+1 (800) 123-4567", href: "tel:+18001234567" },
  { icon: MapPin, title: "Global HQ", desc: "100 Innovation Drive, Suite 500", link: "San Francisco, CA 94103", href: "#" },
];

const inputClass = "w-full h-10 px-3 rounded-md border border-gray-300 text-sm text-gray-900 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:bg-white transition-all duration-200";
const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/40 to-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-green-800 h-[70vh] flex items-center text-white px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full">
              Contact Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight break-words">
              Let's Talk About Your Integration Needs
            </h1>
            <p className="text-lg md:text-xl text-green-100/90 max-w-2xl font-medium leading-relaxed">
              Whether you have a technical question, need a custom quote, or just want to see Syncify in action, our team is here to help you scale.
            </p>
          </div>
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-green-400/20 rounded-full blur-3xl" />
              <Mail size={180} className="relative text-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Body ── */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* ── Left: Contact Info ── */}
            <div className="lg:col-span-5 space-y-8 animate-fade-in-up">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">Get in touch</h2>
                <p className="text-base text-gray-600 leading-relaxed">
                  Our integration specialists are ready to help you architect the perfect Shopify-Salesforce bridge.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="bg-green-50 text-green-600 p-2.5 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-all duration-200 shadow-sm shrink-0">
                      <item.icon size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-500 text-xs mb-0.5">{item.desc}</p>
                      <span className="text-green-700 font-semibold text-sm">{item.link}</span>
                    </div>
                    <ArrowRight size={14} className="text-gray-300 group-hover:text-green-500 mt-1 transition-colors duration-200 shrink-0" />
                  </a>
                ))}
              </div>

              {/* Reassurance badge */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 animate-pulse shrink-0" />
                <p className="text-sm text-green-800 font-medium">
                  Average response time is <strong>under 2 hours</strong> on business days.
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 max-w-md animate-form-enter">
                <div className="mb-5">
                  <h2 className="text-xl font-bold text-gray-900">Send us a message</h2>
                  <p className="text-sm text-gray-500 mt-1">We'll get back to you within one business day.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input type="text" className={inputClass} placeholder="John" />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input type="text" className={inputClass} placeholder="Doe" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Work Email</label>
                    <input type="email" className={inputClass} placeholder="john@company.com" />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2.5 rounded-md border border-gray-300 text-sm text-gray-900 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 focus:bg-white transition-all duration-200 resize-none"
                      placeholder="Tell us about your integration needs..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-[0.97] hover:scale-[1.02] focus:ring-2 focus:ring-green-300 focus:outline-none text-white px-4 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 shadow-sm shadow-green-600/20"
                  >
                    <Send size={15} />
                    Send Message
                  </button>

                  <p className="text-center text-xs text-gray-400 pt-1">
                    By submitting, you agree to our{' '}
                    <a href="/terms" className="text-green-600 hover:underline font-medium">Terms</a>
                    {' '}and{' '}
                    <a href="/privacy-policy" className="text-green-600 hover:underline font-medium">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
