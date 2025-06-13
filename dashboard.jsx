import React from 'react';
import { Home, CreditCard, DollarSign, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6 flex flex-col">
      <h1 className="text-2xl font-bold text-indigo-600 mb-10">PayVisa</h1>
      <nav className="space-y-4">
        <SidebarItem icon={<Home size={20} />} label="Home" active />
        <SidebarItem icon={<CreditCard size={20} />} label="Cards" />
        <SidebarItem icon={<DollarSign size={20} />} label="Payments" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => (
  <div
    className={`flex items-center space-x-3 px-4 py-2 rounded-lg cursor-pointer ${
      active ? 'bg-indigo-100 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Welcome, John</span>
            <img
              src="https://i.pravatar.cc/40"
              alt="user avatar"
              className="w-10 h-10 rounded-full border"
            />
          </div>
        </header>

        {/* Dashboard content area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Cards Linked" value="3" />
          <Card title="Payments Made" value="$1,250" />
          <Card title="Pending KYC" value="1" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
  </div>
);

export default Dashboard;
