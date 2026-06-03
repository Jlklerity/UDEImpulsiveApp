import React from 'react';
import { cn } from '../lib/utils';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn('rounded-2xl bg-card text-card-foreground p-6 shadow-sm ring-1 ring-white/10', className)}
      {...props}
    >
      {children}
    </div>
  );
};
