import { useEffect, useRef } from 'react';
import Animation from './animation';
import CommingSoon from '../CommingSoon/main';
import './main.less';

const Logo = (props) => {
	const { commingSoon, state, setLogo } = props;
	const logo = useRef();
	const label = useRef();
	const content = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ content, logo, label });
	}, []);

	useEffect(() => {
		if (state === 'intro') {
			animation.current.out(() => {
				setLogo(false);
			});
		}
	}, [state]);

	useEffect(() => {
		if (commingSoon) {
			animation.current.in();
		}
	}, [commingSoon]);

	return (
		<div className='Logo'>
			<div ref={content} className='content'>
				<div ref={logo} className='logo' />
				<div ref={label} className='label' />
			</div>
			{commingSoon && <div className='description'>即將開展</div>}
			{commingSoon && <CommingSoon />}
		</div>
	);
};

Logo.defaultProps = {
	commingSoon: false,
};

export default Logo;
