import Tweener, { Bezier } from 'lesca-object-tweener';
import Click from 'lesca-click';
import { ITEMS_SELECT } from '../Setting/config';

export default class Animation {
	constructor(props) {
		const { selectRef, setRead, read, setStore } = props;

		this.setRead = setRead;
		this.read = read;
		this.selectedIndex = 0;

		const root = this;

		this.tr = {
			init() {
				this.select.init();
			},
			in() {
				this.select.in();
			},
			out() {
				setStore(root.selectedIndex);
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

	addEvent() {
		[...new Array(ITEMS_SELECT.length).keys()].forEach((e) => {
			Click.add(`#cover${e}`, () => {
				const readed = this.read[e];
				if (!readed) {
					this.read[e] = true;
					this.setRead(this.read);
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
