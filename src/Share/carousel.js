import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import { useEffect, useRef } from 'react';
import './main.less';

const Carousel = (props) => {
	const { data, index } = props;
	const { title, category, subtitle } = data;

	const dark = useRef();

	useEffect(() => {
		setTimeout(() => {
			Click.add(`#share${index}`, () => {
				dark.current.classList.add('on');
				Gtag.event('分享頁', category);
				setTimeout(() => {
					const url =
						window.location.hostname === 'localhost'
							? 'https://localhost:8080/'
							: 'https://jameshsu1125.github.io/taya-transparent-living-exhibition/';
					Facebook.share({
						url,
						hashtag: '透明生活展',
						redirect_uri: url,
					});
				}, 500);
			});
		}, 500);
	}, []);

	return (
		<div className='slider'>
			<div id={`share${index}`} className='cover'>
				<div className='title'>
					{title}
					<span>{subtitle}</span>
				</div>
				<div ref={dark} className='dark' />
				<div className='headline'>{category}</div>
			</div>
		</div>
	);
};
export default Carousel;
