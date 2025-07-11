
import React, { createContext, useState, useEffect, ReactNode, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SETTINGS_STORAGE_KEY = 'root-companion:v1:settings';

interface Settings {
  preventScreenLock: boolean;
}

const defaultSettings: Settings = {
  preventScreenLock: false,
};

interface SettingsContextType {
  settings: Settings;
  updateSetting: (key: keyof Settings, value: boolean) => void;
}

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    try {
      const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

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


  const updateSetting = (key: keyof Settings, value: boolean) => {
    setSettings(s => ({ ...s, [key]: value }));
  };

  const value = {
    settings,
    updateSetting,
  };

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};
