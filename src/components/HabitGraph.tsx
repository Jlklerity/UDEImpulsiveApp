import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import type { ShoppingBehavior } from '../types';

interface HabitGraphProps {
  data: ShoppingBehavior[];
}

export const HabitGraph: React.FC<HabitGraphProps> = ({ data }) => {
  // Format data for the chart
  const chartData = data.map((d) => ({
    name: new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' }),
    AppOpens: d.appOpens,
    MoneySent: d.moneySent / 100, // Convert cents to dollars for display
  })).reverse(); // Assuming store generates from today backwards, we want chronological left to right

  return (
    <div className="h-64 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorOpens" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMoney" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#f8fafc' }}
            itemStyle={{ color: '#f8fafc' }}
          />
          <Area
            type="monotone"
            dataKey="AppOpens"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorOpens)"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="MoneySent"
            stroke="#22c55e"
            fillOpacity={1}
            fill="url(#colorMoney)"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
