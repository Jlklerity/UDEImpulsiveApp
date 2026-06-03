import React from 'react';
import { Flame } from 'lucide-react';
import { cn } from '../lib/utils';

interface StreakCounterProps {
  currentStreak: number;
  longestStreak: number;
  className?: string;
}

export const StreakCounter: React.FC<StreakCounterProps> = ({ currentStreak, longestStreak, className }) => {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/20 text-orange-500">
        <Flame size={20} />
      </div>
      <div>
        <p className="text-xl font-bold tracking-tight">{currentStreak} Days</p>
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
          Best: {longestStreak}
        </p>
      </div>
    </div>
  );
};
