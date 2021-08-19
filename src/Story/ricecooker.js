import Tweener from 'lesca-object-tweener';
import { useEffect, useRef, useState } from 'react';
import ImageOnload from 'lesca-image-onload';
import Page0 from './ricecooker/page0';
import Page1 from './ricecooker/page1';
import Page2 from './ricecooker/page2';
import Page3 from './ricecooker/page3';
import './ricecooker.less';

const Ricecooker = (props) => {
	const { setLoading, setStory, setState: setRootState, setAudioState, audioLoad } = props;

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
			setAudioState('ricecooker');
		});
	}, []);

	return (
		<div ref={container} className='Ricecooker'>
			<div ref={colorBackgroundRef} className='color-background' />
			<Page3 state={state} setState={setState} fadeOut={fadeOut} />
			<Page2 state={state} setState={setState} />
			<Page1 state={state} setState={setState} />
			<Page0 state={state} setState={setState} />
		</div>
	);
};
export default Ricecooker;
