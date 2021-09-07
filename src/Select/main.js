import Gtag from 'lesca-gtag';
import UserAgnet from 'lesca-user-agent';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ITEMS_SELECT } from '../Setting/config';
import Animation from './animation';
import Arrow from './arrow';
import Carousel from './carousel';
import './main.less';
import Nav from './nav';

const device = UserAgnet.get() === 'mobile';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	initialSlide: -1,
};

const Select = forwardRef((props, ref) => {
	const { state, setStory, read, setRead, setState, defaultReadData } = props;

	const animation = useRef();
	const selectRef = useRef();
	const titleRef = useRef();
	const sliderRef = useRef();
	const isFadein = useRef();

	const [updateSelected, setUpdateSelected] = useState(true);

	useEffect(() => {
		animation.current = new Animation({
			selectRef,
			titleRef,
			setRead,
			read,
			setStory,
			setState,
			defaultReadData,
		});
	}, []);

	if (!device) {
		settings.infinite = true;
		settings.initialSlide = 0;
		settings.slidesToShow = 3;
		settings.slidesToScroll = 1;
		settings.arrows = true;
		settings.nextArrow = <Arrow direct='next' click={() => sliderRef.current.slickNext()} />;
		settings.prevArrow = <Arrow direct='prev' click={() => sliderRef.current.slickPrev()} />;
	}

	useEffect(() => {
		if (state === 'intro') {
			selectRef.current.style.display = 'block';
			animation.current.in();
			setUpdateSelected(true);
		} else if (state === 'back') {
			setUpdateSelected(true);
		} else if (state === 'select') {
			setUpdateSelected(false);
			Gtag.pv('選擇頁');
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
			}, 100);
		}
	}, [state]);

	useImperativeHandle(ref, () => ({
		fadein() {
			if (isFadein.current) return;
			isFadein.current = true;

			setUpdateSelected(false);
			if (device) sliderRef.current.slickNext();
			animation.current.addEvent();
			animation.current.titleIn();
		},
	}));

	return (
		<div ref={selectRef} className='Select'>
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
			<div ref={titleRef} className='title'>
				選擇故事
			</div>
			{!device && <Nav />}
		</div>
	);
});

export default Select;
