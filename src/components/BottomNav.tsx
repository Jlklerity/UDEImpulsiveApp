import React from 'react';
import { Home, LineChart, PlusCircle, Settings, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-800 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto px-4">
        <button className="flex flex-col items-center justify-center w-full text-blue-500">
          <Home size={24} />
          <span className="text-[10px] mt-1 font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full text-slate-500 hover:text-slate-300">
          <LineChart size={24} />
          <span className="text-[10px] mt-1 font-medium">Stats</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full -mt-5">
          <div className="bg-blue-500 rounded-full p-3 shadow-lg shadow-blue-500/30 text-white hover:bg-blue-400 transition-colors">
            <PlusCircle size={28} />
          </div>
        </button>
        <button className="flex flex-col items-center justify-center w-full text-slate-500 hover:text-slate-300">
          <User size={24} />
          <span className="text-[10px] mt-1 font-medium">Profile</span>
        </button>
        <button className="flex flex-col items-center justify-center w-full text-slate-500 hover:text-slate-300">
          <Settings size={24} />
          <span className="text-[10px] mt-1 font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
};
