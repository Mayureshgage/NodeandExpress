const os = require('os');
console.log('Total memory',os.totalmem());
console.log(`This is uptime ${os.uptime()}`);
console.log(`this is free memory ${os.freemem()}`)