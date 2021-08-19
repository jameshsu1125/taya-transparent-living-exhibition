import Tweener, { Bezier } from 'lesca-object-tweener';
import Click from 'lesca-click';
import { ITEMS_SELECT } from '../Setting/config';

export default class Animation {
	constructor(props) {
		const { selectRef, titleRef, setRead, read, setStory, setState } = props;

		this.defaultRead = [...read];

		this.setRead = setRead;
		this.read = [...read];
		this.selectedIndex = 0;

		const root = this;

		this.tr = {
			init() {
				this.select.init();
				this.title.init();
			},
			in() {
				this.select.in();
			},
			out() {
				setStory(root.selectedIndex);
				setState('story');
				setRead(() => [...root.read]);
			},
			title: {
				duration: 1000,
				delay: 0,
				property: { opacity: 0 },
				unit: { opacity: '' },
				init() {
					this.c = titleRef.current;
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
			select: {
				opacity: 0,
				delay: 500,
				duration: 1000,
				init() {
					this.c = selectRef.current;
					this.tweener = new Tweener();
					this.tran();
				},
				in() {
					const { opacity, delay } = this;
					const from = { opacity };
					const to = { opacity: 1 };
					const easing = Bezier.easeInOutQuart;
					this.tweener
						.add({
							from,
							to,
							easing,
							delay,
							onUpdate: (p) => {
								this.opacity = p.opacity;
								this.tran();
							},
							onComplete: (p) => {
								this.opacity = p.opacity;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.opacity = this.opacity;
				},
			},
		};
		this.tr.init();
	}

	in() {
		this.tr.in();
	}

	titleIn() {
		this.tr.title.in();
	}

	reset() {
		this.read = [...this.defaultRead];
	}

	addEvent() {
		[...new Array(ITEMS_SELECT.length).keys()].forEach((e) => {
			Click.add(`#cover${e}`, () => {
				const readed = this.read[e];
				if (!readed) {
					this.read[e] = true;
					this.selectedIndex = e;
					[...new Array(ITEMS_SELECT.length).keys()].forEach((index) => {
						Click.remove(`#cover${index}`);
					});
					this.tr.out();
				}
			});
		});
	}
}
