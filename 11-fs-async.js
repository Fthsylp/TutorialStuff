const {readFile, writeFile} = require ('fs');

console.log('start');

readFile('./content/first.txt','utf8',(err,result) =>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result) =>{
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        writeFile(
            // we are reading from first.txt and second.txt, then we write on async.txt what we read on files.
            './content/result-async.txt',
            `here is the result: ${first}, ${second}`,
            {flag:'a'},
            (err,result) => {
                if (err) {
                    console.log(err)
                    return
                }
            console.log('done with this task!')
            // console.log(result)
            }
        )
    })
})

console.log('starting next task')

