function taskOne() {
  console.log("Task 1 completed");
}

function taskTwo(callback) {
  console.log("Task 2 completed");
  callback();  // Execute the callback after taskTwo finishes
}

taskTwo(taskOne);
