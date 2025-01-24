export const formatUnixDate = (
  unixDate: number,
  hourOffset?: number,
): string => {
  const dayjs = useDayjs();
  return dayjs
    .unix(unixDate)
    .add(hourOffset || 0, "hour")
    .format("YYYY-MM-DD HH:mm:ss Z");
};
