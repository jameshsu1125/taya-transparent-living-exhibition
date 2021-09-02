import Tweener from 'lesca-object-tweener';
import { useEffect, useRef, useState } from 'react';
import ImageOnload from 'lesca-image-onload';
import Page0 from './motorcycle/page0';
import Page1 from './motorcycle/page1';
import Page2 from './motorcycle/page2';
import Page3 from './motorcycle/page3';
import './motorcycle.less';

const { parseInt } = window;

const Motorcycle = (props) => {
	const {
		categroyName,
		setLoading,
		setStory,
		setState: setRootState,
		setAudioState,
		audioLoad,
		audioRef,
	} = props;

	const container = useRef();
	const colorBackgroundRef = useRef();

	const [state, setState] = useState('loading');
	const [domReady, setDomReady] = useState(false);
	const [timer, setTimer] = useState({});

	useEffect(() => {
		if (audioLoad !== false && domReady) {
			setTimeout(() => {
				setLoading(false);
				colorBackgroundRef.current.classList.add('fadein');

				const pageKey = 'page0';
				setState(pageKey);

				const beginDuration = Object.entries(timer)
					.sort()
					.filter((e) => parseInt(pageKey.slice(4)) > parseInt(e[0].slice(4)));
				if (beginDuration.length > 0) {
					const audioSeekTime = beginDuration.reduce((a, b) => a + b[1], 0);
					audioRef.current.seek(audioSeekTime + 1);
				}
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
			setAudioState('motorcycle');
		});
	}, []);

	const collectTimer = (key, duration) => {
		setTimer((obj) => ({ ...obj, [key]: duration }));
	};

	return (
		<div ref={container} className='Motorcycle'>
			<div ref={colorBackgroundRef} className='color-background' />
			<Page3 {...{ state, setState, fadeOut, collectTimer }} />
			<Page2 {...{ state, setState, collectTimer }} />
			<Page1 {...{ state, setState, collectTimer }} />
			<Page0 {...{ state, setState, categroyName, collectTimer }} />
		</div>
	);
};
export default Motorcycle;
