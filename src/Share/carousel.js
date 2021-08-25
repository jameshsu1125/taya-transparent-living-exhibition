import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import { useEffect, useRef } from 'react';
import './main.less';

const Carousel = (props) => {
	const { data, index } = props;
	const { title, category } = data;

	const dark = useRef();

	useEffect(() => {
		Click.add(`#share${index}`, () => {
			dark.current.classList.add('on');
			const url =
				window.location.hostname === 'localhost'
					? 'https://localhost:8080/'
					: 'https://jameshsu1125.github.io/taya-transparent-living-exhibition/';
			Facebook.share({
				url,
				hashtag: '透明生活展',
				redirect_uri: `${url}?state=result`,
			});
		});
	}, []);

	return (
		<div className='slider'>
			<div id={`share${index}`} className='cover'>
				<div className='title'>{title}</div>
				<div ref={dark} className='dark' />
			</div>
			<div className='headline'>{category}</div>
		</div>
	);
};
export default Carousel;
