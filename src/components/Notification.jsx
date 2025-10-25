import React, { useState } from 'react';
import { Bell } from 'lucide-react';

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [
    { id: 1, message: 'Flood warning: Heavy rain expected in Marathwada on Oct 26-27. Protect crops.', time: '10:15 AM, Oct 25', type: 'alert' },
    { id: 2, message: 'Cotton prices up by 5% in Pune APMC. Sell now!', time: '9:45 AM, Oct 25', type: 'price' },
    { id: 3, message: 'New loan waiver scheme announced. Check eligibility.', time: '8:30 AM, Oct 25', type: 'update' },
  ];

  return (
    <>
      <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
        <Bell className="h-6 w-6 text-brown-700 hover:text-yellow-600 transition" title="Notifications" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-yellow-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            {notifications.length}
          </span>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg border border-green-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-serif font-semibold text-green-800 mb-4 flex items-center">
              <Bell className="h-6 w-6 mr-2 text-green-700" /> Notifications
            </h3>
            <div className="max-h-64 overflow-y-auto space-y-4">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3 rounded-lg ${
                    notif.type === 'alert' ? 'bg-red-100 text-red-700' : notif.type === 'price' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  <p className="text-sm">{notif.message}</p>
                  <p className="text-xs text-brown-500 mt-1">{notif.time}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;