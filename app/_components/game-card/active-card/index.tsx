import format from 'date-fns/format';

import { GameResult } from '@/app/_types/games';
import classNames from 'classnames';

interface ActiveCardProps {
  data: GameResult | undefined;
  isActive: boolean;
  imgHeight: string;
  onClickViewLess: () => void;
  isMobile: boolean;
}

export const ActiveCard = ({
  data,
  isActive = false,
  isMobile = false,
  imgHeight,
  onClickViewLess,
}: ActiveCardProps) => {
  const CARD_DATA = [
    {
      label: 'Release Date: ',
      value: format(new Date(data?.released ?? ''), 'dd MMM yyyy'),
    },
    {
      label: 'Gender: ',
      value: data?.genres?.map(({ name }) => name),
    },
  ];

  return (
    <div
      className={classNames({
        'transition-all': isActive,
        'h-[180px]': isMobile,
        'h-[160px]': !isMobile,
        'absolute left-0 right-0 z-40 -mt-1 overflow-hidden bg-slate-800':
          isActive,
        'rounded-b-md': isActive,
      })}
    >
      <div className={`${imgHeight} mt-3 w-full px-5`}>
        {CARD_DATA.map(({ label, value }) => {
          return (
            <div key={label} className='flex justify-between py-2 align-middle'>
              <div className='text-sm text-slate-100'>{label}</div>
              {typeof value === 'string' ? (
                <div className='text-sm text-slate-100'>{value}</div>
              ) : Array.isArray(value) ? (
                <p className='text-sm text-slate-100'>
                  {value.map((eachValue: string) => eachValue).join(', ')}
                </p>
              ) : null}
            </div>
          );
        })}

        <div className='flex-column mt-3 flex flex-nowrap justify-center align-middle'>
          <button
            className={classNames({
              'w-full py-3 transition-all': true,
              'bg-slate-300 text-slate-700': true,
              'rounded-md text-sm font-semibold': true,
              'hover:border-2 hover:border-slate-300 hover:bg-slate-900 hover:text-slate-100 ':
                true,
              'focus:outline-none': true,
            })}
          >
            Detail
          </button>
        </div>
        <div
          className={classNames({
            'text-center': true,
            'relative mt-2 sm:hidden': isActive,
            hidden: !isActive,
          })}
        >
          <p
            onClick={onClickViewLess}
            className='text-sm text-slate-100 underline'
          >
            View Less
          </p>
        </div>
      </div>
    </div>
  );
};
