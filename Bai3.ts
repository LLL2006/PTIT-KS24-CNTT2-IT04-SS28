function processArray(
    arr: number[],
    callback: (value: number) => void
): void {
    arr.forEach((value, index) => {
        setTimeout(() => {
            callback(value);
        }, index * 1000);
    })
}

const numbers: number[] = [1,2,3,4,5];

processArray(numbers, (num: number) => {
    console.log("Giá trị: ", num);
})