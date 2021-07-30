/* eslint-disable no-new */
import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(container, callback) {
		this.container = container.current;
		this.process = [...this.container.children].map((dom, index) => ({
			dom,
			index,
			enable: false,
		}));
		this.callback = callback;
		this.delay = 500;
		this.isqueue = false;
		this.loadedIndex = 0;
		this.isEndQueue = false;

		this.data = [];
	}

	fadeout() {
		const from = { top: 280 };
		const to = { top: 0 };
		const duration = 1000;
		const easing = Bezier.easeInOutQuart;

		const tweener = new Tweener();
		tweener
			.add({
				from,
				to,
				duration,
				easing,
				onUpdate: (e) => {
					this.container.style.height = `${e.top}px`;
				},
				onComplete: (e) => {
					this.container.style.height = `${e.top}px`;
					this.callback();
				},
			})
			.play();
	}

	playQueue() {
		if (this.isqueue) return;
		this.isqueue = true;
		const [dom] = this.data;

		dom?.classList.add('on');

		setTimeout(() => {
			this.isqueue = false;
		}, this.delay);

		if (this.loadedIndex === 5 && this.data.length === 0 && !this.isEndQueue) {
			this.isEndQueue = true;
			this.fadeout();
		}

		this.data.shift();
	}

	update(p) {
		const index = Math.floor(p / (100 / this.container.children.length));
		this.process.forEach((e) => {
			const { dom, enable } = e;
			if (index >= e.index && !enable) {
				e.enable = true;
				this.loadedIndex += 1;
				this.data.push(dom);
			}
		});

		if (this.data.length !== 0 && !this.queue) {
			this.queued = true;
			this.queue = setInterval(() => this.playQueue());
		}
	}
}
