const exec = require('child_process').exec 

exec('cd ..', (err, stdout) => {
    if (err) {
        throw err;
    }

    console.log(stdout);
})