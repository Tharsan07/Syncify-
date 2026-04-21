import { Link } from 'react-router-dom';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:scale-[1.02] active:scale-[0.98]";
  
  const variants = {
    primary:       "bg-green-600 text-white hover:bg-green-700 shadow-sm focus:ring-green-300",
    secondary:     "bg-white text-green-700 border border-green-200 hover:bg-green-50 shadow-sm focus:ring-green-100",
    outline:       "bg-white/10 text-white border border-white hover:bg-white hover:text-green-700 shadow-sm",
    'outline-dark':"bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-100 hover:border-gray-400",
    ghost:         "bg-transparent text-gray-600 hover:text-green-700 hover:bg-green-50"
  };

  if (props.to) {
    return (
      <Link className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
