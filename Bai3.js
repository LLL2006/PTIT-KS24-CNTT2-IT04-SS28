function processArray(arr, callback) {
    arr.forEach(function (value, index) {
        setTimeout(function () {
            callback(value);
        }, index * 1000);
    });
}
var numbers = [1, 2, 3, 4, 5];
processArray(numbers, function (num) {
    console.log("Giá trị: ", num);
});
