import ImageOnload from 'lesca-image-onload';
import { useEffect, useRef, useState } from 'react';
import Background from '../Background/main';
import Intro from '../Intro/main';
import Loading from '../Loading/main';
import Logo from '../Logo/main';
import Select from '../Select/main';
import Store from '../Store/main';

import './main.less';

const Index = () => {
	const container = useRef();
	const selectRef = useRef();

	const [commingSoon, setCommingSoon] = useState(false);
	const [process, setProcess] = useState({});
	const [preload, setPreload] = useState(false);
	const [state, setState] = useState('loading');
	const [loading, setLoading] = useState(true);
	const [logo, setLogo] = useState(true);
	const [intro, setIntro] = useState(true);
	const [store, setStore] = useState(false);

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

	const appendStore = () => {
		if (store !== false) {
			return <Store index={store} />;
		}
		return false;
	};

	return (
		<div ref={container} className='Index'>
			<Background commingSoon={commingSoon} />
			{preload && <Select ref={selectRef} state={state} setStore={setStore} />}
			{appendStore()}
			{preload && intro && <Intro state={state} setIntro={setIntro} selectFadein={selectFadein} />}
			{loading && <Loading process={process} onComplete={loadingComplete} />}
			{logo && <Logo commingSoon={commingSoon} state={state} setLogo={setLogo} />}
		</div>
	);
};
export default Index;
