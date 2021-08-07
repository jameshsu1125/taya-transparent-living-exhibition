import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { container } = props;
		this.tr = {
			init() {
				this.container.init();
			},
			in() {
				this.container.in();
			},
			container: {
				duration: 24000 * 3,
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
					const { duration, property, delay, easing } = this;
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
