import Tweener, { Bezier } from 'lesca-object-tweener';

export default class Animation {
	constructor(props) {
		const { locationChtName, locationEngName, date, line, setStartDate, setEndDate } = props;

		this.tr = {
			init() {
				this.locationCht.init();
				this.locationEng.init();
				this.date.init();
				this.line.init();
			},
			in() {
				this.locationCht.in();
				this.locationEng.in();
				this.date.in();
				this.line.in();
			},
			line: {
				width: 0,
				startDate: props.startDate,
				endDate: props.endDate,
				duration: 1500,
				delay: 2000,
				init() {
					this.c = line.current;
					this.tran();
				},
				in() {
					const { width, startDate, endDate, duration, delay } = this;
					const tweener = new Tweener();
					const from = { width, startDate, endDate };
					const to = { width: 30, startDate: 6, endDate: 31 };
					const easing = Bezier.easeInOutQuart;
					tweener
						.add({
							from,
							to,
							easing,
							duration,
							delay,
							onUpdate: (e) => {
								this.width = e.width;
								this.startDate = e.startDate;
								this.endDate = e.endDate;
								this.tran();
							},
							onComplete: (e) => {
								this.width = e.width;
								this.startDate = e.startDate;
								this.endDate = e.endDate;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.width = `${this.width}%`;
					setStartDate(Math.floor(this.startDate));
					setEndDate(Math.floor(this.endDate));
				},
			},
			locationCht: {
				opacity: 0,
				top: 50,
				duration: 1000,
				delay: 1000,
				init() {
					this.c = locationChtName.current;
					this.tran();
				},
				in() {
					const { opacity, top, duration, delay } = this;
					const tweener = new Tweener();
					const from = { opacity, top };
					const to = { opacity: 1, top: 0 };
					const easing = Bezier.easeInOutQuart;
					tweener
						.add({
							from,
							to,
							easing,
							duration,
							delay,
							onUpdate: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
							onComplete: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.opacity = this.opacity;
					this.c.style['padding-top'] = `${this.top}px`;
				},
			},
			locationEng: {
				opacity: 0,
				top: 50,
				duration: 1000,
				delay: 1000,
				init() {
					this.c = locationEngName.current;
					this.tran();
				},
				in() {
					const { opacity, top, duration, delay } = this;
					const tweener = new Tweener();
					const from = { opacity, top };
					const to = { opacity: 1, top: 0 };
					const easing = Bezier.easeInOutQuart;
					tweener
						.add({
							from,
							to,
							easing,
							duration,
							delay,
							onUpdate: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
							onComplete: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.opacity = this.opacity;
					this.c.style['padding-top'] = `${this.top}px`;
				},
			},
			date: {
				opacity: 0,
				top: 50,
				duration: 1000,
				delay: 1000,
				init() {
					this.c = date.current;
					this.tran();
				},
				in() {
					const { opacity, top, duration, delay } = this;
					const tweener = new Tweener();
					const from = { opacity, top };
					const to = { opacity: 1, top: 0 };
					const easing = Bezier.easeInOutQuart;
					tweener
						.add({
							from,
							to,
							easing,
							duration,
							delay,
							onUpdate: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
							onComplete: (e) => {
								this.opacity = e.opacity;
								this.top = e.top;
								this.tran();
							},
						})
						.play();
				},
				tran() {
					this.c.style.opacity = this.opacity;
					this.c.style['padding-top'] = `${this.top}px`;
				},
			},
		};
		this.tr.init();
	}

	in() {
		this.tr.in();
	}
}
