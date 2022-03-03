import Tweener, { Bezier } from 'lesca-object-tweener';

const { innerHeight, innerWidth } = window;
const device = innerHeight / innerWidth > 1 ? 'mobile' : 'desktop';

export default class Animation {
	constructor(props) {
		const { background, logo, logoLabel, buttons, headline, container } = props;

		this.tr = {
			init() {
				this.background.init();
				this.logo.init();
				this.logoLabel.init();
				this.buttons.init();
				this.headline.init();
			},
			in() {
				this.background.in();
				this.logo.in();
				this.logoLabel.in();
				this.buttons.in();
				this.headline.in();
			},
			out(cb = () => {}) {
				const target = container.current;
				const from = { opacity: 1 };
				const to = { opacity: 0 };
				const duration = 800;
				new Tweener({
					from,
					to,
					duration,
					onUpdate: (data) => {
						target.style.opacity = data.opacity;
					},
					onComplete: (data) => {
						target.style.opacity = data.opacity;
						cb();
					},
				}).play();
			},
			headline: {
				duration: 1200,
				delay: 2200,
				property: { opacity: 0, scale: 0.7 },
				init() {
					this.c = headline.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity, scale } = property;
					const from = { opacity, scale };
					const radio = window.innerHeight / window.innerWidth;
					const nScale = device ? radio - 0.5 : window.innerHeight / 1131;
					const to = { opacity: 1, scale: nScale };
					const easing = Bezier.easeOutBack;
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
					this.c.style.opacity = this.property.opacity;
					this.c.style.transform = `scale(${this.property.scale})`;
				},
			},
			buttons: {
				duration: 500,
				eachDuration: 200,
				delay: 1000,
				init() {
					this.c = buttons.current;
					this.property = [...this.c.children].map(() => ({ opacity: 0 }));
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;

					[...this.c.children].forEach((e, index) => {
						const { opacity } = property[index];
						const from = { opacity };
						const to = { opacity: 1 };
						const easing = Bezier.easeInOutQuart;
						new Tweener({
							from,
							to,
							easing,
							delay: delay + this.eachDuration * index,
							duration,
							onUpdate: (data) => this.tranEach(e, data, index),
							onComplete: (data) => this.tranEach(e, data, index),
						}).play();
					});
				},
				tranEach(dom, data, index) {
					const target = dom;
					const { opacity } = data;
					this.property[index] = data;
					target.style.opacity = opacity;
				},
				tran(e = this.property) {
					[...this.c.children].forEach((dom, index) => {
						const p = e[index];
						this.property[index] = p;
						const target = dom;
						target.style.opacity = p.opacity;
					});
				},
			},
			logo: {
				duration: 1500,
				delay: 200,
				property: { opacity: 0, 'margin-top': 50 },
				unit: { opacity: '', 'margin-top': 'px' },
				init() {
					this.c = logo.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity } = property;
					const from = { opacity, 'margin-top': property['margin-top'] };
					const to = { opacity: 1, 'margin-top': 0 };
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							delay,
							duration,
							easing,
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
			logoLabel: {
				duration: 1500,
				delay: 500,
				property: { opacity: 0, 'margin-top': 50 },
				unit: { opacity: '', 'margin-top': 'px' },
				init() {
					this.c = logoLabel.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { duration, property, delay } = this;
					const { opacity } = property;
					const from = { opacity, 'margin-top': property['margin-top'] };
					const to = { opacity: 1, 'margin-top': 0 };
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							delay,
							duration,
							easing,
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
			background: {
				duration: 1000,
				delay: 0,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = background.current;
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
		};

		this.tr.init();
	}

	in() {
		this.tr.in();
	}

	out(cb) {
		this.tr.out(cb);
	}
}
