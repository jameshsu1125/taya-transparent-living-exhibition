import { useEffect, useRef } from 'react';
import Animation from './animation';

import './main.less';

const Background = (props) => {
	const { commingSoon } = props;

	const container = useRef();
	const glow = useRef();
	const glow2 = useRef();
	const glow3 = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ container, glow, glow2, glow3 });
		animation.current.in();
	}, []);

	return (
		<div ref={container} className='Background'>
			<div ref={glow} className='glow' />
			<div ref={glow2} className='glow2' />
			<div ref={glow3} className='glow3' />
			{commingSoon && <div className='darken' />}
		</div>
	);
};

Background.defaultProps = {
	commingSoon: false,
};

export default Background;
