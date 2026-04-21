import { Check } from 'lucide-react';
import Button from './Button';

export default function PricingCard({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started'
}) {
  return (
    <div className={`relative flex flex-col h-full rounded-xl border bg-white shadow-sm transition-all duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl p-8 ${
      isPopular
        ? 'border-green-600 ring-4 ring-green-600/10'
        : 'border-gray-200'
    }`}>

      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-md whitespace-nowrap z-10">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8 pt-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-6 min-h-[40px] leading-relaxed">{description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-bold text-gray-900 tracking-tight">${price}</span>
          <span className="text-gray-500 font-medium">/mo</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-slate-100 mb-6" />

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check size={18} className="text-green-600 shrink-0 mt-0.5" />
            <span className="text-slate-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        to="/contact"
        variant={isPopular ? 'primary' : 'outline-dark'}
        className="w-full"
      >
        {ctaText}
      </Button>
    </div>
  );
}