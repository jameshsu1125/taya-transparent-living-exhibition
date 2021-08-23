import { useEffect, useRef } from 'react';
import Animation from './animation';

import './main.less';

const Background = (props) => {
	const { commingSoon } = props;

	const container = useRef();
	const glow = useRef();
	const glowShow = useRef();
	const animation = useRef();

	useEffect(() => {
		if (!commingSoon) {
			animation.current = new Animation({ container, glow, glowShow });
			animation.current.in();
		} else {
			animation.current?.stop();
		}
	}, [commingSoon]);

	return (
		<div ref={container} className='Background'>
			{!commingSoon && <div ref={glow} className='glow' />}
			{!commingSoon && <div ref={glowShow} className='glow-slow' />}
			{commingSoon && <div className='darken' />}
		</div>
	);
};

Background.defaultProps = {
	commingSoon: false,
};

export default Background;
