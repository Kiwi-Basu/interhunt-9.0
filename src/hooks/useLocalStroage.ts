import { useState, useEffect } from 'react';

/**
 * Custom hook to sync state with localStorage and listen for changes
 * @param {string} key - The localStorage key to sync with
 * @param {any} defaultValue - Default value if the key doesn't exist in localStorage (can be object, boolean, etc.)
 * @returns {[any, Function]} - State value and setter function
 */
const useLocalStorage = <T>(key: string, defaultValue: T): [T, (value: T | ((val: T) => T)) => void] => {
  // Get stored value from localStorage or use default
  const getStoredValue = (): T => {
    try {
      const item = localStorage.getItem(key);

      // Return default value if item doesn't exist
      if (item === null) return defaultValue;

      // Handle special case for boolean values
      if (item === 'true') return true as unknown as T;
      if (item === 'false') return false as unknown as T;

      // Try to parse as JSON, fall back to raw value if that fails
      try {
        return JSON.parse(item) as T;
      } catch {
        return item as unknown as T;
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  };

  // State to store our value
  const [value, setValue] = useState<T>(getStoredValue);

  // Update localStorage when the state changes
  useEffect(() => {
    try {
      if (value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
        // Dispatch a custom event when the value changes
        window.dispatchEvent(new CustomEvent('localStorage-changed', {
          detail: { key, value }
        }));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  // Listen for changes across components
  useEffect(() => {
    const handleStorageChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ key: string; value: T }>;
      if (customEvent.detail && customEvent.detail.key === key) {
        setValue(customEvent.detail.value);
      }
    };

    // Add event listener for our custom event
    window.addEventListener('localStorage-changed', handleStorageChange);

    // Clean up
    return () => {
      window.removeEventListener('localStorage-changed', handleStorageChange);
    };
  }, [key]);

  return [value, setValue];
};

export default useLocalStorage;