import { useEffect, useRef, useState } from 'react';
import QueryString from 'lesca-url-parameters';
import CommingSoon from '../CommingSoon/main';
import Animation from './animation';
import TayaLogo from './tayalogo';
import Instruct from '../Components/instruct';
import './main.less';

const isExhibition = QueryString.get('e');

const Logo = (props) => {
	const { commingSoon, state, setLogo } = props;
	const logo = useRef();
	const label = useRef();
	const content = useRef();
	const animation = useRef();
	const tayaLogo = useRef();
	const [instruct, setInstruct] = useState(isExhibition === '1');

	useEffect(() => {
		animation.current = new Animation({ content, logo, label });
	}, []);

	useEffect(() => {
		if (state === 'intro' || state === 'target') {
			animation.current.out(() => setLogo(false));
			tayaLogo.current.out();
		}
	}, [state]);

	useEffect(() => {
		if (commingSoon) animation.current.in();
	}, [commingSoon]);

	return (
		<div className='Logo'>
			<div ref={content} className='content'>
				<div ref={logo} className='logo' />
				<div ref={label} className='label' />
			</div>
			{commingSoon && <div className='description'>即將開展</div>}
			{commingSoon && <CommingSoon />}
			<TayaLogo ref={tayaLogo} commingSoon={commingSoon} />
			{instruct && (
				<Instruct setInstruct={setInstruct}>
					<div>
						觀展時
						<br />
						請勿推擠展櫃 小心安全
					</div>
				</Instruct>
			)}
		</div>
	);
};

Logo.defaultProps = {
	commingSoon: false,
};

export default Logo;
