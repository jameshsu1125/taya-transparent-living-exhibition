import Tweener, { Bezier } from 'lesca-object-tweener';
import QueryString from 'lesca-url-parameters';

const debug = QueryString.get('debug') === 'true';
const { parseInt } = window;

export default class Animation1 {
	constructor(props, callback) {
		const { page, bg, labels, trash0, trash1, trash2 } = props;

		const beginDelay = 1000;
		const fadeOutDelay = 2000;
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
				this.trash0.init();
				this.trash1.init();
				this.trash2.init();
			},
			in() {
				this.bg.in();
				this.labels.in();
				this.trash0.in();
				this.trash1.in();
				this.trash2.in();
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
			trash2: {
				delay: 0,
				property: { frame: 0 },
				unit: { opacity: '' },
				easing: Bezier.linear,
				radius: 100,
				init() {
					this.c = trash2.current;
					this.duration = root.totalTime * 1000 + 1000;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay, easing } = this;
					const { frame } = property;
					const from = { frame };
					const to = { frame: 200 };
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
					const { radius } = this;
					const { frame } = this.property;
					const x = Math.cos((Math.PI / 180) * frame) * radius;
					const y = Math.sin((Math.PI / 180) * frame * 2) * radius;
					this.c.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${x * 0.01}deg)`;
				},
			},
			trash1: {
				delay: 0,
				property: { frame: 100 },
				unit: { opacity: '' },
				easing: Bezier.linear,
				radius: 30,
				init() {
					this.c = trash1.current;
					this.duration = root.totalTime * 1000 + 1000;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay, easing } = this;
					const { frame } = property;
					const from = { frame };
					const to = { frame: 200 };
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
					const { radius } = this;
					const { frame } = this.property;
					const x = Math.cos((Math.PI / 180) * frame) * radius;
					const y = Math.sin((Math.PI / 180) * frame * 3) * radius;
					this.c.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${y * 0.1}deg)`;
				},
			},
			trash0: {
				delay: 0,
				property: { frame: 0 },
				unit: { opacity: '' },
				easing: Bezier.linear,
				radius: 50,
				init() {
					this.c = trash0.current;
					this.duration = root.totalTime * 1000 + 1000;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay, easing } = this;
					const { frame } = property;
					const from = { frame };
					const to = { frame: 200 };
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
					const { radius } = this;
					const { frame } = this.property;
					const x = Math.cos((Math.PI / 180) * frame) * radius;
					const y = Math.sin((Math.PI / 180) * frame * 2) * radius;
					this.c.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${y * 0.1}deg)`;
				},
			},
			bg: {
				delay: 0,
				property: { opacity: 0, left: -100 },
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
		if (!debug) this.tr.init();
	}

	in() {
		if (!debug) this.tr.in();
	}
}
