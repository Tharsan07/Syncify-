import Card from './Card';

// eslint-disable-next-line no-unused-vars
export default function FeatureCard({ icon: Icon, title, description, className = '', index = 0 }) {
  return (
    <Card 
      className={`p-8 group border-gray-200 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${className}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-8 h-1 w-12 bg-green-600 rounded-b-full group-hover:w-24 transition-all duration-500"></div>

      <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={28} />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-green-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm font-medium">
          {description}
        </p>
      </div>
    </Card>
  );
}
