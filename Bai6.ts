type Callback = () => void;

function task1(next: Callback): void {
  setTimeout(() => {
    console.log("Task 1 completed");
    next();
  }, 1000);
}

function task2(next: Callback): void {
  setTimeout(() => {
    console.log("Task 2 completed");
    next();
  }, 1500);
}

function task3(next: Callback): void {
  setTimeout(() => {
    console.log("Task 3 completed");
    next();
  }, 2000);
}
