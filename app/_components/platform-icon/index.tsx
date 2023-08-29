import { TPlatform } from '@/app/_types/platform';
import { PARENT_PLATFORM_SLUG } from '@/app/_constants';
import Image from 'next/image';

interface PlatformIconProps {
  platform: TPlatform;
}

const HEIGHT = '16';
const WIDTH = '16';

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  return PARENT_PLATFORM_SLUG[platform] ? (
    <div className='flex h-6 w-6 items-center justify-center rounded-lg border border-slate-50 bg-slate-300'>
      <Image
        style={{ color: 'white' }}
        src={PARENT_PLATFORM_SLUG[platform].img}
        width={WIDTH}
        height={HEIGHT}
        alt={platform}
      />
    </div>
  ) : null;
};

export { PlatformIcon };
