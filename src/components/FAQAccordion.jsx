import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ question, answer, isOpen: defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-green-200 shadow-xl shadow-green-900/5' : 'bg-transparent border-gray-100'}`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-green-700' : 'text-gray-900'}`}>{question}</span>
        <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-green-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          <ChevronDown size={18} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-0">
          <p className="text-gray-600 font-medium leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
