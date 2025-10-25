import { Sun, CloudRain, Thermometer, CheckCircle } from "lucide-react";

export const dummyWeather = {
  temp: 28,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 8,
  rainfall: 0,
  district: "Pune District",
  forecast: [
    { day: "Today", icon: Sun, high: 32, low: 28 },
    { day: "Tomorrow", icon: CloudRain, high: 28, low: 25 },
    { day: "Day After", icon: Thermometer, high: 35, low: 26 },
  ],
};

export const dummyMarketPrices = [
  { name: "Cotton", location: "Pune APMC", price: "5,650", unit: "/quintal", change: "+150 (+2.7%)", rating: "Excellent" },
  { name: "Grapes", location: "Nashik Market", price: "4,500", unit: "/quintal", change: "-200 (-4.3%)", rating: "Average" },
  { name: "Pomegranate", location: "Solapur Mandi", price: "7,800", unit: "/quintal", change: "+300 (+4%)", rating: "Excellent" },
  { name: "Sorghum", location: "Aurangabad APMC", price: "3,200", unit: "/quintal", change: "No Change", rating: "Normal" },
  { name: "Tur Dal", location: "Latur Market", price: "8,500", unit: "/quintal", change: "+250 (+3%)", rating: "Excellent" },
];

export const dummyProfile = {
  name: "Rahul Patil",
  village: "Karad, Satara, Maharashtra",
  crops: ["Cotton", "Pomegranate", "Sugarcane"],
  district: "Satara",
  email: "rahulpatil@gmail.com",
  lastConsulted: "Oct 18, 2025",
  farmSize: "8 acres",
};

export const DUMMY_QUICK_ACTIONS = [
  { text: "फसल नियोजन / Crop Planning & Advice", icon: CheckCircle },
  { text: "कीट नियंत्रण / Pest & Disease Control", icon: CheckCircle },
  { text: "वित्तीय सहायता / Financial Assistance", icon: CheckCircle },
];

export const dummyActivity = [
  { title: "Asked about pest control for cotton", time: "2 hours ago", type: "advice" },
  { title: "Checked today's weather update", time: "Yesterday", type: "weather" },
  { title: "Viewed market prices for soyabean", time: "2 days ago", type: "market" },
  { title: "Requested soil health card info", time: "3 days ago", type: "advice" },
];