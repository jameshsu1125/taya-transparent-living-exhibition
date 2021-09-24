import Tweener, { Bezier } from 'lesca-object-tweener';
import QueryString from 'lesca-url-parameters';
import { POSITION } from '../setSize';

const { parseInt, innerWidth, innerHeight } = window;
const debug = QueryString.get('debug') === 'true';
const device = innerHeight / innerWidth > 1 ? 'mobile' : 'desktop';

export default class Animation1 {
	constructor(props, callback) {
		const { page, bg, labels, imageSize } = props;

		const beginDelay = 0;
		const fadeOutDelay = 0;
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
				const duration = 1000;
				if (!dom) return;
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
				property: { opacity: 0, top: 0, left: 0 },
				unit: { opacity: '' },
				offset: {
					mobile: { from: { left: 30, top: 0 }, to: { left: -30, top: 0 } },
					desktop: { from: { left: 0, top: 140 }, to: { left: 0, top: -180 } },
				},
				init() {
					this.c = bg.current;
					this.duration = root.totalTime * 1000 + 1000;
					this.tran();
					this.offset = POSITION(imageSize, this.offset[device]);
					this.tranOffset(this.offset.from);
				},
				in() {
					this.tweenOpacity();
					this.tweenOffset();
				},
				tweenOffset() {
					const { duration, delay, offset } = this;
					const { from, to } = offset;
					const easing = Bezier.linear;

					new Tweener({
						from,
						to,
						delay,
						duration,
						easing,
						onUpdate: (e) => this.tranOffset(e),
						onComplete: (e) => this.tranOffset(e),
					});
				},
				tweenOpacity() {
					const { property, delay } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 1 };
					new Tweener({
						from,
						to,
						delay,
						duration: 3000,
						onUpdate: (e) => this.tran(e),
						onComplete: (e) => this.tran(e),
					});
				},
				tran(data = this.property) {
					this.property = { ...this.property, ...data };
					this.c.style.opacity = this.property.opacity;
				},
				tranOffset(data = this.property) {
					this.property = { ...this.property, ...data };
					const { left, top } = this.property;
					this.c.style['margin-top'] = `${top}px`;
					this.c.style['margin-left'] = `${left}px`;
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
