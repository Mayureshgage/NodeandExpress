const EventEmitter = require('events');
const emitter = new EventEmitter();
 
//this should be written before emit()
emitter.on('MessageLogged',function() {
    console.log('Listener is listened');
});

emitter.emit('MessageLogged');