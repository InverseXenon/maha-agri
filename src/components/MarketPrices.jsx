import React from 'react';
import { Leaf, TrendingUp } from 'lucide-react';
import { dummyMarketPrices } from '../utils/constants';

const RatingBadge = ({ rating }) => {
  let colorClass = "";
  if (rating === "Excellent") colorClass = "bg-green-100 text-green-800 border-green-200";
  else if (rating === "Average") colorClass = "bg-yellow-100 text-yellow-800 border-yellow-200";
  else colorClass = "bg-beige-100 text-brown-700 border-beige-200";
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full border ${colorClass}`}>
      {rating}
    </span>
  );
};

const MarketPrices = () => (
  <div className="p-5 bg-gradient-to-b from-green-50 to-beige-50 rounded-2xl shadow-md border border-green-200">
    {/* Header */}
    <div className="flex justify-between items-center mb-5 border-b border-green-100 pb-3">
      <h3 className="text-xl font-serif font-semibold text-green-800 flex items-center">
        <Leaf className="h-6 w-6 mr-2 text-green-700" aria-hidden="true" /> Today's Crop Prices
      </h3>
      <span className="text-sm font-medium text-brown-700 hover:text-yellow-600 cursor-pointer transition">Live Updates</span>
    </div>

    {/* Price List */}
    {dummyMarketPrices.map((item, index) => (
      <div
        key={index}
        className={`py-4 ${index < dummyMarketPrices.length - 1 ? 'border-b border-green-100' : ''} hover:bg-green-100/50 transition rounded-lg`}
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-lg font-semibold text-green-800">{item.name}</p>
            <p className="text-sm text-brown-500 mt-1">{item.location}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-green-700">₹{item.price}</p>
            <p className="text-sm text-brown-500">{item.unit}</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-3">
          <RatingBadge rating={item.rating} />
          <span
            className={`text-sm font-medium flex items-center ${
              item.change.startsWith('+') ? 'text-green-600' : item.change.startsWith('-') ? 'text-red-500' : 'text-brown-500'
            }`}
          >
            {item.change !== "No Change" && (
              <TrendingUp
                className={`inline h-5 w-5 mr-1 ${
                  item.change.startsWith('+') ? 'transform rotate-0' : 'transform rotate-180'
                }`}
              />
            )}
            {item.change}
          </span>
        </div>
      </div>
    ))}

    {/* Action Buttons */}
    <div className="mt-6 flex justify-between space-x-4">
      <button className="flex-1 py-2.5 text-sm font-medium text-green-700 border-2 border-green-300 rounded-xl hover:bg-green-100 transition">
        All Markets
      </button>
      <button className="flex-1 py-2.5 text-sm font-medium bg-green-700 text-white rounded-xl hover:bg-green-800 transition">
        Price Trends
      </button>
    </div>

    {/* Alert Section */}
    <div className="mt-5 p-4 bg-green-100 border-l-4 border-green-400 rounded-lg text-sm">
      <p className="text-green-800 text-sm">
        Crop prices are trending upward. Now is a great time to sell your harvest!
      </p>
    </div>
  </div>
);

export default MarketPrices;  