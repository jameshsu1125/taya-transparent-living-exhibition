import { useEffect, useRef } from 'react';
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
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
					? 'https://localhost:8080/?state=result'
					: 'https://jameshsu1125.github.io/taya-transparent-living-exhibition/?state=result';
			Facebook.share({
				url,
				hashtag: encodeURIComponent('透明生活展'),
				redirect_uri: url,
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
