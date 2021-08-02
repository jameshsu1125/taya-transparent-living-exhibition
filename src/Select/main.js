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

const Select = forwardRef((props, ref) => {
	const { state, setStory, read, setRead } = props;

	const animation = useRef();

	const selectRef = useRef();
	const titleRef = useRef();
	const sliderRef = useRef();
	const isFadein = useRef();

	const [updateSelected, setUpdateSelected] = useState(true);

	useEffect(() => {
		animation.current = new Animation({ selectRef, titleRef, setRead, read, setStory });
	}, []);

	useEffect(() => {
		if (state === 'intro') {
			selectRef.current.style.display = 'block';
			animation.current.in();
		} else if (state === 'back') {
			setUpdateSelected(true);
		}
	}, [state]);

	useImperativeHandle(ref, () => ({
		fadein() {
			if (isFadein.current) return;
			isFadein.current = true;

			setUpdateSelected(false);
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
						<Carousel
							key={data.title}
							data={{ ...data, index }}
							readed={read}
							updateSelected={updateSelected}
						/>
					))}
				</Slider>
			</div>
		</div>
	);
});

export default Select;
