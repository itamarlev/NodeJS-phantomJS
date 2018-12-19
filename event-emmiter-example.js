const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.on('hello', () => {
    console.log('hi there!');
  });

  myEmitter.on('print', (a,b) => {
    console.log(a,b, this);
  });
myEmitter.emit('hello');
myEmitter.emit('print',1,2);

const myEmitter2 = new MyEmitter();
myEmitter2.on('event', (a, b) => {
  setImmediate(() => {  //will run async and not in the order which the listeners were assigned.
    console.log('this happens asynchronously');
  });
});
myEmitter2.emit('event', 'a', 'b');


myEmitter.prependListener('event', function hi() {
    console.log('someone connected!');
  });

 myEmitter.prependOnceListener('event', function firstOne() {
    console.log('only once but first!');
  });


  myEmitter.emit('event');
  myEmitter.emit('event');

const myEmitter3 = new MyEmitter();
let m = 0;
myEmitter3.once('event', () => { //listen to one event only and then unregister from the event
  console.log(++m);
});
myEmitter3.emit('event');
// Prints: 1
myEmitter3.emit('event');
// Ignored

myEmitter.on('error', (err) => { //always register on the error event
    console.error('whoops! there was an error: ' + err);
  });

myEmitter.emit('error', new Error('whoops!'));

console.log(myEmitter.eventNames());
console.log(myEmitter2.eventNames());
console.log(myEmitter3.eventNames());

console.log(myEmitter.listenerCount('event'));
console.log(myEmitter.listeners('event'));