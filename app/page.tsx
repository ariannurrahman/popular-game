import { InfinityScrollGames } from './_components';
import { fetchGames } from './actions';

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query =
    typeof searchParams.search === 'string' ? searchParams.search : undefined;

  const { data } = await fetchGames({ query, page: 0, pageSize: 20 });
  return (
    <main className='w-full'>
      <h1 className='my-5 text-center text-3xl font-bold md:mb-5 md:mt-0 md:text-start'>
        New and Trending
      </h1>
      <div className='relative z-10 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        <InfinityScrollGames
          dataFetcher={fetchGames}
          initialData={data}
          searchQuery={query}
        />
      </div>
    </main>
  );
}
