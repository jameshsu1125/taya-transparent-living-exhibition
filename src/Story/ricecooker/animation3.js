import Tweener from 'lesca-object-tweener';

export default class Animation3 {
	constructor(props, callback) {
		const { page, product, labels, footer } = props;

		const root = this;
		this.tr = {
			init() {
				this.labels.init();
				this.product.init();
				this.footer.init();
			},
			in() {
				this.labels.in();
				this.product.in();
				this.footer.in();
			},
			out() {
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 3000;

				new Tweener({
					from,
					to,
					duration,
					delay: 2000,
					onUpdate: (e) => {
						dom.style.opacity = e.opacity;
					},
					onComplete: (e) => {
						dom.style.opacity = e.opacity;
						dom.style.display = 'none';
						callback?.();
					},
				});
			},
			footer: {
				duration: 3000,
				delay: 1500,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = footer.current;
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
			product: {
				duration: 3000,
				delay: 0,
				property: { x: 750 },
				init() {
					this.c = product.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { x } = property;
					const from = { x };
					const to = { x: 0 };
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
					this.c.style.transform = `translateX(${this.property.x}px)`;
				},
			},
			labels: {
				duration: 2000,
				delay: 3000,
				delayEach: 2000,
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
							onComplete: (data) => {
								this.tranEach(dom, data);
								if (i === this.c.children.length - 1) {
									root.tr.out();
								}
							},
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
