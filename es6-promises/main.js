import takeAChance from './take-a-chance.js';

const promise = takeAChance('Kevin');

promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error.message));
