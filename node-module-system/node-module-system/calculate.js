import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const input1 = Number(process.argv[2]);
const operation = process.argv[3];
const input2 = Number(process.argv[4]);

function calculate(input1, operation, input2) {
  switch (operation) {
    case 'plus':
      return add(input1, input2);
    case 'minus':
      return subtract(input1, input2);
    case 'times':
      return multiply(input1, input2);
    case 'over':
      return divide(input1, input2);
  }
  return undefined;
}

if (isNaN(input1)) {
  console.log('invalid argument:', process.argv[2]);
} else if (isNaN(input2)) {
  console.log('invalid argument:', process.argv[4]);
} else {
  const result = calculate(input1, operation, input2);
  if (result === undefined) {
    console.log('unknown operation:', operation);
  } else {
    console.log(`${input1} ${operation} ${input2} = ${result}`);
  }
}
