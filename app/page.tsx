import { GameCard } from './_components';
import { IGames } from './_types/games';

async function getData() {
  const res = await fetch(
    'https://api.rawg.io/api/games?page=1&page_size=10&key=439740e4165a4a219d5331c543990dcc',
    { cache: 'force-cache' }
  );
  const data: IGames = await res.json();
  return { data };
}

export default async function Page() {
  const { data } = await getData();
  return (
    <main className='w-full p-0 sm:p-3'>
      <h1 className='my-5 text-center text-3xl font-bold md:text-start'>
        New and Trending
      </h1>
      <div className='relative z-10 grid grid-cols-1 justify-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {data?.results?.map((data) => {
          return <GameCard key={data.id} data={data} />;
        })}
      </div>
    </main>
  );
}
