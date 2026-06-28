'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { SchoolId, SchoolTheme, SchoolSettings, SchoolWebsite } from '@/lib/types';
import { schoolThemes, schoolSettings, schoolWebsites } from '@/lib/schools';

interface SchoolContextType {
  schoolId: SchoolId;
  theme: SchoolTheme;
  settings: SchoolSettings;
  website: SchoolWebsite;
}

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

interface SchoolProviderProps {
  schoolId: SchoolId;
  children: ReactNode;
}

export const SchoolProvider: React.FC<SchoolProviderProps> = ({ schoolId, children }) => {
  const theme = schoolThemes[schoolId];
  const settings = schoolSettings[schoolId];
  const website = schoolWebsites[schoolId];

  return (
    <SchoolContext.Provider value={{ schoolId, theme, settings, website }}>
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error('useSchool must be used within a SchoolProvider');
  }
  return context;
};
