var calculate = function (a, b, callback) {
    var sum = a + b;
    callback(sum);
};
calculate(5, 7, function (result) {
    console.log("Kết quả là:", result);
});
