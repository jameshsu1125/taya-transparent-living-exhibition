import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation2 {
	constructor(props, callback) {
		const { page, bg, labels } = props;

		const root = this;
		this.tr = {
			init() {
				this.bg.init();
				this.labels.init();
			},
			in() {
				this.bg.in();
				this.labels.in();
			},
			out() {
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 1000;

				new Tweener({
					from,
					to,
					duration,
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
			bg: {
				duration: 14000,
				delay: 0,
				property: { opacity: 0, left: -100 },
				unit: { opacity: '', left: 'px' },
				init() {
					this.c = bg.current;
					this.tweener = new Tweener();
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
					this.c.style['margin-left'] = `${this.property.left}px`;
				},
			},
			labels: {
				duration: 3000,
				delay: 1000,
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
