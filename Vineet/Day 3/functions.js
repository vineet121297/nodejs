var open = false;

setTimeout(function() {
open = true;
}, 1000)

while(!open) {
    console.log('Will not open!');// wait
}

console.log('opened!');