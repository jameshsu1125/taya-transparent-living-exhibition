import { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ITEMS_SELECT } from '../Setting/config';
import Carousel from './carousel';
import Animation from './animation';
import './main.less';

const settings = {
	dots: true,
	speed: 200,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	initialSlide: 0,
	centerMode: true,
	centerPadding: '150px',
	infinite: false,
};

const Share = (props) => {
	const { shareDialog, setShareDialog } = props;

	const container = useRef();
	const background = useRef();
	const content = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ container, background, content }, setShareDialog);
	}, []);

	useEffect(() => {
		if (shareDialog === 'open') {
			animation.current.open();
		} else {
			animation.current.close();
		}
	}, [shareDialog]);

	return (
		<div ref={container} className='Share'>
			<div ref={background} className='share-backgrouund' />
			<div ref={content} className='content'>
				<div className='title'>分享你最喜歡的一則故事</div>
				<div className='slide-container'>
					<Slider {...settings}>
						{ITEMS_SELECT.map((data, index) => (
							<Carousel key={data.title} data={data} index={index} />
						))}
					</Slider>
				</div>
				<div className='handle' />
			</div>
		</div>
	);
};
export default Share;
