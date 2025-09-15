// Task 1 - chạy sau 1 giây
function task1(next) {
    setTimeout(function () {
        console.log("Task 1 completed");
        next();
    }, 1000);
}
// Task 2 - chạy sau 1.5 giây
function task2(next) {
    setTimeout(function () {
        console.log("Task 2 completed");
        next();
    }, 1500);
}
// Task 3 - chạy sau 2 giây
function task3(next) {
    setTimeout(function () {
        console.log("Task 3 completed");
        next();
    }, 2000);
}
// Thực thi tuần tự bằng callback chaining
task1(function () {
    task2(function () {
        task3(function () {
            console.log("All tasks done!");
        });
    });
});
