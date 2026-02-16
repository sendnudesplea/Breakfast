import React from 'react';
import { BG_ACCENT, BRAND_COLOR } from '../constants';

const MARQUEE_ITEMS = [
  "Specialty Coffee",
  "All Day Breakfast",
  "No Booking",
  "No Delivery",
  "Breakfast Band",
  "In Breakfast We Trust",
  "Est. 2016"
];

const TRANSLATIONS = [
  "Спешелти кофе",
  "Завтраки весь день",
  "Без брони",
  "Без доставки",
  "Брекфаст Бэнд",
  "Мы верим в завтрак",
  "Осн. 2016"
];

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full border-b-2 border-black bg-[#F2F0EA] overflow-hidden">
      
      {/* Manifesto Section */}
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Big Statement */}
          <div className="md:col-span-8">
             <div className="inline-block border border-black px-3 py-1 rounded-full text-xs font-mono uppercase mb-6 bg-white">
                Лучшая кофейня России 2018
             </div>
             <h2 className="text-4xl md:text-6xl font-serif leading-tight font-bold mb-2">
               IN BREAKFAST <span className="italic font-light">WE TRUST</span>
             </h2>
             <p className="font-mono text-xs text-gray-400 uppercase tracking-wider mb-8">
               * Мы верим в завтрак
             </p>
             <p className="text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
               Мы не верим в доставку. Мы не верим в бронь. <br/>
               Мы верим в живую очередь, спешелти кофе и в то, что завтрак — это главный ритуал дня.
             </p>
          </div>

          {/* Right Column: Key Details stylized */}
          <div className="md:col-span-4 flex flex-col gap-6 md:border-l border-black md:pl-8">
              <div className="p-6 bg-white border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-mono text-sm uppercase text-gray-500 mb-2">Локация</h3>
                <p className="font-bold text-lg">Тверь, Бульвар Радищева 44</p>
              </div>
              
              <div className={`p-6 ${BG_ACCENT} text-[#F2F0EA] border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                 <h3 className="font-mono text-sm uppercase opacity-80 mb-2">Часы работы</h3>
                 <div className="flex justify-between border-b border-white/20 pb-2 mb-2">
                   <span>Будни</span>
                   <span className="font-mono">08-18</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Выходные</span>
                   <span className="font-mono">08-19</span>
                 </div>
              </div>
          </div>

        </div>
      </div>

      {/* Marquee effect */}
      <div className="bg-black text-[#F2F0EA] pt-4 pb-2 overflow-hidden border-t border-black flex flex-col select-none">
         {/* Moving English Line */}
         <div className="flex mb-2">
            <div className="animate-marquee flex items-center whitespace-nowrap flex-shrink-0">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
                  <React.Fragment key={i}>
                    <span className="mx-8 font-mono uppercase text-2xl font-bold tracking-widest">{text}</span>
                    <span className="text-[#D94F3D]">•</span>
                  </React.Fragment>
                ))}
            </div>
             <div className="animate-marquee flex items-center whitespace-nowrap flex-shrink-0">
                {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((text, i) => (
                  <React.Fragment key={`dup-${i}`}>
                    <span className="mx-8 font-mono uppercase text-2xl font-bold tracking-widest">{text}</span>
                    <span className="text-[#D94F3D]">•</span>
                  </React.Fragment>
                ))}
            </div>
         </div>

         {/* Static Russian Translations Line */}
         <div className="container mx-auto px-4 border-t border-white/20 pt-2 flex flex-wrap justify-center gap-x-6 gap-y-1 text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-wider">
            {TRANSLATIONS.map((trans, i) => (
              <span key={i}>* {trans}</span>
            ))}
         </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 120s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};