export function getGlobalState() {
  const device = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) ? 'MOBILE' : 'DESKTOP';
  const isMobile = device !== 'DESKTOP';
  const isAndroid = /(Android)/i.test(navigator.userAgent);

  // const collapsed = device !== 'DESKTOP';
  // const showTag = device == 'DESKTOP';

  return {
    device,
    isMobile,
    isAndroid,
    // collapsed,
    // showTag,
  } as const;
}
