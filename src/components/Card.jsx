export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-md hover:-translate-y-1 overflow-hidden ${className}`} {...props}>
      {children}
    </div>
  );
}
