'use server';

import { IGames } from './_types/games';

interface FetchGames {
  page: number;
  search?: string;
  pageSize?: 10;
  query?: string;
}

export async function fetchGames({ page = 1, pageSize, query }: FetchGames) {
  const res = await fetch(
    `https://api.rawg.io/api/games?page=${page}&page_size=${pageSize}&key=439740e4165a4a219d5331c543990dcc`,
    { cache: 'force-cache' }
  );
  const data: IGames = await res.json();
  return { data };
}
