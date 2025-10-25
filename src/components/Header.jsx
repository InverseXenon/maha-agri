import React, { useState, useEffect, useRef } from 'react';
import { Bell, Menu, Leaf, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dummyProfile } from '../utils/constants';

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const notificationRef = useRef(null);
  const languageRef = useRef(null);

  const notifications = [
    { id: 1, message: 'Flood warning: Heavy rain expected in Marathwada on Oct 26-27. Protect crops.', time: '10:15 AM, Oct 25', type: 'alert' },
    { id: 2, message: 'Cotton prices up by 5% in Pune APMC. Sell now!', time: '9:45 AM, Oct 25', type: 'price' },
    { id: 3, message: 'New loan waiver scheme announced. Check eligibility.', time: '8:30 AM, Oct 25', type: 'update' },
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-beige-50 shadow-lg sticky top-0 z-20 border-b-2 border-green-200">
      {/* Left Section: Logo and Title */}
      <div className="flex items-center space-x-3">
        <Menu className="h-7 w-7 text-green-800 cursor-pointer md:hidden hover:text-green-600 transition" aria-label="Toggle Menu" />
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-700" aria-hidden="true" />
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="text-2xl font-serif font-bold text-green-800 hover:text-green-600 transition">MahaAgri Advisor</h1>
            </Link>
            <p className="text-sm text-brown-600 hidden sm:block">Empowering Maharashtra Farmers</p>
          </div>
        </div>
      </div>

      {/* Right Section: Navigation, Notifications, Profile */}
      <div className="flex items-center space-x-5">
        

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
          <div
            className="relative cursor-pointer"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <Bell className="h-6 w-6 text-brown-700 hover:text-yellow-600 transition" title="Notifications" aria-label="Notifications" />
            {notifications.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                {notifications.length}
              </span>
            )}
          </div>
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-green-200 p-2 z-10">
              <h4 className="text-sm font-semibold text-green-800 mb-2">Notifications</h4>
              <div className="max-h-48 overflow-y-auto space-y-2">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-2 rounded-lg text-sm ${
                      notif.type === 'alert' ? 'bg-red-100 text-red-700' : notif.type === 'price' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    <p>{notif.message}</p>
                    <p className="text-xs text-brown-500 mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
              {notifications.length === 0 && (
                <p className="text-sm text-brown-500 text-center">No new notifications.</p>
              )}
            </div>
          )}
        </div>

        {/* Profile */}
        <Link to="/profile" className="flex items-center space-x-2 p-2 bg-green-100 rounded-full hover:bg-green-200 transition">
          <img
            src={`https://placehold.co/40x40/228B22/ffffff?text=${dummyProfile.name.charAt(0)}`}
            alt="User Profile"
            className="h-9 w-9 rounded-full object-cover border-2 border-green-300"
          />
          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-green-800">{dummyProfile.name}</p>
            <p className="text-xs text-brown-500">{dummyProfile.village}</p>
          </div>
          <ChevronDown className="h-5 w-5 text-green-700 hidden lg:block" aria-hidden="true" />
        </Link>

        {/* Language Toggle */}
        <div className="relative" ref={languageRef}>
          <button
            className="text-sm font-medium text-brown-700 hover:text-yellow-600 transition flex items-center"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            EN <ChevronDown className="h-4 w-4 ml-1" />
          </button>
          {isLanguageOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-green-200">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-brown-700 hover:bg-green-100"
                onClick={() => setIsLanguageOpen(false)}
              >
                English
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-brown-700 hover:bg-green-100"
                onClick={() => setIsLanguageOpen(false)}
              >
                Marathi
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-brown-700 hover:bg-green-100"
                onClick={() => setIsLanguageOpen(false)}
              >
                Hindi
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;