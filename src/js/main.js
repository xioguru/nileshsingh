require('../css/style.scss');
import anime from 'animejs';
import scrollmonitor from 'scrollmonitor';

var morphing= ()=>{
 anime({
   targets: '#morphing .pathmorph',
   points: [
     { d: 'M791,231.828427 L791,545 L1104.17157,545 L791,231.828427 Z' },
     { d: 'M791,230 L791,546 L1107,546 L1107,230 L791,230 Z' },
     { d: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
   ],
   easing: 'easeOutQuad',
   duration: 2000,
   loop: true
 });
}









var init = () =>{

	morphing();
}

init();
