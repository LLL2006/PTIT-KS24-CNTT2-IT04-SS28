type MyFilterCallback = (
  element: number,
  searchValue: number,
  index: number,
  array: number[]
) => boolean;

function myFilter<T>(
  arr: number[],
  searchValue: number,
  callback: MyFilterCallback
): number[] {
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], searchValue, i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

const result1 = myFilter(numbers, 2, (element, searchValue) => element === searchValue);
console.log(result1);

const result2 = myFilter(numbers, 10, (element, searchValue) => element === searchValue);
console.log(result2); 
