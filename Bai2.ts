function delayedCallback(callback: () => void, delay: number): void {
    setTimeout(callback, delay);
}

delayedCallback(() => {
    console.log("Hàm callback sẽ được gọi sau 2 giấy")
}, 2000);