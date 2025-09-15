type MyMapCallback = (element: number, index: number, array: number[]) => number;

function myMap(arr: number[], callback: MyMapCallback): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

const doubled = myMap(numbers, (element) => element * 2);

console.log(doubled); 
