import { TPlatform } from '@/app/_types/platform';
import { PARENT_PLATFORM_SLUG } from '@/app/_constant';
import Image from 'next/image';

interface PlatformIconProps {
  platform: TPlatform;
}

const HEIGHT = '24';
const WIDTH = '24';

const PlatformIcon = ({ platform }: PlatformIconProps) => {
  return PARENT_PLATFORM_SLUG[platform] ? (
    <Image
      style={{ color: 'white' }}
      src={PARENT_PLATFORM_SLUG[platform].img}
      width={WIDTH}
      height={HEIGHT}
      alt={platform}
    />
  ) : null;
};

export { PlatformIcon };
