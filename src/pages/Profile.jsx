import React from "react";
import Header from "../components/Header";
import { dummyProfile } from "../data/dummyData";

const Profile = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
        <div className="flex items-center space-x-4">
          <img
            src={`https://placehold.co/80x80/059669/ffffff?text=${dummyProfile.name.charAt(0)}`}
            alt="Profile"
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-700">{dummyProfile.name}</h2>
            <p className="text-gray-600">{dummyProfile.village}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-gray-700">
          <p><strong>Farm Size:</strong> {dummyProfile.farmSize}</p>
          <p><strong>Crops:</strong> {dummyProfile.crops.join(", ")}</p>
          <p><strong>Last Consulted:</strong> {dummyProfile.lastConsulted}</p>
        </div>

        <div className="mt-6 bg-green-50 p-4 rounded-lg text-sm text-green-800">
          🧠 <strong>Memory Feature:</strong> This page will later show your AI’s past recommendations, queries, and personalized plans.
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
