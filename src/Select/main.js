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
	const { state, setStory, read, setRead, setState } = props;

	const animation = useRef();

	const selectRef = useRef();
	const titleRef = useRef();
	const sliderRef = useRef();
	const isFadein = useRef();

	const [updateSelected, setUpdateSelected] = useState(true);

	useEffect(() => {
		animation.current = new Animation({ selectRef, titleRef, setRead, read, setStory, setState });
	}, []);

	useEffect(() => {
		if (state === 'intro') {
			selectRef.current.style.display = 'block';
			animation.current.in();
		} else if (state === 'back') {
			setUpdateSelected(true);
		} else if (state === 'select') {
			setUpdateSelected(false);
			animation.current.addEvent();
		} else if (state === 'reset') {
			animation.current.reset();
			setUpdateSelected(true);
		} else if (state === 'story') {
			selectRef.current.style.display = 'none';
		} else if (state === 'storyEnd') {
			selectRef.current.style.opacity = 0;
			selectRef.current.style.display = 'block';
			setTimeout(() => {
				selectRef.current.style.opacity = 1;
			}, 50);
		}
	}, [state]);

	useImperativeHandle(ref, () => ({
		fadein() {
			if (isFadein.current) return;
			isFadein.current = true;

			setUpdateSelected(false);
			sliderRef.current.slickNext();
			animation.current.addEvent();
			animation.current.titleIn();
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
