import { useState, useEffect } from 'react';

const getLocalStorageOrDefault = (key: string, defaultValue: unknown) => {
  const stored = localStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
};

export const useLocalStorage = (key: string, defaultValue: unknown) => {
  const [value, setValue] = useState(
    getLocalStorageOrDefault(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
