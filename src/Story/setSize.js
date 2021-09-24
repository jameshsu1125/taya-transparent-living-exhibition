const { parseInt } = window;
let sizeTimer = 0;

export const SET_SIZE = (props) => {
	const { width, height, img } = props;

	let size = 1;

	const { innerWidth, innerHeight } = window;

	let scale = 1;
	if (innerHeight / innerWidth > 1) {
		scale = innerHeight / height;
	} else {
		scale = innerWidth / width;
	}

	img.current.style.transform = `scale(${scale})`;
	size = scale;

	const resize = () => {
		clearTimeout(sizeTimer);
		sizeTimer = setTimeout(() => {
			window.location.reload();
		}, 500);
	};

	window.addEventListener('resize', resize);
	// window.addEventListener('focus', resize);

	const destory = () => {
		window.removeEventListener('resize', resize);
		window.removeEventListener('focus', resize);
	};

	return [destory, size];
};

export const POSITION = (imageSize, offset) => {
	const { width, height, scale } = imageSize;
	const { from, to } = offset;
	const { innerWidth, innerHeight } = window;

	const getSize = {
		b() {
			const imgH = height * scale;
			const offsetY = (innerHeight - imgH) * 0.5;
			return offsetY;
		},
		t() {
			const imgH = height * scale;
			const offsetY = (innerHeight - imgH) * -0.5;
			return offsetY;
		},
		l() {
			const imgW = width * scale;
			const offsetX = (imgW - innerWidth) * 0.5;
			return offsetX;
		},
		r() {
			const imgW = width * scale;
			const offsetX = (imgW - innerWidth) * -0.5;
			return offsetX;
		},
	};
	const direct = { b: 1, l: -1, r: -1, t: -1 };

	Object.entries(from).forEach((e) => {
		const [key, value] = e;
		const type = typeof value;
		if (type === 'string') {
			const [query, distance] = value.split(' ').join('').split('-');
			const r = getSize[query]();
			const d = (distance ? parseInt(distance) : 0) * direct[query];
			from[key] = r + d;
		}
	});

	Object.entries(to).forEach((e) => {
		const [key, value] = e;
		const type = typeof value;
		if (type === 'string') {
			const [query, distance] = value.split(' ').join('').split('-');
			const r = getSize[query]();
			const d = (distance ? parseInt(distance) : 0) * direct[query];
			to[key] = r + d;
		}
	});

	return { from, to };
};

export default {};
