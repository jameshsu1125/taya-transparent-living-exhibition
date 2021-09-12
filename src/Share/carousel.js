/* eslint-disable camelcase */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import { useEffect, useRef } from 'react';
import { TARGETINDEX, WEBSITE_URL } from '../Setting/config';
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

				const [targetName] = Object.entries(TARGETINDEX).filter((e) => {
					const [, value] = e;
					if (value === index) return true;
					return false;
				});
				const [name] = targetName;

				setTimeout(() => {
					const url =
						window.location.hostname === 'localhost'
							? `https://localhost:8080/${name}.html`
							: `${WEBSITE_URL}${name}.html`;

					const redirect_uri =
						window.location.hostname === 'localhost'
							? 'https://localhost:8080/?state=result'
							: `${WEBSITE_URL}?state=result`;

					Facebook.share({
						url,
						hashtag: '透明生活展',
						redirect_uri,
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
