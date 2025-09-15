function myMap(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
}
var numbers = [1, 2, 3, 4, 5, 6];
var doubled = myMap(numbers, function (element) { return element * 2; });
console.log(doubled);
