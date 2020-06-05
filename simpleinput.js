process.stdin.once('data',
    (chunk) => { console.log(chunk.toString()) 
    process.exit()}
)
