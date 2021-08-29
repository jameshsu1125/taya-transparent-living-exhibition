import ImageOnload from 'lesca-image-onload';
import Tweener from 'lesca-object-tweener';
import { useEffect, useRef, useState } from 'react';
import './pump.less';
import Page0 from './pump/page0';
import Page1 from './pump/page1';
import Page2 from './pump/page2';
import Page3 from './pump/page3';

const Pump = (props) => {
	const {
		categroyName,
		setLoading,
		setStory,
		setState: setRootState,
		setAudioState,
		audioLoad,
	} = props;

	const container = useRef();
	const colorBackgroundRef = useRef();

	const [state, setState] = useState('loading');
	const [domReady, setDomReady] = useState(false);

	useEffect(() => {
		if (audioLoad !== false && domReady) {
			setTimeout(() => {
				setLoading(false);
				colorBackgroundRef.current.classList.add('fadein');
				setState('page0');
			}, 1000);
		}
	}, [audioLoad, domReady]);

	const fadeOut = () => {
		const dom = colorBackgroundRef.current;
		const from = { opacity: 1 };
		const to = { opacity: 0 };
		const duration = 1000;
		new Tweener({
			from,
			to,
			duration,
			onStart: () => {
				colorBackgroundRef.current.classList.remove('fadein');
				setRootState('storyEnd');
			},
			onUpdate: (e) => {
				dom.style.opacity = e.opacity;
			},
			onComplete: (e) => {
				dom.style.opacity = e.opacity;
				setStory(false);
				setRootState('back');
			},
		});
	};

	useEffect(() => {
		new ImageOnload(container.current, { hideBeforeLoaded: true }).then(() => {
			setDomReady(true);
			setAudioState('pump');
		});
	}, []);

	return (
		<div ref={container} className='Pump'>
			<div ref={colorBackgroundRef} className='color-background' />
			<Page3 {...{ state, setState, fadeOut }} />
			<Page2 {...{ state, setState }} />
			<Page1 {...{ state, setState }} />
			<Page0 {...{ state, setState, categroyName }} />
		</div>
	);
};
export default Pump;
