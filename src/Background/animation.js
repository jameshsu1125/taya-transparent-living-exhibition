import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { container, glow, glowShow } = props;
		const duration = 24000 * 2;

		this.tr = {
			init() {
				this.container.init();
				this.glow.init();
				this.glowShow.init();
			},
			in() {
				this.container.in();
				this.glow.in();
				this.glowShow.in();
			},
			glowShow: {
				delay: 0,
				property: { opacity: 1, rotate: 0 },
				unit: { opacity: '', rotate: 'deg' },
				easing: Bezier.linear,
				blank: 0.5,
				init() {
					this.c = glowShow.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { property, delay, easing } = this;
					const { opacity, rotate } = property;
					const from = { opacity, rotate };
					const to = { opacity: 1, rotate: 30 };
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
						if (key === 'rotate') return `transform:rotate(${value}${unit});`;
						if (key === 'opacity') return `opacity:${value - this.blank - Math.random() * 0.1};`;
						return `${key}:${value}${unit};`;
					});

					this.c.style.cssText = cssText.join('');
				},
			},
			glow: {
				delay: 0,
				property: { opacity: 1, rotate: -30 },
				unit: { opacity: '', rotate: 'deg' },
				easing: Bezier.linear,
				blank: 0,
				init() {
					this.c = glow.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { property, delay, easing } = this;
					const { opacity, rotate } = property;
					const from = { opacity, rotate };
					const to = { opacity: 1, rotate: 60 };
					this.tweener
						.add({
							from,
							to,
							delay,
							easing,
							duration: duration / 2,
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
						if (key === 'rotate') return `transform:rotate(${value}${unit});`;
						if (key === 'opacity') return `opacity:${value - this.blank - Math.random() * 0.1};`;
						return `${key}:${value}${unit};`;
					});

					this.c.style.cssText = cssText.join('');
				},
			},
			container: {
				delay: 0,
				property: { x: 20, y: -50 },
				unit: { opacity: '' },
				easing: Bezier.linear,
				init() {
					this.c = container.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { property, delay, easing } = this;
					const from = property;
					const to = { x: 980, y: -220 };
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
					const { x, y } = this.property;
					this.c.style['background-position'] = `calc(50% + ${x}px) calc(50% - ${y}px)`;
				},
			},
		};

		this.tr.init();
	}

	in() {
		this.tr.in();
	}
}
