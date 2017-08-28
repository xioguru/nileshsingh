require('../css/style.scss');
import anime from 'animejs';
import scrollmonitor from 'scrollmonitor';



const DOM ={};
DOM.svg = document.querySelector('.morph');
DOM.shapeEl = DOM.svg.querySelector('polygon');
DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
DOM.footer= document.querySelector('.content--related');
console.log(DOM.contentElems);
const contentElemsTotal = DOM.contentElems.length;
const shapes = [
	{
		points: '700,84.4 1047.1,685.6 352.9,685.6 352.9,685.6 352.9,685.6 352.9,685.6',
		scaleX: .8,
		scaleY: .9,
		rotate: 0,
		tx: 0,
		ty: 0,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	},
	{
		points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
		scaleX: .7,
		scaleY: .7,
		rotate: 90,
		tx: -100,
		ty: 100,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	},
	{
		points: '890.9,54.3 1081.8,385 890.9,715.7 509.1,715.7 318.2,385 509.1,54.3',
		scaleX: 1,
		scaleY: 1,
		rotate: -45,
		tx: 0,
		ty: -50,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	},
	{
		points: '983.4,101.6 779,385 983.4,668.4 416.6,668.4 611,388 416.6,101.9',
		scaleX: 1,
		scaleY: 1,
		rotate: 145,
		tx: 100,
		ty: -50,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	},
	{
		points: '983.4,101.6 1255,385 983.4,668.4 416.6,668.4 157,368 416.6,101.9',
		scaleX: .7,
		scaleY: .7,
		rotate: -70,
		tx: -50,
		ty: 50,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	},
	{
		points: '983.4,101.6 983.4,668.4 416.6,668.4 416.6,101.9 416.6,101.9 416.6,101.9',
		scaleX: 1.2,
		scaleY: 1.2,
		rotate: 20,
		tx: 0,
		ty: 0,
		fill: {
			color: 'none',
			duration: 500,
			easing: 'linear'
		},
		animation: {
			points: {
				duration: 500,
				easing: 'easeOutExpo'
			},
			svg: {
				duration: 1500,
				easing: 'easeOutElastic'
			}
		}
	}
];

const createScrollWatchers = () =>{
	DOM.contentElems.forEach((el,pos)=>{
		// console.log(pos);
		const scrollElemToWatch = DOM.contentElems[pos];
		pos = pos ? pos : contentElemsTotal;
		console.log(scrollElemToWatch);
		const watcher = scrollmonitor.create(scrollElemToWatch);

		watcher.enterViewport(()=>{
			// anime.remove(DOM.shapeEl);
				anime({
					targets: DOM.shapeEl,
					duration: shapes[pos].animation.points.duration,
					easing: shapes[pos].animation.points.easing,
					elasticity: shapes[pos].animation.points.elasticity || 0,
					points: shapes[pos].points,
					fill: {
						value: shapes[pos].fill.color,
						duration: shapes[pos].fill.duration,
						easing: shapes[pos].fill.easing
					}
				});
		})
	})
}

const initShapeEl = () =>{
	anime.remove(DOM.svg);
	anime({
			targets: DOM.svg,
			duration: 1,
			easing: 'linear',
			scaleX: shapes[0].scaleX,
			scaleY: shapes[0].scaleY,
			translateX: shapes[0].tx+'px',
			translateY: shapes[0].ty+'px',
			rotate: shapes[0].rotate+'deg'
		});
}



var init = () =>{
	// initShapeEl();
	createScrollWatchers();
	console.log('hello');
}

init();
