import Tweener, { Bezier } from 'lesca-object-tweener';
import { Howl } from 'howler';
import Click from 'lesca-click';
import BGM from './sounds/bgm.mp3';

export default class Animation {
	/**
	 *
	 * @param {object} props { DOMS }
	 * @param {function} callback callback
	 */
	constructor(props, callback) {
		const { contentRef, ctaRef, startButton, introRef, arrow, selectFadein } = props;
		const root = this;
		this.tr = {
			init() {
				this.content.init();
				this.startButton.init();
				this.introRef.init();
				this.ctaRef.init();
				this.arrow.init();
			},
			in() {
				this.content.in();
				this.startButton.in();
				this.introRef.in();
			},
			out() {
				this.ctaRef.out();
				this.introRef.out();
				this.arrow.out();
			},
			arrow: {
				left: 100,
				delay: 700,
				duration: 1000,
				property: {
					x: 0,
					is: false,
				},
				init() {
					this.c = arrow.current;
					this.tran();
				},
				in() {
					this.c.style.display = 'block';
					const { left, delay, duration } = this;
					const from = { left };
					const to = { left: 0 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						delay,
						easing,
						duration,
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
							this.in2nd();
						},
					});
				},
				in2nd() {
					const { left } = this;
					const from = { left };
					const to = { left: -5 };
					const easing = Bezier.linear;
					new Tweener({
						from,
						to,
						easing,
						duration: 2000,
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
							root.tr.out();
						},
					});
				},
				out() {
					const { left, duration } = this;
					const from = { left };
					const to = { left: -100 };
					const easing = Bezier.easeOutQuart;
					new Tweener({
						from,
						to,
						delay: 0,
						easing,
						duration,
						onStart: () => {
							selectFadein?.();
						},
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
						},
					});
				},
				tran() {
					this.c.style.transform = `translateX(${this.left}%)`;
				},
			},
			ctaRef: {
				left: -100,
				delay: 500,
				duration: 1000,
				property: {
					x: 0,
					is: false,
				},
				init() {
					this.c = ctaRef.current;
					this.tran();
				},
				in() {
					this.c.style.display = 'block';
					const { left, delay, duration } = this;
					const from = { left };
					const to = { left: 0 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						delay,
						easing,
						duration,
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
							this.in2nd();
						},
					});
				},
				in2nd() {
					const { left } = this;
					const from = { left };
					const to = { left: 5 };
					const easing = Bezier.linear;
					new Tweener({
						from,
						to,
						easing,
						duration: 2000,
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
						},
					});
				},
				out() {
					const { left, duration } = this;
					const from = { left };
					const to = { left: 100 };
					const easing = Bezier.easeOutQuart;
					new Tweener({
						from,
						to,
						delay: 0,
						easing,
						duration,
						onStart: () => {
							selectFadein?.();
						},
						onUpdate: (data) => {
							this.left = data.left;
							this.tran();
						},
						onComplete: (data) => {
							this.left = data.left;
							this.tran();
						},
					});
				},
				tran() {
					this.c.style.transform = `translateX(${this.left}%)`;
				},
			},
			introRef: {
				opacity: 0,
				delay: 0,
				duration: 500,
				init() {
					this.c = introRef.current;
					this.tran();
				},
				in() {
					const { opacity, delay, duration } = this;
					const from = { opacity };
					const to = { opacity: 1 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						delay,
						easing,
						duration,
						onUpdate: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
						onComplete: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
					});
				},
				out() {
					const { opacity, delay, duration } = this;
					const from = { opacity };
					const to = { opacity: 0 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						delay,
						easing,
						duration,
						onUpdate: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
						onComplete: (data) => {
							this.opacity = data.opacity;
							this.tran();
							callback?.();
						},
					});
				},
				tran() {
					this.c.style.opacity = this.opacity;
				},
			},
			startButton: {
				opacity: 0,
				delay: 2500,
				duration: 500,
				init() {
					this.c = startButton.current;
					this.tran();
				},
				in() {
					const { opacity, delay, duration } = this;
					const from = { opacity };
					const to = { opacity: 1 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						delay,
						easing,
						duration,
						onUpdate: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
						onComplete: (data) => {
							this.opacity = data.opacity;
							this.tran();
							this.evt();
						},
					});
				},
				out() {
					const { opacity, duration } = this;
					const from = { opacity };
					const to = { opacity: 0 };
					const easing = Bezier.easeInOutQuart;
					new Tweener({
						from,
						to,
						easing,
						duration,
						onUpdate: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
						onComplete: (data) => {
							this.opacity = data.opacity;
							this.tran();
						},
					});
				},
				tran() {
					this.c.style.opacity = this.opacity;
				},
				evt() {
					Click.add('.startButton', () => {
						Click.remove('.startButton');
						this.out();
						root.tr.content.out();
						root.tr.ctaRef.in();
						root.tr.arrow.in();
						const sound = new Howl({
							src: [BGM],
							html5: true,
							autoplay: true,
							loop: true,
						});
						sound.play();
					});
				},
			},
			content: {
				opacity: [],
				duration: 1500,
				delay: 1000,
				eachDelay: 100,
				offsetY: 200,
				left: 0,
				init() {
					this.c = contentRef.current;
					[...this.c.children].forEach(() => {
						this.opacity.push({ o: 0, y: this.offsetY });
					});
					this.tran();
				},
				in() {
					const { duration } = this;
					[...this.c.children].forEach((e, i) => {
						const from = this.opacity[i];
						const to = { o: 1, y: 0 };
						const delay = this.delay + i * this.eachDelay;
						const easing = Bezier.easeInOutQuart;
						new Tweener({
							from,
							to,
							delay,
							easing,
							duration,
							onUpdate: (data) => this.setStyle(e, data),
							onComplete: (data) => this.setStyle(e, data),
						});
					});
				},
				out() {
					const data = [...this.c.children].map(() => ({ left: 0 }));
					[...this.c.children].forEach((e, i) => {
						const from = data[i];
						const to = { left: 200 };
						const delay = i * this.eachDelay;
						const easing = Bezier.easeInOutQuart;
						new Tweener({
							from,
							to,
							delay,
							easing,
							duration: 1000,
							onUpdate: (p) => this.setOutStyle(e, p),
							onComplete: (p) => this.setOutStyle(e, p),
						});
					});
				},
				tran() {
					[...this.c.children].forEach((e, i) => {
						const data = this.opacity[i];
						const { o, y } = data;
						e.style.opacity = o;
						e.style.transform = `translateY(${y}px)`;
					});
				},
				setStyle(dom, data) {
					const { o, y } = data;
					const target = dom;
					target.style.opacity = o;
					target.style.transform = `translateY(${y}px)`;
				},
				setOutStyle(dom, data) {
					const { left } = data;
					const target = dom;
					target.style['margin-left'] = `${left}%`;
				},
			},
		};

		this.tr.init();
	}

	in() {
		this.tr.in();
	}
}
