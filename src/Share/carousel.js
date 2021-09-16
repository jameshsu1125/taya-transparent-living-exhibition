/* eslint-disable camelcase */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Gtag from 'lesca-gtag';
import QueryString from 'lesca-url-parameters';
import { useEffect, useRef } from 'react';
import { TARGETINDEX, HASHTAG } from '../Setting/config';
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
					const root = QueryString.root();
					const url = `${root}${name}.html`;
					const redirect_uri = `${root}?state=result`;

					Facebook.share({
						url,
						hashtag: HASHTAG,
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
