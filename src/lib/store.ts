import { create } from 'zustand';
import type { AppState, Habit, ShoppingBehavior } from '../types';

const MOCK_HABITS: Habit[] = [
  {
    id: '1',
    name: 'Skipped Coffee',
    description: 'Avoided buying coffee out today',
    currentStreak: 5,
    longestStreak: 12,
    completedToday: true,
    color: 'text-blue-500',
  },
  {
    id: '2',
    name: 'No Impulse Buy',
    description: 'Resisted an impulse purchase',
    currentStreak: 2,
    longestStreak: 5,
    completedToday: false,
    color: 'text-green-500',
  },
  {
    id: '3',
    name: 'Packed Lunch',
    description: 'Brought lunch from home',
    currentStreak: 8,
    longestStreak: 20,
    completedToday: true,
    color: 'text-purple-500',
  },
];

const generateMockBehaviors = (): ShoppingBehavior[] => {
  const behaviors: ShoppingBehavior[] = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    behaviors.push({
      id: d.toISOString(),
      date: d.toISOString().split('T')[0],
      appOpens: Math.floor(Math.random() * 10),
      moneySent: Math.floor(Math.random() * 5000), // Random amount up to 50.00
      paymentsMade: Math.floor(Math.random() * 5),
    });
  }
  return behaviors;
};

export const useAppStore = create<AppState>((set) => ({
  habits: MOCK_HABITS,
  shoppingBehaviors: generateMockBehaviors(),
  toggleHabitCompletion: (id) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id
          ? {
              ...habit,
              completedToday: !habit.completedToday,
              currentStreak: habit.completedToday
                ? Math.max(0, habit.currentStreak - 1)
                : habit.currentStreak + 1,
            }
          : habit
      ),
    })),
}));
