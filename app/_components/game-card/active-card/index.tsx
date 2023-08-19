import format from 'date-fns/format';

import { IGameResults } from '@/app/_types/games';
import classNames from 'classnames';

interface ActiveCardProps {
  data: IGameResults | undefined;
  isActive: boolean;
  imgHeight: string;
}

export const ActiveCard = ({
  data,
  isActive = false,
  imgHeight,
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
        'h-[120px] transition-all': isActive,
        'absolute left-0 right-0 z-40 -mt-1 overflow-hidden bg-slate-300':
          isActive,
        'rounded-b-md': isActive,
      })}
    >
      <div className={`${imgHeight} mt-3 w-full px-5`}>
        {CARD_DATA.map(({ label, value }) => {
          return (
            <div
              key={label}
              className='flex justify-between border-b-2 py-2 align-middle'
            >
              <div className='text-sm'>{label}</div>
              {typeof value === 'string' ? (
                <div className='text-sm'>{value}</div>
              ) : Array.isArray(value) ? (
                <p className='text-sm'>
                  {value.map((eachValue: string) => eachValue).join(', ')}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
