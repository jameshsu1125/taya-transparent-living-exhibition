/* eslint-disable prefer-destructuring */
import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { hamRef, textRef, contentRef } = props;

		const offsetY = 7;
		const duration = 300;

		this.tr = {
			init() {
				this.a.init();
				this.c.init();
				this.b.init();
				this.textRef.init();
				this.contentRef.init();
			},
			open() {
				this.a.open();
				this.c.open();
				this.b.open();
				this.textRef.open();
				this.contentRef.in();
			},
			close() {
				this.a.close();
				this.c.close();
				this.b.close();
				this.textRef.close();
				this.contentRef.out();
			},
			contentRef: {
				duration: 500,
				delay: 0,
				property: { left: -100 },
				unit: { left: '%' },
				init() {
					this.c = contentRef.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { property, delay } = this;
					const { left } = property;
					const from = { left };
					const to = { left: 0 };
					this.tweener
						.add({
							from,
							to,
							delay,
							duration: this.duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.play();
				},
				out() {
					const { property, delay } = this;
					const { left } = property;
					const from = { left };
					const to = { left: -100 };
					this.tweener
						.add({
							from,
							to,
							delay,
							duration: this.duration,
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
			textRef: {
				delay: 0,
				property: { opacity: 1 },
				unit: { opacity: '' },
				init() {
					this.c = textRef.current;
					this.tweener = new Tweener();
					this.tran();
				},
				open() {
					const { property, delay } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 0 };

					const from2 = { opacity: 0 };
					const to2 = { opacity: 1 };

					this.tweener
						.add({
							from,
							to,
							delay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => {
								this.tran(e);
								this.c.innerText = '關閉選單';
							},
						})
						.add({
							from: from2,
							to: to2,
							delay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => {
								this.tran(e);
							},
						})
						.play();
				},
				close() {
					const { property, delay } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 0 };

					const from2 = { opacity: 0 };
					const to2 = { opacity: 1 };

					this.tweener
						.add({
							from,
							to,
							delay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => {
								this.tran(e);
								this.c.innerText = '關於大亞';
							},
						})
						.add({
							from: from2,
							to: to2,
							delay,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => {
								this.tran(e);
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
			b: {
				delay: 0,
				property: { opacity: 1 },
				unit: { opacity: '' },
				init() {
					this.c = hamRef.current.children[1];
					this.tweener = new Tweener();
					this.tran();
				},
				open() {
					const { property, delay } = this;
					const { opacity } = property;
					const from = { opacity };
					const to = { opacity: 0 };
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
				close() {
					const { property, delay } = this;
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
			c: {
				delay: 0,
				property: { y: offsetY, r: 0 },
				init() {
					this.c = hamRef.current.children[2];
					this.tweener = new Tweener();
				},
				open() {
					const { property } = this;
					const { y, r } = property;
					const from = { y };
					const to = { y: 0 };

					const fromR = { r };
					const toR = { r: -45 + 180 };
					this.tweener
						.add({
							from,
							to,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.add({
							from: fromR,
							to: toR,
							duration,
							easing: Bezier.easeInOutQuart,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.play();
				},
				close() {
					const { property } = this;
					const { y, r } = property;
					const from = { y };
					const to = { y: offsetY };

					const fromR = { r };
					const toR = { r: 0 };
					this.tweener
						.add({
							from: fromR,
							to: toR,
							duration,
							easing: Bezier.easeInOutQuart,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})
						.add({
							from,
							to,
							duration,
							onUpdate: (e) => this.tran(e),
							onComplete: (e) => this.tran(e),
						})

						.play();
				},
				tran(e) {
					this.property = { ...this.property, ...e };
					const { y, r } = this.property;
					this.c.style.transform = `translateY(${y}px) rotate(${r}deg)`;
				},
			},
			a: {
				delay: 0,
				property: { y: 0 - offsetY, r: 0 },
				init() {
					this.c = hamRef.current.children[0];
					this.tweener = new Tweener();
				},
				open() {
					const { property } = this;
					const { y, r } = property;
					const from = { y };
					const to = { y: 0 };

					const fromR = { r };
					const toR = { r: 45 - 180 };
					this.tweener
						.add({
							from,
							to,
							duration,
							onUpdate: (e) => this.tran(e),
						})
						.add({
							from: fromR,
							to: toR,
							duration,
							onUpdate: (e) => this.tran(e),
						})
						.play();
				},
				close() {
					const { property } = this;
					const { y, r } = property;
					const from = { y };
					const to = { y: 0 - offsetY };

					const fromR = { r };
					const toR = { r: 0 };
					this.tweener
						.add({
							from: fromR,
							to: toR,
							duration,
							onUpdate: (e) => this.tran(e),
						})
						.add({
							from,
							to,
							duration,
							onUpdate: (e) => this.tran(e),
						})
						.play();
				},
				tran(e) {
					this.property = { ...this.property, ...e };
					const { y, r } = this.property;
					this.c.style.transform = `translateY(${y}px) rotate(${r}deg)`;
				},
			},
		};

		this.tr.init();
	}

	open() {
		this.tr.open();
	}

	close() {
		this.tr.close();
	}
}
