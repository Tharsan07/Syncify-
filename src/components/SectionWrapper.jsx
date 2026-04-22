import { useEffect, useRef, useState } from 'react';

export default function SectionWrapper({ children, className = '', id }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={sectionRef} className={`py-20 overflow-hidden ${className}`}>
      {/* Increased to 7xl to provide space for the 3-column row */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {children}
      </div>
    </section>
  );
}