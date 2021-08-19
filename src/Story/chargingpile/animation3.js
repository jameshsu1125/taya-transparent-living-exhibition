import Tweener from 'lesca-object-tweener';

const { parseInt } = window;

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
			},
			out() {
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 2000;

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
						callback?.();
					},
				});
			},
			footer: {
				duration: 3000,
				delay: 0,
				property: { opacity: 0 },
				unit: { opacity: '' },
				fadeOutDelay: 2000,
				init() {
					this.c = footer.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay, fadeOutDelay } = this;
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
							onComplete: (e) => {
								this.tran(e);
								setTimeout(() => {
									root.tr.out();
								}, fadeOutDelay);
							},
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
				property: { opacity: 0 },
				init() {
					this.c = product.current;
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
					this.c.style.opacity = this.property.opacity;
				},
			},
			labels: {
				duration: 2000,
				delay: 1500,
				fadeOutDelay: 1000,
				init() {
					this.c = labels.current;
					this.property = [...this.c.children].map(() => ({ opacity: 0 }));
					this.tran();
				},
				in() {
					let timeResync = this.delay;
					const { duration, property, fadeOutDelay } = this;
					[...this.c.children].forEach((e, i) => {
						const dom = e;

						const { delay } = e.dataset;

						const p = property[i];
						const { opacity } = p;

						const from = { opacity };
						const to = { opacity: 1 };
						timeResync += parseInt(delay);

						new Tweener({
							from,
							to,
							duration,
							delay: timeResync,
							onUpdate: (data) => this.tranEach(dom, data),
							onComplete: (data) => {
								this.tranEach(dom, data);
								if (i === this.c.children.length - 1) {
									setTimeout(() => {
										root.tr.footer.in();
									}, fadeOutDelay);
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
