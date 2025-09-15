function delayedCallback(callback, delay) {
    setTimeout(callback, delay);
}
delayedCallback(function () {
    console.log("Hàm callback sẽ được gọi sau 2 giấy");
}, 2000);
