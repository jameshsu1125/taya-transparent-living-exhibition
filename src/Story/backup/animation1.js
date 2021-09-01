import Tweener, { Bezier } from 'lesca-object-tweener';

const { parseInt } = window;

export default class Animation1 {
	constructor(props, callback) {
		const { page, bg, labels } = props;

		const beginDelay = 1000;
		const fadeOutDelay = 1000;
		const labelDuration = 3000;
		this.totalTime =
			(beginDelay +
				fadeOutDelay +
				labelDuration +
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
				const duration = 2000;
				dom.style.opacity = 1;
				new Tweener({
					from,
					to,
					duration,
					delay: fadeOutDelay,
					easing: Bezier['ease-out'],
					onUpdate: (e) => {
						dom.style.opacity = e.opacity;
					},
					onComplete: (e) => {
						dom.style.opacity = e.opacity;
						dom.style.display = 'none';
					},
					onStart: () => callback?.(),
				});
			},
			bg: {
				delay: 0,
				property: { opacity: 0, left: 60 },
				unit: { opacity: '', left: 'px' },
				init() {
					this.c = bg.current;
					this.duration = root.totalTime * 1000 + 1000;
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity, left } = property;
					const fromOpacity = { opacity };
					const toOpacity = { opacity: 1 };
					const easing = Bezier.linear;
					const fromLeft = { left };
					const toLeft = { left: -100 };
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
							onComplete: () => {
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
