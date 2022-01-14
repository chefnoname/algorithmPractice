// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

const finalValueAfterOperations = (operations) => {
  let count = 0;

  for (let i = 0; i < operations.length; i++) {
    let currentOp = operations[i];

    count = executeTheOperation(count, currentOp);
  }

  return count;
};

const executeTheOperation = (count, op) => {
  for (let i = 0; i < op.length; i++) {
    let currentOp = op[i];

    if (currentOp === "-") {
      count -= 0.5;
    } else if (currentOp === "+") {
      count += 0.5;
    }
  }

  return count;
};

finalValueAfterOperations(["--X", "X++", "X++"]); // 1
finalValueAfterOperations(["++X", "++X", "X++"]); // 3
finalValueAfterOperations(["X++", "++X", "--X", "X--"]); // 0
