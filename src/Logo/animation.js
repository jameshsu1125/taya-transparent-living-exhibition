export default class Animation {
	constructor(props) {
		const { logo, label } = props;

		this.tr = {
			init() {
				this.logo.init();
				this.label.init();
			},
			in() {},
			logo: {
				init() {
					this.c = logo.current;
				},
			},
			label: {
				init() {
					this.c = label.current;
				},
			},
		};
	}

	in() {
		this.tr.in();
	}
}
