import React, { useState, useEffect } from 'react';
import { MenuCategory } from '../types';
import { BRAND_COLOR, BORDER_COLOR, MENU_DATA } from '../constants';
import { Menu, X } from 'lucide-react';
import { Logo } from '../constants'; // Importing the updated Logo

interface NavigationProps {
  categories: MenuCategory[];
}

export const Navigation: React.FC<NavigationProps> = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = categories.map(cat => {
        const el = document.getElementById(cat.id);
        return { id: cat.id, offset: el ? el.offsetTop - 180 : 0 };
      });

      const currentScroll = window.scrollY;
      const active = offsets.reduce((prev, curr) => {
        return Math.abs(curr.offset - currentScroll) < Math.abs(prev.offset - currentScroll) ? curr : prev;
      });
      
      if (active) setActiveCategory(active.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categories]);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Utility Bar (Desktop) */}
      <div className="hidden md:flex justify-between items-center py-4 px-6 border-b border-black bg-[#F2F0EA]">
          <div className="font-mono text-xs uppercase tracking-widest text-gray-600">
            Est. 2016 / Тверь
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-gray-600">
            Ежедневно 08:00 - 18:00+
          </div>
      </div>

      {/* Main Branding Header - Flows naturally with the document, no jumps */}
      <div className="w-full bg-[#F2F0EA] pt-12 pb-8 px-4 flex flex-col items-center justify-center">
          <div className="w-full max-w-[300px] md:max-w-[400px] text-black">
             <Logo className="w-full h-auto" />
          </div>
          <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-gray-400 mt-4 uppercase">
              * Брекфаст Бэнд
          </p>
      </div>

      {/* Mobile Toggle (Fixed) */}
      <div className="fixed top-4 right-4 z-50 md:hidden mix-blend-difference text-white">
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} color="black" />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#D94F3D] text-[#F2F0EA] flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-right duration-300">
           <div className="text-4xl font-serif font-bold">Меню</div>
           <div className="flex flex-col gap-4 text-center">
             {categories.map(cat => (
               <button key={cat.id} onClick={() => scrollToCategory(cat.id)} className="text-xl font-mono uppercase hover:underline underline-offset-4">
                 {cat.title}
               </button>
             ))}
           </div>
           <div className="mt-8 pt-8 border-t border-white/30 w-1/2 text-center">
             <p className="font-mono text-sm">Радищева 44</p>
           </div>
        </div>
      )}

      {/* Sticky Category Bar - Sticks to top when scrolled past logo */}
      <div className="sticky top-0 z-30 bg-[#F2F0EA] border-b-2 border-t-2 border-black shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4 overflow-x-auto no-scrollbar md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`text-sm md:text-base font-mono font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? `${BRAND_COLOR} underline underline-offset-4 decoration-2`
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};