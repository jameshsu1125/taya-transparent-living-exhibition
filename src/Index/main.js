import ImageOnload from 'lesca-image-onload';
import { useEffect, useRef, useState } from 'react';
import Background from '../Background/main';
import Intro from '../Intro/main';
import Loading from '../Loading/main';
import Logo from '../Logo/main';
import Select from '../Select/main';
import Story from '../Story/main';
import Result from '../Result/main';

import './main.less';

const Index = () => {
	const container = useRef();
	const selectRef = useRef();

	const [commingSoon, setCommingSoon] = useState(false);
	const [process, setProcess] = useState({});
	const [preload, setPreload] = useState(false);
	const [state, setState] = useState('loading');
	const [read, setRead] = useState([true, false, true, true, true]);

	const [intro, setIntro] = useState(true);
	const [logo, setLogo] = useState(true);
	const [story, setStory] = useState(false);
	const [loading, setLoading] = useState(true);
	// const [result, setResult] = useState(false);

	// const [intro, setIntro] = useState(false);
	// const [logo, setLogo] = useState(false);
	// const [story, setStory] = useState(1);
	// const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(true);

	useEffect(() => {
		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
		}).then(() => setPreload(true));
	}, []);

	useEffect(() => {
		if (preload) {
			new ImageOnload(container.current, {
				hideBeforeLoaded: true,
				onUpdate: (p) => setProcess(p),
			}).then((p) => setProcess(p));
		}
	}, [preload]);

	const loadingComplete = () => {
		setLoading(false);
		if (window.location.hash !== '') {
			setCommingSoon(true);
		} else {
			setState('intro');
		}
	};

	const selectFadein = () => {
		selectRef.current.fadein();
	};

	const appendStory = () => {
		if (story !== false) {
			return <Story index={story} setStory={setStory} setState={setState} />;
		}
		return false;
	};

	useEffect(() => {
		if (state === 'back') {
			const howMuchRead = read.filter((e) => e);
			if (howMuchRead.length === read.length) {
				console.log('all readed');
			}
		}
	}, [state, read]);

	return (
		<div ref={container} className='Index'>
			<Background commingSoon={commingSoon} />
			{preload && (
				<Select ref={selectRef} state={state} setStory={setStory} read={read} setRead={setRead} />
			)}
			{appendStory()}
			{preload && intro && <Intro state={state} setIntro={setIntro} selectFadein={selectFadein} />}
			{loading && <Loading process={process} onComplete={loadingComplete} />}
			{logo && <Logo commingSoon={commingSoon} state={state} setLogo={setLogo} />}
			{result && <Result setResult={setResult} />}
		</div>
	);
};
export default Index;
