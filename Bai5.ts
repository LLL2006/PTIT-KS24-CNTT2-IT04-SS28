type ConditionCallback = (message: string) => void;

function checkCondition(condition: boolean, callback: ConditionCallback): void {
  setTimeout(() => {
    if (condition) {
      callback("Điều kiện đúng");
    } else {
      callback("Điều kiện sai");
    }
  }, 1000);
}

checkCondition(true, (msg: string) => {
  console.log(msg);
});

checkCondition(false, (msg: string) => {
  console.log(msg);
});
