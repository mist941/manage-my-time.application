export const trimRest = (charactersLength, value) => {
  if (value?.length > charactersLength) {
    return `${value.substr(0, charactersLength)} ...`;
  }
  return value;
};