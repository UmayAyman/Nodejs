import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('Water Full', () => {
    console.log('Please turn off the motor');
    setTimeout(() => {
        console.log('please turn off the motor. its a gentle reminder')
    }, 3000);
});

console.log('the script is running')
console.log('the script is still running')

myEmitter.emit('Water Full');