export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const isMobile = device !== 'DESKTOP';
  // const collapsed = device !== 'DESKTOP';
  // const showTag = device == 'DESKTOP';

  return {
    device,
    isMobile,
    // collapsed,
    // showTag,
  } as const;
}
