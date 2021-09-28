import { useEffect, useRef, useState } from 'react';
import Gtag from 'lesca-gtag';
import Click from 'lesca-click';
import Animation from './nav-animation';
import './nav.less';

const Nav = () => {
	const menuRef = useRef();
	const hamRef = useRef();
	const textRef = useRef();
	const contentRef = useRef();
	const animation = useRef();

	const [state, setState] = useState(false);

	useEffect(() => {
		animation.current = new Animation({ hamRef, textRef, contentRef });

		Click.add('#menu', () => setState((r) => !r));
		Click.add('#menu-offical', () => {
			setTimeout(() => window.open('https://www.taya.com.tw/'), 300);
			Gtag.event('結果頁', '了解大亞');
		});
		Click.add('#menu-fb', () => {
			setTimeout(() => window.open('https://www.facebook.com/TAIWANTAYA/'), 300);
			Gtag.event('結果頁', '大亞FB');
		});
	}, []);

	useEffect(() => {
		if (state) animation.current.open();
		else animation.current.close();
	}, [state]);

	return (
		<div className='Nav'>
			<div ref={contentRef} className='menu-content'>
				<div id='menu-offical'>大亞電線電纜 官方網站</div>
				<div id='menu-fb'>
					大亞電線電纜
					<span> Facebook</span>
				</div>
				<div className='logo' />
			</div>
			<div ref={menuRef} id='menu' className='menu'>
				<div ref={hamRef} className='ham'>
					{[...new Array(3).keys()].map((e) => (
						<div key={`han${e}`} />
					))}
				</div>
				<span ref={textRef}>關於大亞</span>
			</div>
		</div>
	);
};
export default Nav;
