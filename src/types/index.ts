export interface Habit {
  id: string;
  name: string;
  description: string;
  currentStreak: number;
  longestStreak: number;
  completedToday: boolean;
  color: string;
}

export interface ShoppingBehavior {
  id: string;
  date: string; // ISO Date string
  appOpens: number;
  moneySent: number; // In cents
  paymentsMade: number;
}

export interface AppState {
  habits: Habit[];
  shoppingBehaviors: ShoppingBehavior[];
  toggleHabitCompletion: (id: string) => void;
}
