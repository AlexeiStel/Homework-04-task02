import { useState, useEffect, useCallback } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export const useLocalStorage: UseLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState<LocalStorageReturnValue>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? item : null;
    } catch (error) {
      console.error("Error getting value from localStorage:", error);
      return null;
    }
  });

  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      setStoredValue(item ? item : null);
    } catch (error) {
      console.error("Error fetching from localStorage:", error);
    }
  }, [key]);

  const setItem = useCallback(
    (value: LocalStorageSetValue) => {
      try {
        localStorage.setItem(key, value);
        setStoredValue(value);
      } catch (error) {
        console.error("Error setting value to localStorage:", error);
      }
    },
    [key]
  );

  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.error("Error removing value from localStorage:", error);
    }
  }, [key]);

  return [storedValue, { setItem, removeItem }];
};
