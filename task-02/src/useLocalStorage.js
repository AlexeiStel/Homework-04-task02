import { useState, useEffect, useCallback } from 'react';
export const useLocalStorage = (key) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? item : null;
        }
        catch (error) {
            console.error("Error getting value from localStorage:", error);
            return null;
        }
    });
    useEffect(() => {
        try {
            const item = localStorage.getItem(key);
            setStoredValue(item ? item : null);
        }
        catch (error) {
            console.error("Error fetching from localStorage:", error);
        }
    }, [key]);
    const setItem = useCallback((value) => {
        try {
            localStorage.setItem(key, value);
            setStoredValue(value);
        }
        catch (error) {
            console.error("Error setting value to localStorage:", error);
        }
    }, [key]);
    const removeItem = useCallback(() => {
        try {
            localStorage.removeItem(key);
            setStoredValue(null);
        }
        catch (error) {
            console.error("Error removing value from localStorage:", error);
        }
    }, [key]);
    return [storedValue, { setItem, removeItem }];
};
