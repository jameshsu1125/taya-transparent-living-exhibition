import { useEffect, useRef } from 'react';
import Tweener from 'lesca-object-tweener';

const Carousel = (props) => {
	const { data, readed, updateSelected } = props;
	const { title, subtitle, index } = data;

	const lighter = readed[index];

	const lighterRef = useRef();
	const headline = useRef();

	useEffect(() => {
		if (updateSelected) {
			let opacity;
			if (lighter) opacity = 0.7;
			else opacity = 0;

			const from = { opacity: 1 - opacity };
			const to = { opacity };
			const duration = 1000;

			new Tweener({
				from,
				to,
				duration,
				onUpdate: (e) => {
					lighterRef.current.style.opacity = e.opacity;
					headline.current.style.opacity = 1 - e.opacity;
				},
			}).play();
		}
	}, [lighter, updateSelected]);

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
