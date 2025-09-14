type CheckArray<T> = T extends any[] ? 'Array' : 'Not an Array';

type Test1 = CheckArray<number[]>; // Will evaluate to 'Array'
type Test2 = CheckArray<string>; // Will evaluate to 'Not an Array'
