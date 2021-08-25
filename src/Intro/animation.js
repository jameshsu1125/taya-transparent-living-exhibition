import Click from 'lesca-click';
import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	/**
	 *
	 * @param {object} props { DOMS }
	 * @param {function} callback callback
	 */
	constructor(props, callback) {
		const { contentRef, ctaRef, startButton, introRef, arrow, selectFadein, setAudioState } = props;
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
				delay: 700,
				duration: 1000,
				opacity: 0,
				init() {
					this.c = arrow.current;
					this.tran();
				},
				in() {
					this.c.style.display = 'block';
					const { delay, duration, opacity } = this;
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
							setTimeout(() => {
								selectFadein?.();
								root.tr.out();
							}, 2000);
						},
					});
				},
				out() {
					const { opacity, duration } = this;
					const from = { opacity };
					const to = { opacity: 0 };
					const easing = Bezier.easeOutQuart;
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
			},
			ctaRef: {
				opacity: 0,
				delay: 500,
				duration: 1000,
				init() {
					this.c = ctaRef.current;
					this.tran();
				},
				in() {
					this.c.style.display = 'block';
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
					const { opacity, duration } = this;
					const from = { opacity };
					const to = { opacity: 0 };
					const easing = Bezier.easeOutQuart;
					new Tweener({
						from,
						to,
						delay: 0,
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
						setAudioState('bgm');
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
						e.style.transform = `translateY(${y}px) scale(1, 1.1)`;
					});
				},
				setStyle(dom, data) {
					const { o, y } = data;
					const target = dom;
					target.style.opacity = o;
					target.style.transform = `translateY(${y}px) scale(1, 1.1)`;
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
