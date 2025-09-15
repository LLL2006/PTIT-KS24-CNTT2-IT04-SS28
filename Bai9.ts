type MyMapCallback<T, U> = (element: T, index: number, array: T[]) => U;

function myMap<T, U>(arr: T[], callback: MyMapCallback<T, U>): U[] {
  const result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const doubled = myMap(numbers, (element) => element * 2);

console.log(doubled); 
