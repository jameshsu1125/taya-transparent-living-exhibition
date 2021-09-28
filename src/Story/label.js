import { useEffect, useState } from 'react';
import './label.less';

const device = window.innerHeight / window.innerWidth > 1 ? 'mobile' : 'desktop';

const defaultPosition = { x: 0, y: 0 };

const Label = (props) => {
	const { data, lastPage } = props;
	const { text, delay } = data;

	const [position, setPosition] = useState(defaultPosition);

	useEffect(() => {
		const isWidth1000 = window.innerWidth >= 751 ? 'desktop' : 'mobile';
		const m = lastPage ? isWidth1000 : device;
		const p = data[m];

		if (lastPage && window.innerWidth < 1000) p.y -= 25;
		if (lastPage && window.innerWidth > 750) p.size = '18px';
		if (p) setPosition((d) => ({ ...d, ...p }));
	}, []);

	return (
		<div
			data-delay={delay}
			className='Label'
			style={{ top: `${position.y}px`, left: `${position.x}px`, fontSize: position.size }}
		>
			{text}
		</div>
	);
};
export default Label;
