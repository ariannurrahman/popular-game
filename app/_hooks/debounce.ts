import { useState, useEffect } from 'react';

interface debounceProps {
  value: string;
  delay: number;
}

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (value) {
        setDebouncedValue(value);
      }
    }, delay);

    return () => clearTimeout(handler);
  }, [delay, value]);

  return debouncedValue;
}
