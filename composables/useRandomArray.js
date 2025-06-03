export const useRandomArray = (
  array,
  limit = array.length - 1,
  excludes = [],
) => {
  const outputArray = [];
  const maxIndex = array.length - 1;

  while (outputArray.length < limit) {
    const number = Math.floor(Math.random() * maxIndex);
    const item = array[number];

    if (!excludes.includes(number) && !outputArray.includes(item)) {
      outputArray.push(item);
    }
  }

  return outputArray;
};
