import Tweener, { Bezier } from 'lesca-object-tweener';
import QueryString from 'lesca-url-parameters';
import { POSITION } from '../setSize';

const { parseInt, innerWidth, innerHeight } = window;
const debug = QueryString.get('debug') === 'true';
const device = innerHeight / innerWidth > 1 ? 'mobile' : 'desktop';

export default class Animation2 {
	constructor(props, callback) {
		const { page, bg, labels, cloud, white, imageSize } = props;

		const beginDelay = 1000;
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
				this.white.init();
				this.labels.init();
				this.cloud.init();
			},
			in() {
				this.bg.in();
				this.white.in();
				this.labels.in();
				this.cloud.in();
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
						[...labels.current.children]
							.map((dom) => parseInt(dom.dataset.delay))
							.reduce((duration, delay) => duration + delay);
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, delay, easing } = this;
					const from = { 'background-position-x': this.property['background-position-x'] };
					const to = { 'background-position-x': -500 };
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
			white: {
				duration: 1000,
				delay: 0,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = white.current;
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
			bg: {
				delay: 0,
				property: { opacity: 0, top: 0, left: 0 },
				unit: { opacity: '' },
				offset: {
					mobile: { from: { left: -100, top: 0 }, to: { left: 100, top: 0 } },
					desktop: { from: { left: -200, top: 0 }, to: { left: 0, top: 0 } },
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
