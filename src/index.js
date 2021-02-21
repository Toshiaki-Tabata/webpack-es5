console.log('Hello World from your main file!');
const sampleArray = ['aa', 'bb', 'cc', 'dd'];

console.log('add!add!aaddd!');
sampleArray.map(sample => {
    console.log(sample);
});

import add from './add';

console.info(add(2, 3));
console.info(['hoge', 'fuga', 'piyo'].includes('piyo'));

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
(async () => {
  console.log('start');
  await wait(2000);
  console.log('end')
})();