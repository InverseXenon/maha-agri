import React from 'react';

import WelcomeSection from '../components/WelcomeSection';
import WeatherWidget from '../components/WeatherWidget';
import MarketPrices from '../components/MarketPrices';
import UnifiedAgriculturalAdvisor from '../components/UnifiedAgriculturalAdvisor';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <main className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <WelcomeSection />
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-full">
            <UnifiedAgriculturalAdvisor />
          </div>
          <div className="lg:col-span-1">
            <MarketPrices />
          </div>
          
            <WeatherWidget />
                         
        </div>
      </main>
    </div>
  );
};

export default Home;
