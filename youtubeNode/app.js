
/*
const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user);

// method return system uptime in second
console.log(`the system uptime is: ${os.uptime()} second`)

const myOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(myOs); 
*/

//const { log } = require("console");
//const { readFile, writeFile } = require("fs");

/*
//  synchronize read/write
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/result.txt', 
`here is the result: ${first}, ${second}`, {flag: 'a'});
*/
/*
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})

readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)
})

const second = result
writeFile('./content/result_asynch.txt', `here is my files: ${first}, ${second}`, 
(err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result);
}
) */
const _ = require('lodash')
const  items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);