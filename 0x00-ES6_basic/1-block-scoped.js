export default function taskBlock(trueOrFalse) {
    let task = false; // Use let instead of var
    let task2 = true; // Use let instead of var
  
    if (trueOrFalse) {
      task = true; // Assign value to existing task variable
      task2 = false; // Assign value to existing task2 variable
    }
  
    return [task, task2];
  }
  