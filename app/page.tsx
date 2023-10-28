import { InfinityScrollGames } from './_components';

export default async function Page() {
  return (
    <main className='w-full'>
      <h1 className='my-5 text-center text-3xl font-bold md:mb-5 md:mt-0 md:text-start'>
        New and Trending
      </h1>
      <InfinityScrollGames />
    </main>
  );
}
