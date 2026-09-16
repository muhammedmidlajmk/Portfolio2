import React, { createContext, useContext, useState, useEffect } from 'react';

export type BgAnimationMode = 'constellation' | 'matrix' | 'warp' | 'waves' | 'circuit';

interface AnimationContextType {
  mode: BgAnimationMode;
  setMode: (mode: BgAnimationMode) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<BgAnimationMode>(() => {
    const saved = localStorage.getItem('bg_animation_mode');
    if (saved && ['constellation', 'matrix', 'warp', 'waves', 'circuit'].includes(saved)) {
      return saved as BgAnimationMode;
    }
    return 'constellation';
  });

  const setMode = (newMode: BgAnimationMode) => {
    setModeState(newMode);
    localStorage.setItem('bg_animation_mode', newMode);
  };

  return (
    <AnimationContext.Provider value={{ mode, setMode }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};
