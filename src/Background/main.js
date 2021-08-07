import { useEffect, useRef } from 'react';
import Animation from './animation';

import './main.less';

const Background = (props) => {
	const { commingSoon } = props;

	const container = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ container });
		animation.current.in();
	}, []);

	return (
		<div ref={container} className='Background'>
			{commingSoon && <div className='darken' />}
		</div>
	);
};

Background.defaultProps = {
	commingSoon: false,
};

export default Background;
