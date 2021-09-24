import { Pad } from 'lesca-number';
import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { textRef, logo } = props;

		this.tr = {
			init() {
				this.logo.init();
				this.textRef.init();
			},
			in(delay) {
				this.logo.in(delay);
				this.textRef.in();
			},
			out() {
				this.logo.out();
			},
			textRef: {
				color: { r: 0, g: 0, b: 0 },
				opacity: 1,
				duration: 1000,
				delay: 0,
				init() {
					this.c = textRef.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { color, duration, delay } = this;
					const from = color;
					const to = { r: 255, g: 255, b: 255 };
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							duration,
							easing,
							delay,
							onUpdate: (e) => {
								this.color = e;
								this.tran();
							},
							onComplete: (e) => {
								this.color = e;
								this.tran();
							},
						})
						.play();
				},
				out(cb) {
					const { opacity, duration, delay } = this;
					const from = { opacity };
					const to = { opacity: 0 };
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							duration,
							easing,
							delay,
							onUpdate: (e) => {
								this.opacity = e.opacity;
								this.tran();
							},
							onComplete: (e) => {
								this.opacity = e.opacity;
								this.tran();
								cb?.();
							},
						})
						.play();
				},
				tran() {
					const r = Pad(Math.floor(this.color.r).toString(16), 2);
					const g = Pad(Math.floor(this.color.g).toString(16), 2);
					const b = Pad(Math.floor(this.color.b).toString(16), 2);
					this.c.style['background-color'] = `#${r}${g}${b}`;
					this.c.style.opacity = this.opacity;
				},
			},
			logo: {
				duration: 1000,
				delay: 500,
				property: { opacity: 0 },
				color: { r: 0, g: 0, b: 0 },
				unit: { opacity: '' },
				init() {
					this.c = logo.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in(delay = this.delay) {
					const { duration, property } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 1 };
					this.tweener
						.add({
							from,
							to,
							delay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.play();
				},
				out() {
					const { duration, property } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 0 };
					this.tweener
						.add({
							from,
							to,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.play();
				},
				tran(e = this.property) {
					this.property = { ...this.property, ...e };
					const cssText = Object.entries(this.property).map((css) => {
						const [key, value] = css;
						const unit = this.unit[key] || '';
						return `${key}:${value}${unit};`;
					});
					this.c.style.cssText = cssText.join('');
				},
			},
		};

		this.tr.init();
	}

	in(delay) {
		this.tr.in(delay);
	}

	out() {
		this.tr.out();
	}
}
