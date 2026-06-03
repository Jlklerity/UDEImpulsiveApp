import React from 'react';
import { useAppStore } from '../lib/store';
import { Card } from '../components/Card';
import { ProgressRing } from '../components/ProgressRing';
import { StreakCounter } from '../components/StreakCounter';
import { HabitGraph } from '../components/HabitGraph';
import { BottomNav } from '../components/BottomNav';
import { CheckCircle2, Circle } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { habits, shoppingBehaviors, toggleHabitCompletion } = useAppStore();

  const totalHabits = habits.length;
  const completedHabits = habits.filter((h) => h.completedToday).length;
  const dailyProgress = totalHabits === 0 ? 0 : (completedHabits / totalHabits) * 100;

  return (
    <div className="min-h-screen bg-red-950 pb-24">
      <div className="max-w-md mx-auto p-4 space-y-6">
        <header className="flex items-center justify-between gap-4 pt-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">FinFit</h1>
            <p className="text-sm ">Track your spending.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Goal</p>
              <p className="text-xl font-bold">{completedHabits} / {totalHabits}</p>
            </div>
            <ProgressRing progress={dailyProgress} size={60} strokeWidth={6} colorClass="text-accent" />
          </div>
        </header>

        <div className="space-y-6">
          <Card className="flex flex-col p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-bold">Shopping Activity</h2>
              <span className="text-xs text-muted-foreground">7 Days</span>
            </div>
            <div className="flex-1 h-[200px]">
               <HabitGraph data={shoppingBehaviors} />
            </div>
          </Card>

          <div className="space-y-3">
            <h2 className="text-lg font-bold px-1">Daily Habits</h2>
            <div className="flex flex-col gap-3">
              {habits.map((habit) => (
                <div 
                  key={habit.id} 
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-800/80 active:bg-slate-700 transition-colors cursor-pointer shadow-sm border border-white/5"
                  onClick={() => toggleHabitCompletion(habit.id)}
                >
                  <div className="flex items-center gap-4">
                    <button className="text-muted-foreground">
                      {habit.completedToday ? (
                        <CheckCircle2 className={habit.color} size={28} />
                      ) : (
                        <Circle size={28} />
                      )}
                    </button>
                    <div>
                      <p className="font-semibold">{habit.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{habit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold px-1">Streaks</h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">
              {habits.map((habit) => (
                <Card key={habit.id} className="flex-none w-[160px] snap-center flex flex-col items-center justify-center p-5 text-center shrink-0">
                  <p className="font-semibold text-sm mb-3 truncate w-full">{habit.name}</p>
                  <StreakCounter currentStreak={habit.currentStreak} longestStreak={habit.longestStreak} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};
