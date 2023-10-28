import { useState, useEffect } from 'react';

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value) {
        setDebouncedValue(value);
      } else {
        setDebouncedValue('');
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [delay, value]);

  return debouncedValue;
}
