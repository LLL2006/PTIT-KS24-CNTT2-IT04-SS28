type MyCallback = (element: number, index: number, array: number[]) => void;

function myForEach(arr: number[], callback: MyCallback): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (element: number, index: number, array: number[]): void => {
  console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng:`, array);
});
