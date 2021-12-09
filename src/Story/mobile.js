import Click from 'lesca-click';
import Gtag from 'lesca-gtag';
import ImageOnload from 'lesca-image-onload';
import Tweener from 'lesca-object-tweener';
import QueryString from 'lesca-url-parameters';
import { useEffect, useRef, useState } from 'react';
import './mobile.less';
import Page0 from './mobile/page0';
import Page1 from './mobile/page1';
import Page2 from './mobile/page2';
import Page3 from './mobile/page3';

const { parseInt } = window;
const pageNumber = QueryString.get('page');

const Mobile = (props) => {
	const {
		categroyName,
		setLoading,
		setState: setRootState,
		setAudioState,
		audioLoad,
		audioRef,
	} = props;

	const container = useRef();
	const colorBackgroundRef = useRef();
	const returnRef = useRef();

	const [state, setState] = useState('loading');
	const [domReady, setDomReady] = useState(false);
	const [timer, setTimer] = useState({});

	useEffect(() => {
		if (audioLoad !== false && domReady) {
			setTimeout(() => {
				setLoading(false);
				colorBackgroundRef.current.classList.add('fadein');

				const pageKey = `page${pageNumber === false ? '0' : pageNumber}`;
				setState(pageKey);

				const beginDuration = Object.entries(timer)
					.sort()
					.filter((e) => parseInt(pageKey.slice(4)) > parseInt(e[0].slice(4)));

				if (beginDuration.length > 0) {
					const audioSeekTime = beginDuration.reduce((a, b) => a + b[1], 0);
					audioRef.current.seek(audioSeekTime + 1);
				}

				Gtag.pv(`故事頁-${categroyName}`);
			}, 1000);
		}
	}, [audioLoad, domReady]);

	const fadeOut = (stateString = 'back') => {
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
				setRootState(stateString);
			},
		});
	};

	const back = () => {
		Click.remove('.return');
		setRootState('storyEnd');

		const { current } = container;
		new Tweener({
			from: { opacity: 1 },
			to: { opacity: 0 },
			duration: 2000,
			delay: 100,
			onUpdate: (e) => {
				current.style.opacity = e.opacity;
			},
			onComplete: (e) => {
				current.style.opacity = e.opacity;
				setRootState('giveUp');
			},
		});
		audioRef.current.fadeout();
	};

	useEffect(() => {
		new ImageOnload(container.current, { hideBeforeLoaded: true }).then(() => {
			setDomReady(true);
			setAudioState('mobile');

			Click.add('.return', () => {
				back();
			});
		});
		return () => {
			Click.remove('.return');
		};
	}, []);

	const collectTimer = (key, duration) => {
		setTimer((obj) => ({ ...obj, [key]: duration }));
	};

	return (
		<div ref={container} className='Mobile'>
			<div ref={colorBackgroundRef} className='color-background' />
			<Page3 {...{ state, setState, fadeOut, collectTimer, back, setRootState }} />
			<Page2 {...{ state, setState, collectTimer }} />
			<Page1 {...{ state, setState, collectTimer }} />
			<Page0 {...{ state, setState, categroyName, collectTimer }} />
			{state !== 'page3' && <div ref={returnRef} className='return' />}
		</div>
	);
};
export default Mobile;
