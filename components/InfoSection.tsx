import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';

export const InfoSection: React.FC = () => {
  return (
    <section id="info" className="bg-[#1a1a1a] text-[#F2F0EA] pt-20 pb-10 border-t-2 border-black">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
                <h2 className="text-6xl md:text-8xl font-serif font-black mb-4 leading-none">
                    WAITING<br/>FOR YOU
                </h2>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-12">
                   * Ждем вас
                </p>
                
                <div className="grid gap-8">
                     <div className="flex gap-6 items-start group">
                        <MapPin className="mt-1 flex-shrink-0 group-hover:text-[#D94F3D] transition-colors" />
                        <div>
                            <h4 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-2">Адрес</h4>
                            <p className="text-2xl font-serif">Бульвар Радищева 44</p>
                            <a href="https://yandex.ru/maps/-/CPUwZX~8" target="_blank" rel="noreferrer" className="inline-block mt-2 border-b border-white hover:border-[#D94F3D] hover:text-[#D94F3D] transition-colors pb-1">Показать на карте →</a>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <Clock className="mt-1 flex-shrink-0 group-hover:text-[#D94F3D] transition-colors" />
                        <div>
                            <h4 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-2">Время</h4>
                            <p className="text-xl">Будни: 08:00 – 18:00</p>
                            <p className="text-xl">Выходные: 08:00 – 19:00</p>
                        </div>
                     </div>

                     <div className="flex gap-6 items-start group">
                        <Info className="mt-1 flex-shrink-0 group-hover:text-[#D94F3D] transition-colors" />
                        <div>
                            <h4 className="font-mono text-sm uppercase tracking-widest text-gray-500 mb-2">Концепция</h4>
                            <p className="text-gray-400 max-w-md leading-relaxed">
                                У нас нет бронирования столов и доставки. <br/>
                                Живая очередь. Живое общение.
                            </p>
                        </div>
                     </div>
                </div>
            </div>

            {/* Map Container - Replaces the red placeholder */}
            <div className="relative w-full h-[400px] lg:h-auto min-h-[400px] border-2 border-white/20 overflow-hidden">
                 <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A74a54ea00a0a12c50136be0eb806fa3971713b4002f60b5cb3c66d6e87ded335&amp;source=constructor" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Breakfast Band Location Map"
                    className="w-full h-full"
                 />
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 font-mono text-xs uppercase">
          <p>© {new Date().getFullYear()} Breakfast Band.</p>
          <p>Тверь, Россия</p>
        </div>
      </div>
    </section>
  );
};