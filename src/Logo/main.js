import { useEffect, useRef } from 'react';
import Animation from './animation';
import './main.less';

const Logo = (props) => {
	const { commingSoon } = props;
	const logo = useRef();
	const label = useRef();

	useEffect(() => {}, []);

	useEffect(() => {
		if (commingSoon) {
			const animation = new Animation({ logo, label });
			animation.in();
		}
	}, [commingSoon]);

	return (
		<div className='Logo'>
			<div ref={logo} className='logo' />
			<div ref={label} className='label' />
			{commingSoon && <div className='description'>即將開展</div>}
		</div>
	);
};
Logo.defaultProps = {
	commingSoon: false,
};
export default Logo;
