type CheckArray<T> = T extends any[] ? 'Array' : 'Not an Array';

type Test1 = CheckArray<number[]>; // 'Array'
type Test2 = CheckArray<string>; // 'Not an Array'
