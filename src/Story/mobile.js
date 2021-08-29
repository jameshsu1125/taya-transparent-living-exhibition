import ImageOnload from 'lesca-image-onload';
import Tweener from 'lesca-object-tweener';
import { useEffect, useRef, useState } from 'react';
import './mobile.less';
import Page0 from './mobile/page0';
import Page1 from './mobile/page1';
import Page2 from './mobile/page2';
import Page3 from './mobile/page3';

const Mobile = (props) => {
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
			setAudioState('mobile');
		});
	}, []);

	return (
		<div ref={container} className='Mobile'>
			<div ref={colorBackgroundRef} className='color-background' />
			<Page3 {...{ state, setState, fadeOut }} />
			<Page2 {...{ state, setState }} />
			<Page1 {...{ state, setState }} />
			<Page0 {...{ state, setState, categroyName }} />
		</div>
	);
};
export default Mobile;
