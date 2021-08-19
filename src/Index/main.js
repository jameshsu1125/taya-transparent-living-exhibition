import ImageOnload from 'lesca-image-onload';
import { useEffect, useRef, useState } from 'react';
import QueryString from 'lesca-url-parameters';
import Background from '../Background/main';
import Intro from '../Intro/main';
import Loading from '../Loading/main';
import Logo from '../Logo/main';
import Select from '../Select/main';
import Story from '../Story/main';
import Result from '../Result/main';
import Audio from '../Components/audio';

import './main.less';

// todo => custom router
const queryState = QueryString.get('state');
const queryData = {
	normal: { intro: true, logo: true, story: false, loading: true, result: false },
	result: { intro: false, logo: false, story: false, loading: false, result: true },
	story: { intro: false, logo: false, story: 5, loading: false, result: false },
};

let queryInset;
if (!queryState) queryInset = queryData.normal;
else queryInset = queryData[queryState.split('#')[0]];

const defaultReadData = [true, false, true, true, true, false, true];

const Index = () => {
	const container = useRef();
	const selectRef = useRef();

	const [commingSoon, setCommingSoon] = useState(false);
	const [process, setProcess] = useState({});
	const [preload, setPreload] = useState(false);
	const [state, setState] = useState('loading');
	const [intro, setIntro] = useState(queryInset.intro);
	const [logo, setLogo] = useState(queryInset.logo);
	const [story, setStory] = useState(queryInset.story);
	const [loading, setLoading] = useState(queryInset.loading);
	const [result, setResult] = useState(queryInset.result);
	const [audioState, setAudioState] = useState('muted');
	const [audioLoad, setAudioLoad] = useState(false);

	// todo => [讀取紀錄功能]之後改localStorage
	const [read, setRead] = useState([...defaultReadData]);

	useEffect(() => {
		// 第一次框架onload
		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
		}).then(() => setPreload(true));
	}, []);

	useEffect(() => {
		if (preload) {
			// 剩下的內容onload
			new ImageOnload(container.current, {
				hideBeforeLoaded: true,
				onUpdate: (p) => setProcess(p),
			}).then((p) => setProcess(p));
		}
	}, [preload]);

	const loadingComplete = () => {
		// loading動畫完成
		setLoading(false);
		if (window.location.hash === '#CommingSoon') {
			// todo => [CommingSoon功能]改用日期判斷
			setCommingSoon(true);
		} else {
			// 進入intro page
			setState('intro');
		}
	};

	const selectFadein = () => {
		// exec select page fadein
		setState('select');
		selectRef.current.fadein();
	};

	useEffect(() => {
		// 從story回來
		if (state === 'back') {
			// 判斷是否全部故事讀完
			const howMuchRead = read.filter((e) => e);
			// 等select反白動畫 晚半秒進入result頁
			setTimeout(() => {
				setState('select');
				if (howMuchRead.length === read.length) setResult(true);
			}, 500);

			// 播放音樂
			setAudioState('back');
		}
	}, [state, read]);

	const retry = () => {
		// result頁讀完就從新再玩
		// todo => 重新再玩reset localStorage
		setRead(() => [...defaultReadData]);
		setResult(false);
		setState('reset');
		setTimeout(() => {
			setState('select');
		}, 500);
	};

	const onAudioLoaded = (e) => {
		setAudioLoad(e);
	};

	return (
		<div ref={container} className='Index'>
			<Background commingSoon={commingSoon} />
			{preload && (
				<Select ref={selectRef} state={state} setStory={setStory} read={read} setRead={setRead} />
			)}
			{story !== false && (
				<Story
					index={story}
					setStory={setStory}
					setState={setState}
					setAudioState={setAudioState}
					audioLoad={audioLoad}
				/>
			)}
			{preload && intro && (
				<Intro
					state={state}
					setIntro={setIntro}
					setAudioState={setAudioState}
					selectFadein={selectFadein}
				/>
			)}
			{loading && <Loading process={process} onComplete={loadingComplete} />}
			{logo && <Logo commingSoon={commingSoon} state={state} setLogo={setLogo} />}
			{result && <Result retry={retry} />}
			<Audio state={audioState} onload={onAudioLoaded} />
		</div>
	);
};
export default Index;
