export const getMinutesFromStartDay = time => {
  let today = new Date(time.getUTCFullYear(), time.getUTCMonth(), time.getUTCDate());
  return (time - today) / (1000 * 60);
}