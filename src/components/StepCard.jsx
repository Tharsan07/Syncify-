export default function StepCard({ icon: Icon, title, description, step, isActive }) {
  return (
    <div 
      className={`relative p-6 rounded-xl border transition-all duration-300 shadow-sm ${
        isActive 
          ? 'bg-white border-green-500' 
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
          isActive ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700'
        }`}>
          <Icon size={24} />
        </div>
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-green-600 mb-1">Step {step}</div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
