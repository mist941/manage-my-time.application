export const getMinutesFromStartDay = time => {
  const date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  return (time - today) / (1000 * 60);
}