import React, { createContext, useState, useEffect, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SETTINGS_STORAGE_KEY = 'root-companion:v1:settings';

export type Language = 'en' | 'pl';

interface Settings {
  preventScreenLock: boolean;
  language: Language;
}

const defaultSettings: Settings = {
  preventScreenLock: false,
  language: 'en',
};

const getInitialSettings = (): Settings => {
  // 1. Try to load from localStorage
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (saved) {
      return { ...defaultSettings, ...JSON.parse(saved) };
    }
  } catch (error) {
    console.error('Error reading settings from localStorage:', error);
  }

  // 2. If no settings in localStorage, detect browser language
  const browserLanguages = navigator.languages || [navigator.language];
  for (const lang of browserLanguages) {
    const primaryLang = lang.split('-')[0].toLowerCase();
    if (primaryLang === 'pl') {
      return { ...defaultSettings, language: 'pl' };
    }
    if (primaryLang === 'en') {
      return { ...defaultSettings, language: 'en' };
    }
  }

  // 3. Fallback to default settings
  return defaultSettings;
};


interface SettingsContextType {
  settings: Settings;
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(getInitialSettings);

  const wakeLock = useRef<WakeLockSentinel | null>(null);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    
    const isGameScreen = location.pathname === '/game';

    const manageWakeLock = async () => {
      if (settings.preventScreenLock && isGameScreen && 'wakeLock' in navigator) {
        if (wakeLock.current === null) {
          try {
            wakeLock.current = await navigator.wakeLock.request('screen');
            wakeLock.current.addEventListener('release', () => {
              wakeLock.current = null;
            });
          } catch (err) {
            // Suppress error as requested by the user.
          }
        }
      } else {
        if (wakeLock.current) {
          wakeLock.current.release();
          wakeLock.current = null;
        }
      }
    };

    manageWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && settings.preventScreenLock && isGameScreen) {
        manageWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (wakeLock.current) {
        wakeLock.current.release();
        wakeLock.current = null;
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [settings, location.pathname]);


  const updateSetting = <K extends keyof Settings>(key: K, value: Settings[K]) => {
    setSettings(s => ({ ...s, [key]: value }));
  };

  const value = {
    settings,
    updateSetting,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};