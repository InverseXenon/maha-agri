import React from 'react';
import { Leaf } from 'lucide-react';
import { dummyProfile } from '../utils/constants';

const WelcomeSection = () => (
  <div
    className="p-6 rounded-2xl shadow-md mt-4"
    style={{ background: 'linear-gradient(135deg, #228B22 0%, #8B4513 100%)' }}
  >
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-3xl font-serif font-extrabold text-white">Welcome, {dummyProfile.name}!</h2>
        <p className="text-white opacity-90 mt-1 text-sm">Your MahaAgri Assistant is ready to help</p>
        <div className="flex flex-wrap gap-3 mt-4 text-sm font-medium text-white">
          <span className="p-2 rounded-lg bg-white bg-opacity-20 flex items-center">
            Today: 27°C
          </span>
          <span className="p-2 rounded-lg bg-white bg-opacity-20 flex items-center">
            Cotton: ₹4200/quintal
          </span>
          <span className="p-2 rounded-lg bg-yellow-600 bg-opacity-90 flex items-center">
            <Leaf className="h-5 w-5 mr-1" />
            3 New Alerts
          </span>
        </div>
      </div>
      <img
        src="https://placehold.co/100x100/228B22/ffffff?text=FARM"
        alt="Farmer Silhouette"
        className="h-24 w-24 rounded-full object-cover shadow-lg border-4 border-white hidden sm:block"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/100x100/228B22/ffffff?text=FARM';
        }}
      />
    </div>
  </div>
);

export default WelcomeSection;