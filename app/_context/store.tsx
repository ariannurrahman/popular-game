'use client';

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ChangeEvent,
} from 'react';

type SearchContextType = {
  query: string;
};

interface SearchContextProps {
  setQuery: Dispatch<SetStateAction<string>>;
  query: string;
}

const SearchContext = createContext<SearchContextProps>({
  setQuery: (): string => '',
  query: '',
});

export const SearchContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState('');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
