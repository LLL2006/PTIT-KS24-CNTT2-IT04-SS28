function checkCondition(condition, callback) {
    setTimeout(function () {
        if (condition) {
            callback("Điều kiện đúng");
        }
        else {
            callback("Điều kiện sai");
        }
    }, 1000);
}
checkCondition(true, function (msg) {
    console.log(msg);
});
checkCondition(false, function (msg) {
    console.log(msg);
});
