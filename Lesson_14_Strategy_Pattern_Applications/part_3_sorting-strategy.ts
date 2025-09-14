interface SortStrategy {
    sort(data: number[]): number[];
}
class QuickSort implements SortStrategy {
    sort(data: number[]): number[] {
        // Implement Quick Sort algorithm
        console.log('Sorting using Quick Sort');
        return data.sort((a, b) => a - b);
    }
}

class MergeSort implements SortStrategy {
    sort(data: number[]): number[] {
        // Implement Merge Sort algorithm
        console.log('Sorting using Merge Sort');
        return data.sort((a, b) => a - b);
    }
}
class SortingContext {
    private strategy: SortStrategy;

    setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    sortData(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}
