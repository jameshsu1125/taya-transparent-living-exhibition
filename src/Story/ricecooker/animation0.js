import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation0 {
	constructor(props, callback) {
		const { page, bg, eyes, sweat, title, labels } = props;

		const root = this;
		this.tr = {
			init() {
				this.bg.init();
				this.title.init();
				this.labels.init();
				this.eyes.init();
				this.sweat.init();
			},
			in() {
				this.bg.in();
				this.title.in();
				this.labels.in();
				this.sweat.in();
			},
			out() {
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 1000;

				dom.style.opacity = 1;
				new Tweener({
					from,
					to,
					duration,
					easing: Bezier['ease-out'],
					onUpdate: (e) => {
						dom.style.opacity = e.opacity;
					},
					onComplete: (e) => {
						dom.style.opacity = e.opacity;
						dom.style.display = 'none';
					},
				});
				callback?.();
			},
			sweat: {
				duration: 5000,
				delay: 12000,
				property: { opacity: 0, 'margin-top': -100 },
				unit: { opacity: '', 'margin-top': 'px' },
				init() {
					this.c = sweat.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const from = property;
					const to = { opacity: 1, 'margin-top': 0 };
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
			eyes: {
				init() {
					this.c = eyes.current;
					this.blank();
				},
				blank() {
					const openEyesTime = 200 + Math.random() * 100;
					const nextBlankTime = 5000 + Math.random() * 500;
					this.close();
					setTimeout(() => {
						this.open();
						setTimeout(() => {
							this.blank();
						}, nextBlankTime);
					}, openEyesTime);
				},
				close() {
					this.c.style.opacity = 1;
				},
				open() {
					this.c.style.opacity = 0;
				},
			},
			bg: {
				duration: 24000,
				delay: 0,
				property: { opacity: 0, left: 150 },
				unit: { opacity: '', left: 'px' },
				init() {
					this.c = bg.current;
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity, left } = property;
					const fromOpacity = { opacity };
					const toOpacity = { opacity: 1 };
					const easing = Bezier.linear;

					const fromLeft = { left };
					const toLeft = { left: 0 };

					new Tweener({
						from: fromOpacity,
						to: toOpacity,
						delay,
						duration: 3000,
						onUpdate: (e) => this.tran(e),
						onComplete: (e) => this.tran(e),
					});

					new Tweener({
						from: fromLeft,
						to: toLeft,
						delay,
						duration,
						easing,
						onUpdate: (e) => this.tran(e),
						onComplete: (e) => {
							this.tran(e);
							root.tr.out();
						},
					});
				},
				tran(data = this.property) {
					this.property = { ...this.property, ...data };
					this.c.style.opacity = this.property.opacity;
					this.c.style['margin-left'] = `${this.property.left.toFixed(5)}px`;
				},
			},
			title: {
				duration: 3000,
				delay: 1000,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = title.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
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
			labels: {
				duration: 3000,
				delay: 3000,
				delayEach: 3000,
				init() {
					this.c = labels.current;
					this.property = [...this.c.children].map(() => ({ opacity: 0 }));
					this.tran();
				},
				in() {
					const { duration, delay, delayEach, property } = this;
					[...this.c.children].forEach((e, i) => {
						const dom = e;
						const p = property[i];
						const { opacity } = p;

						const from = { opacity };
						const to = { opacity: 1 };
						const d = delay + i * delayEach;

						new Tweener({
							from,
							to,
							duration,
							delay: d,
							onUpdate: (data) => this.tranEach(dom, data),
						});
					});
				},
				tran(data = this.property) {
					[...this.c.children].forEach((e, i) => {
						const dom = e;
						const property = data[i];
						const { opacity } = property;
						dom.style.opacity = opacity;
					});
				},
				tranEach(dom, data) {
					const d = dom;
					d.style.opacity = data.opacity;
				},
			},
		};
		this.tr.init();
	}

	in() {
		this.tr.in();
	}
}
