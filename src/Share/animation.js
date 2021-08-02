import Tweener from 'lesca-object-tweener';
import Click from 'lesca-click';

export default class Animation {
	constructor(props, setShareDialog) {
		const { container, background, content } = props;

		this.tr = {
			init() {
				this.background.init();
				this.content.init();
			},
			open() {
				container.current.style.display = 'block';
				this.background.open();
				this.content.open();
			},
			close() {
				this.background.close();
				this.content.close();
			},
			content: {
				duration: 600,
				delay: 0,
				property: { bottom: 0 },
				unit: { bottom: 'px' },
				init() {
					this.c = content.current;
					this.tweener = new Tweener();
					this.tran();
				},
				open() {
					const { duration, property, delay } = this;
					const { bottom } = property;
					const from = { bottom };
					const to = { bottom: 0 };
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
					const { duration, property, delay } = this;
					const { bottom } = property;
					const from = { bottom };
					const to = { bottom: -1030 };
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
			background: {
				duration: 500,
				delay: 0,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = background.current;
					this.tweener = new Tweener();
					this.tran();
				},
				open() {
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
							onComplete: (e) => {
								this.tran(e);
								Click.add('.share-backgrouund', () => {
									Click.remove('.share-backgrouund');
									setShareDialog('close');
								});
							},
						})
						.play();
				},
				close() {
					const { duration, property, delay } = this;
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
							onComplete: (e) => {
								this.tran(e);
								container.current.style.display = 'none';
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
