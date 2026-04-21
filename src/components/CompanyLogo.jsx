export default function CompanyLogo({ className = "", isDarkTheme = false }) {
  return (
    <div className={`flex items-stretch font-black font-sans leading-none tracking-tight ${className}`}>
      <span className={`text-2xl md:text-3xl flex items-center pr-2 ${isDarkTheme ? 'text-white' : 'text-slate-900'}`}>
        LA
      </span>
      <span className="bg-[#42b6fb] text-white px-3 py-1.5 flex items-center text-2xl md:text-3xl">
        CONFIANZA
      </span>
    </div>
  );
}
