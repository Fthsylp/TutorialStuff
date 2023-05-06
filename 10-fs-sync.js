const {readFileSync, writeFileSync} = require ('fs');

console.log('Starting the task')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync('./content/resut-sync.txt',
`Here is the result: ${first}, ${second} \n`,
{flag:'a'}
)

console.log('Done with this task')
console.log('starting the next one')
