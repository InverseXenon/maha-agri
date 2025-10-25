import React, { useState } from 'react';
import { User, MapPin, Mail, Leaf, Save } from 'lucide-react';
import { dummyProfile, dummyActivity } from '../utils/constants';

const ProfilePage = () => {
  const [profile, setProfile] = useState(dummyProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('✅ Profile updated successfully!');
  };

  return (
    <div className="p-6 bg-gradient-to-b from-green-50 to-beige-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between mb-8 border border-green-200">
        <div className="flex items-center space-x-4">
          <img
            src={`https://placehold.co/100x100/228B22/ffffff?text=${profile.name.charAt(0)}`}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-green-300 shadow-lg object-cover"
          />
          <div>
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="text-2xl font-serif font-bold text-green-800 border-b-2 border-green-300 outline-none bg-transparent"
                />
                <input
                  type="text"
                  name="village"
                  value={profile.village}
                  onChange={handleChange}
                  className="text-sm text-brown-500 border-b-2 border-green-200 outline-none bg-transparent mt-2"
                />
                <input
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="text-sm text-brown-500 border-b-2 border-green-200 outline-none bg-transparent mt-2"
                />
              </>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-bold text-green-800">{profile.name}</h2>
                <p className="text-sm text-brown-500 flex items-center mt-1">
                  <MapPin className="w-5 h-5 mr-2 text-green-700" />
                  {profile.village}, {profile.district}
                </p>
                <p className="text-sm text-brown-500 flex items-center mt-1">
                  <Mail className="w-5 h-5 mr-2 text-green-700" />
                  {profile.email}
                </p>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className="mt-4 sm:mt-0 flex items-center px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-xl hover:bg-green-800 transition"
        >
          {isEditing ? <Save className="w-5 h-5 mr-2" /> : <Leaf className="w-5 h-5 mr-2" />}
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-green-50 p-4 rounded-xl shadow-md flex items-center space-x-4 border border-green-200">
          <Leaf className="w-8 h-8 text-green-700" />
          <div>
            <p className="text-brown-500 text-sm">Total Queries</p>
            <h4 className="text-lg font-bold text-green-800">42</h4>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl shadow-md flex items-center space-x-4 border border-green-200">
          <Leaf className="w-8 h-8 text-green-700" />
          <div>
            <p className="text-brown-500 text-sm">Successful Advices</p>
            <h4 className="text-lg font-bold text-green-800">37</h4>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl shadow-md flex items-center space-x-4 border border-green-200">
          <User className="w-8 h-8 text-yellow-600" />
          <div>
            <p className="text-brown-500 text-sm">Profile Level</p>
            <h4 className="text-lg font-bold text-green-800">Pro Farmer</h4>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-green-200">
        <h3 className="text-xl font-serif font-semibold text-green-800 mb-4">Recent Activity</h3>
        {dummyActivity && dummyActivity.length > 0 ? (
          <ul className="divide-y divide-green-100">
            {dummyActivity.map((activity, index) => (
              <li key={index} className="py-4 flex justify-between items-center hover:bg-green-50 transition rounded-lg">
                <div>
                  <p className="font-medium text-green-800">{activity.title}</p>
                  <p className="text-sm text-brown-500">{activity.time}</p>
                </div>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    activity.type === 'advice' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {activity.type}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-brown-500 text-sm">No recent activity available.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;