'use client';

import { useSearchParams } from 'next/navigation';
import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  ChangeEvent,
} from 'react';

interface SearchContextProps {
  onChangeQuery: (e: ChangeEvent<HTMLInputElement>) => void;
  query: string;
}

const SearchContext = createContext<SearchContextProps>({
  onChangeQuery: () => {},
  query: '',
});

export const SearchContextProvider = (props: PropsWithChildren) => {
  const searchParams = useSearchParams().get('query') ?? '';
  const [query, setQuery] = useState(searchParams);

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SearchContext.Provider value={{ query, onChangeQuery }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
