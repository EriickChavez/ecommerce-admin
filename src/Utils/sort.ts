const injectionSort = <T>(array: T[], newItem: T, orderBy: string) => {
  const newArray = [...array, newItem].sort((a, b) => {
    // @ts-ignore
    return a[orderBy] > b[orderBy] ? 1 : a[orderBy] < b[orderBy] ? -1 : 0;
  });

  return newArray;
};

export default injectionSort;
