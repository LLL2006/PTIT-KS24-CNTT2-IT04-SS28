function myFilter(arr, searchValue, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], searchValue, i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}
var numbers = [1, 2, 2, 3, 4, 5, 6];
var result1 = myFilter(numbers, 2, function (element, searchValue) { return element === searchValue; });
console.log(result1);
var result2 = myFilter(numbers, 10, function (element, searchValue) { return element === searchValue; });
console.log(result2);
