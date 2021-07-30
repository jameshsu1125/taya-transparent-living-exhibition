import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ITEMS_SELECT } from '../Setting/config';
import Animation from './animation';
import Carousel from './carousel';
import './main.less';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	initialSlide: 0,
};

const readed = [true, false, true, true, true];

const Select = forwardRef((props, ref) => {
	const { state, setStore } = props;

	const animation = useRef();

	const selectRef = useRef();
	const titleRef = useRef();
	const sliderRef = useRef();

	const [read, setRead] = useState(readed);

	useEffect(() => {
		animation.current = new Animation({ selectRef, titleRef, setRead, read, setStore });
	}, []);

	useEffect(() => {
		if (state === 'intro') {
			selectRef.current.style.display = 'block';
			animation.current.in();
		}
	}, [state]);

	useImperativeHandle(ref, () => ({
		fadein() {
			sliderRef.current.slickNext();
			animation.current.addEvent();
		},
	}));

	return (
		<div ref={selectRef} className='Select'>
			<div ref={titleRef} className='title'>
				選擇故事
			</div>
			<div className='slider-container'>
				<Slider ref={sliderRef} {...settings}>
					{ITEMS_SELECT.map((data, index) => (
						<Carousel key={data.title} data={{ ...data, index }} readed={read} />
					))}
				</Slider>
			</div>
		</div>
	);
});

export default Select;
