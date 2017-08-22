require('../css/style.scss');

import anime from 'animejs';
import scrollmonitor from 'scrollmonitor';

// anime({
//   targets: 'div',
//   translateX: [
//     { value: 100, duration: 1200 },
//     { value: 0, duration: 800 }
//   ],
//   rotate: '1turn',
//   backgroundColor: '#FFF',
//   duration: 2000,
//   loop: false
// });

// var scrollMonitor = require("./scrollMonitor"); // if you're not using require, you can use the scrollMonitor global.
var myElement = document.getElementsByClassName("scrolling");

var elementWatcher = scrollmonitor.create( myElement );

elementWatcher.enterViewport(function() {
    console.log( 'I have entered the viewport' );
});
elementWatcher.exitViewport(function() {
    console.log( 'I have left the viewport' );
});

//
// const x = document.getElementById('target');
//
// x.innerHTML='hello world !!!!!! is working';
//
// console.log('hello');
