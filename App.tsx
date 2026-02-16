import React from 'react';
import { MENU_DATA } from './constants';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { InfoSection } from './components/InfoSection';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#D94F3D] selection:text-white">
      
      <Navigation categories={MENU_DATA} />
      
      <main>
        <Hero />
        
        <div className="relative bg-[#F2F0EA]">
            {MENU_DATA.map((category, index) => (
                <div key={category.id} className={index % 2 !== 0 ? 'bg-[#ebe8e0]' : ''}>
                   <MenuSection category={category} />
                </div>
            ))}
        </div>

        <InfoSection />
      </main>

    </div>
  );
}

export default App;