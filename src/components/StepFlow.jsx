import { Link2, SlidersHorizontal, Power, LayoutDashboard } from 'lucide-react';

export default function StepFlow() {
  const steps = [
    { id: 1, icon: Link2, title: 'Connect Shopify', desc: 'Connect your Shopify and Salesforce accounts securely in minutes' },
    { id: 2, icon: SlidersHorizontal, title: 'Configure Mapping', desc: 'Personalize what data should sync with flexible field mapping' },
    { id: 3, icon: Power, title: 'Enable Sync', desc: 'Start real-time sync and eliminate manual updates instantly' },
    { id: 4, icon: LayoutDashboard, title: 'Monitor Dashboard', desc: 'Track sync activity and resolve issues before they impact operations' }
  ];

  return (
    <div className="max-w-3xl mx-auto">

      {/* ✅ Intro Line Added */}
      <p className="text-center text-gray-600 font-medium mb-8">
        Go live in minutes with a simple 4-step setup
      </p>

      <div className="relative border-l border-green-200 pl-6 ml-5 space-y-8">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex items-start gap-4 relative">
              {/* Dot on the connector line */}
              <div className="absolute -left-[2.375rem] top-2.5 w-3 h-3 rounded-full bg-green-600 border-2 border-white shadow-sm ring-2 ring-green-200" />

              {/* Icon */}
              <div className="w-10 h-10 bg-green-100 text-green-700 rounded-lg flex items-center justify-center shrink-0">
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="space-y-1 pt-1">
                <div className="text-green-600 text-sm font-semibold uppercase tracking-widest">
                  Step {step.id}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}