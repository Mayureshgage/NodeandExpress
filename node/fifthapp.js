const fs = require('fs');
let books = fs.readFile('samplejson.json',function(err,files) {
    if(err) {
        console.log(err);
    } else {
        console.log(json.stringify(files));
    }
});