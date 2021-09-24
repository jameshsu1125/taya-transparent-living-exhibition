import { useEffect, useState } from 'react';
import './label.less';

const device = window.innerHeight / window.innerWidth > 1 ? 'mobile' : 'desktop';

const defaultPosition = { x: 0, y: 0 };

const Label = (props) => {
	const { data } = props;
	const { text, delay } = data;

	const [position, setPosition] = useState(defaultPosition);

	useEffect(() => {
		const p = data[device];
		if (p) {
			setPosition((d) => ({ ...d, ...p }));
		}
		return () => {};
	}, []);

	return (
		<div
			data-delay={delay}
			className='Label'
			style={{ top: `${position.y}px`, left: `${position.x}px` }}
		>
			{text}
		</div>
	);
};
export default Label;
