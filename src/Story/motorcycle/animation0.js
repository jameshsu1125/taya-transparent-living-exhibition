import Tweener, { Bezier } from 'lesca-object-tweener';

const { parseInt } = window;

export default class Animation0 {
	constructor(props, callback) {
		const { page, bg, title, labels, cloud } = props;

		const root = this;
		this.tr = {
			init() {
				this.bg.init();
				this.title.init();
				this.labels.init();
				this.cloud.init();
			},
			in() {
				this.bg.in();
				this.title.in();
				this.labels.in();
				this.cloud.in();
			},
			out() {
				const dom = page.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 2000;

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
			cloud: {
				delay: -400,
				property: { 'background-position-x': 0 },
				unit: { 'background-position-x': 'px' },
				easing: Bezier.linear,
				init() {
					this.c = cloud.current;

					this.duration =
						root.tr.labels.delay +
						root.tr.labels.fadeOutDelay +
						4000 +
						[...labels.current.children]
							.map((dom) => parseInt(dom.dataset.delay))
							.reduce((duration, delay) => duration + delay);

					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, delay, easing } = this;
					const from = { 'background-position-x': this.property['background-position-x'] };
					const to = { 'background-position-x': -1400 };
					this.tweener
						.add({
							from,
							to,
							delay,
							easing,
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
			bg: {
				delay: 0,
				property: { opacity: 0, left: -500 },
				unit: { opacity: '', left: 'px' },
				init() {
					this.c = bg.current;
					this.duration =
						root.tr.labels.delay +
						root.tr.labels.fadeOutDelay +
						4000 +
						[...labels.current.children]
							.map((dom) => parseInt(dom.dataset.delay))
							.reduce((duration, delay) => duration + delay);
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity, left } = property;
					const fromOpacity = { opacity };
					const toOpacity = { opacity: 1 };
					const easing = Bezier.linear;
					const fromLeft = { left };
					const toLeft = { left: -170 };
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
						onComplete: (e) => this.tran(e),
					});
				},
				tran(data = this.property) {
					this.property = { ...this.property, ...data };
					this.c.style.opacity = this.property.opacity;
					this.c.style['margin-left'] = `${this.property.left}px`;
				},
			},
			title: {
				duration: 1000,
				delay: 0,
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
				delay: 1000,
				fadeOutDelay: 2000,
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
							onComplete: () => {
								if (i === this.c.children.length - 1) {
									setTimeout(() => {
										root.tr.out();
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
