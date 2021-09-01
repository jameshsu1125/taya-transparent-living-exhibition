import { useEffect, useRef } from 'react';
import Animation from './tayaAnimation';

import './tayalogo.less';

const TayaLogo = (props) => {
	const { commingSoon } = props;

	const logo = useRef();
	const textRef = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ logo, textRef });
	}, []);

	useEffect(() => {
		if (commingSoon) {
			animation.current.in(3500);
		}
	}, [commingSoon]);

	return (
		<div ref={logo} className='TayaLogo'>
			<div className='mark' />
			<div ref={textRef} className='text' />
		</div>
	);
};
export default TayaLogo;
