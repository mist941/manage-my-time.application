const getUniqueString = () => Math.random().toString(36).substr(2, 9);

export const generateUniqueId = () => {
  return `${getUniqueString()}.${getUniqueString()}.${getUniqueString()}`;
};
