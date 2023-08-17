import { GameCard } from './_components';
import { IGames } from './_types/games';

export async function getData() {
  const res = await fetch(
    'https://api.rawg.io/api/games?page=1&page_size=10&key=439740e4165a4a219d5331c543990dcc'
  );
  const data: IGames = await res.json();
  return { data };
}

export async function Page() {
  const { data } = await getData();
  return (
    <main>
      <h1>New and Trending</h1>
      <div className='relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'>
        {data?.results?.map((data) => {
          return <GameCard key={data.id} data={data} />;
        })}
      </div>
    </main>
  );
}

export default Page;
