function displayNumbers(callback, delay) {
    var current = 1;
    setInterval(function () {
        callback(current);
        current++;
    }, delay);
}
displayNumbers(function (num) {
    console.log("Giá trị: ", num);
}, 1000);
