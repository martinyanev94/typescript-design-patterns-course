const sortingContext = new SortingContext();

const data = [5, 2, 9, 1, 5, 6];

sortingContext.setStrategy(new QuickSort());
const sortedDataQuick = sortingContext.sortData(data);
console.log(sortedDataQuick); // Output: Sorted array with Quick Sort

sortingContext.setStrategy(new MergeSort());
const sortedDataMerge = sortingContext.sortData(data);
console.log(sortedDataMerge); // Output: Sorted array with Merge Sort
