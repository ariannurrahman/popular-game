'use server';

import { Games } from './_types/games';

export interface FetchGames {
  page: number;
  pageSize?: number;
  query?: string | undefined;
}

export async function fetchGames({ page = 1, query }: FetchGames) {
  const searchParams = query ? `&search=${query}` : '';

  const res = await fetch(
    `https://api.rawg.io/api/games?page=${page}${searchParams}&key=439740e4165a4a219d5331c543990dcc`,
    { cache: 'no-cache' }
  );
  const data: Games = await res.json();
  return { data };
}
