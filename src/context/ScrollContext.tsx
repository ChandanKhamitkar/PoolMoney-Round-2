'use client';

import { createContext, useContext, RefObject } from 'react';

interface ScrollContextType {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
};
