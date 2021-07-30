import { useEffect, useRef } from 'react';

const Carousel = (props) => {
	const { data, readed } = props;
	const { title, subtitle, index } = data;

	const lighter = readed[index];

	const lighterRef = useRef();
	const headline = useRef();

	useEffect(() => {
		let opacity;
		if (lighter) opacity = 0.7;
		else opacity = 0;

		lighterRef.current.style.opacity = opacity;
		headline.current.style.opacity = 1 - opacity;
	}, [lighter]);

	return (
		<div className='slider-slick'>
			<div id={`cover${index}`} className={`slick-image cover${index}`}>
				<div ref={lighterRef} />
			</div>
			<div ref={headline} className='slick-headline'>
				<div className='title'>{title}</div>
				<div className='subtitle'>{subtitle}</div>
			</div>
		</div>
	);
};
export default Carousel;
