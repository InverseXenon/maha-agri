import React from 'react';
import { Sun, CloudRain, Wind, Thermometer } from 'lucide-react';
import { dummyWeather } from '../utils/constants';

const WeatherWidget = () => (
  <div className="p-5 bg-gradient-to-b from-green-50 to-beige-50 rounded-2xl shadow-md flex-1 border border-green-200">
    <h3 className="text-xl font-serif font-semibold text-green-800 mb-4 flex items-center">
      <Sun className="h-6 w-6 mr-2 text-yellow-600" /> Weather Information
    </h3>
    <div className="flex justify-between items-center mb-4">
      <div>
        <p className="text-4xl font-bold text-green-800">{dummyWeather.temp}°C</p>
        <p className="text-sm text-brown-500">{dummyWeather.condition}</p>
        <p className="text-sm text-brown-400 mt-1">{dummyWeather.district}</p>
      </div>
      <CloudRain className="h-12 w-12 text-green-700" />
    </div>
    <div className="grid grid-cols-3 gap-3 text-sm text-brown-600 border-t border-b border-green-100 py-4 mb-4">
      <div className="flex flex-col items-center">
        <p className="font-medium">Humidity</p>
        <p className="flex items-center text-green-700">
          <Thermometer className="w-5 h-5 mr-1" /> {dummyWeather.humidity}%
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-medium">Wind</p>
        <p className="flex items-center text-green-700">
          <Wind className="w-5 h-5 mr-1" /> {dummyWeather.windSpeed} km/h
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-medium">Rainfall</p>
        <p className="flex items-center text-green-700">
          <CloudRain className="w-5 h-5 mr-1" /> {dummyWeather.rainfall} mm
        </p>
      </div>
    </div>
    <p className="font-medium text-green-800 mb-2">3-Day Forecast</p>
    {dummyWeather.forecast.map((f, index) => (
      <div key={index} className="flex justify-between items-center py-2 text-sm hover:bg-green-100/50 transition rounded-lg">
        <span className="text-brown-600">{f.day}</span>
        <div className="flex items-center space-x-2">
          {f.icon === 'Sun' && <Sun className="h-5 w-5 text-yellow-600" />}
          {f.icon === 'CloudRain' && <CloudRain className="h-5 w-5 text-green-700" />}
          {f.icon === 'Thermometer' && <Thermometer className="h-5 w-5 text-green-700" />}
          <span className="text-green-800 font-medium">{f.high}°C</span>
          <span className="text-brown-500">{f.low}°C</span>
        </div>
      </div>
    ))}
    <div className="mt-4 p-4 bg-green-100 border-l-4 border-green-400 rounded-lg text-sm">
      <p className="font-semibold text-green-800">Alert</p>
      <p className="text-green-700 text-sm mt-1">
        Moderate rain expected in next 2 days. Plan harvesting and protect crops.
      </p>
    </div>
  </div>
);

export default WeatherWidget;