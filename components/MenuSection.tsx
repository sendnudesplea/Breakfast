import React from 'react';
import { MenuCategory, MenuItem } from '../types';
import { BRAND_COLOR } from '../constants';

interface MenuSectionProps {
  category: MenuCategory;
}

const MenuItemRow: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="group relative py-6 border-b border-black/10 hover:bg-white transition-colors px-2">
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
      <div className="flex-grow">
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2 group-hover:underline decoration-2 underline-offset-4 decoration-[#D94F3D]">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-gray-600 font-light max-w-xl leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      <div className="flex-shrink-0 mt-2 md:mt-0">
        <span className={`font-mono text-lg font-bold ${BRAND_COLOR} bg-black/5 px-3 py-1`}>
          {item.price} ₽
        </span>
      </div>
    </div>
  </div>
);

export const MenuSection: React.FC<MenuSectionProps> = ({ category }) => {
  return (
    <section id={category.id} className="py-16 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-baseline gap-4 mb-12 border-b-4 border-black pb-2">
           <span className="font-mono text-sm text-gray-400">0{category.id.length}</span>
           <h2 className="text-5xl md:text-7xl font-serif font-black uppercase text-gray-900 tracking-tighter">{category.title}</h2>
        </div>

        {/* Clean Note Design */}
        {category.note && (
           <div className="mb-12 py-6 px-8 border-l-4 border-[#D94F3D] bg-white shadow-sm">
             <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-gray-800">
               {category.note}
             </p>
           </div>
        )}
        
        <div className="flex flex-col">
          {category.items.map((item) => (
            <MenuItemRow key={item.id} item={item} />
          ))}
        </div>

        {/* Redesigned Add-ons Section */}
        {category.addons && (
          <div className="mt-16 pt-8 border-t border-dashed border-black/30">
            <h4 className="font-mono text-sm uppercase tracking-[0.2em] text-gray-500 mb-8 text-center md:text-left">
              Добавить к заказу
            </h4>
            <div className="flex flex-wrap gap-4">
              {category.addons.map((addon, idx) => (
                <div key={idx} className="flex-grow md:flex-grow-0 min-w-[180px] border border-black p-4 bg-white hover:bg-[#D94F3D] hover:text-white transition-all cursor-pointer group shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  <div className="flex justify-between items-center gap-4">
                    <span className="font-serif font-bold text-lg leading-none">{addon.name}</span>
                    <span className="font-mono text-sm opacity-60 group-hover:opacity-100 group-hover:text-white/90">+{addon.price}₽</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};