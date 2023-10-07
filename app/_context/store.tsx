'use client';

import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  ChangeEvent,
  useEffect,
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
  const [query, setQuery] = useState('');

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

// const url = useCallback(() => {
//   const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
//   if (query) {
//     current.set('search', query);
//   }
//   const search = current.toString();
//   const searchQuery = query ? `?${search}` : '';

//   router.push(`${pathname}${searchQuery}`);
// }, [query, searchParams, pathname, router]);

// useEffect(() => {
//   url();
// }, [url]);
