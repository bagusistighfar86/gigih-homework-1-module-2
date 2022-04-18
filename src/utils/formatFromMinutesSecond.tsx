const formatFromMinutesSecond = (timeMs: number) => {
  const minutes: number = Math.floor(timeMs / 60000);
  const seconds: string = ((timeMs % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < '10' ? '0' : ''}${seconds}`;
};

export default formatFromMinutesSecond;
