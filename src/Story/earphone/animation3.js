import Tweener from 'lesca-object-tweener';
import QueryString from 'lesca-url-parameters';
import userAgent from 'lesca-user-agent';

const debug = QueryString.get('debug') === 'true';
const device = userAgent.get() === 'desktop';
const { parseInt } = window;

export default class Animation3 {
	constructor(props, callback) {
		const { page, product, labels, footer } = props;

		const beginDelay = 1000;
		const fadeOutDelay = 1000;
		const labelDuration = 3000;
		const footerFadeOutDelay = 2000;
		this.totalTime =
			(beginDelay +
				fadeOutDelay +
				labelDuration +
				footerFadeOutDelay +
				[...labels.current.children]
					.map((e) => {
						const { delay } = e.dataset;
						return parseInt(delay);
					})
					.reduce((a, b) => a + b)) /
			1000;

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
				if (device) return;
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 2000;
				if (!dom) return;
				new Tweener({
					from,
					to,
					duration,
					delay: footerFadeOutDelay,
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
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = footer.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 1 };
					this.tweener
						.add({
							from,
							to,
							delay: fadeOutDelay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => {
								this.tran(e);
								root.tr.out();
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
				init() {
					this.c = labels.current;
					this.property = [...this.c.children].map(() => ({ opacity: 0 }));
					this.tran();
				},
				in() {
					let timeResync = beginDelay;
					const { property } = this;
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
							duration: labelDuration,
							delay: timeResync,
							onUpdate: (data) => this.tranEach(dom, data),
							onComplete: (data) => {
								this.tranEach(dom, data);
								if (i === this.c.children.length - 1) {
									root.tr.footer.in();
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
		if (!debug) this.tr.init();
	}

	in() {
		if (!debug) this.tr.in();
	}
}
