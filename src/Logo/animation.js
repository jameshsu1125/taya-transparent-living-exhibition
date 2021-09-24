import { Pad } from 'lesca-number';
import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { content, logo, label } = props;

		this.tr = {
			init() {
				this.content.init();
				this.logo.init();
				this.label.init();
			},
			in() {
				this.content.in();
				this.logo.in();
				this.label.in();
			},
			out(callback) {
				this.logo.out();
				this.label.out(callback);
			},
			label: {
				color: { r: 0, g: 0, b: 0 },
				opacity: 1,
				duration: 1000,
				delay: 200,
				init() {
					this.c = label.current;
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
				color: { r: 0, g: 0, b: 0 },
				opacity: 1,
				duration: 1000,
				delay: 0,
				init() {
					this.c = logo.current;
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
				out() {
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
			content: {
				height: 100,
				opacity: 1,
				init() {
					this.c = content.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { height, opacity } = this;
					const from = { height, opacity };
					const to = { height: 60, opacity: 1 };
					const duration = 1200;
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							duration,
							easing,
							onUpdate: (e) => {
								this.height = e.height;
								this.opacity = e.opacity;
								this.tran();
							},
							onComplete: (e) => {
								this.height = e.height;
								this.opacity = e.opacity;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.height = `${this.height}%`;
					this.c.style.opacity = this.opacity;
				},
			},
		};
		this.tr.init();
	}

	in() {
		this.tr.in();
	}

	out(callback) {
		this.tr.out(callback);
	}
}
