interface TPARENT_PLATFORM_SLUG {
  img: string;
}

export const PARENT_PLATFORM_SLUG: Record<string, TPARENT_PLATFORM_SLUG> = {
  xbox: { img: '/xbox.png' },
  switch: { img: '/nintendo-switch.png' },
  pc: { img: '/pc.png' },
  playstation: { img: '/playstation.png' },
  linux: { img: '/linux.png' },
  mac: { img: '/apple.png' },
};
