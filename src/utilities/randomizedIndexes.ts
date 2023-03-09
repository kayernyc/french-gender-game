export const randomizeIndexes = <T>(sourceArray: T[]): number[] => {
  const arrayOfIndexes: number[] = [];
  [...Array(sourceArray.length).keys()].forEach((wordIndex: number) => {
    if (arrayOfIndexes.length > 1) {
      const positionIndex = Math.floor(Math.random() * arrayOfIndexes.length);
      arrayOfIndexes.splice(positionIndex, 0, wordIndex)
    } else {
      Math.random() > .5 ? arrayOfIndexes.unshift(wordIndex) : arrayOfIndexes.push(wordIndex)
    }
  });

  return arrayOfIndexes;
}
