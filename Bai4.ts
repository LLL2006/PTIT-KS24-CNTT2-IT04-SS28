type NumberCallback = (value: number) => void;

function displayNumbers(callback: NumberCallback,delay: number): void {
    let current: number = 1;

    setInterval(() => {
        callback(current);
        current++;
    }, delay);
}

displayNumbers((num: number) => {
    console.log("Giá trị: ", num);
}, 1000)