/* eslint-disable no-lonely-if */
import Gtag from 'lesca-gtag';
import ImageOnload from 'lesca-image-onload';
import Storage from 'lesca-local-storage';
import QueryString from 'lesca-url-parameters';
import { useEffect, useRef, useState } from 'react';
import Background from '../Background/main';
import Audio from '../Components/audio';
import InnerSizeDetecter from '../Components/innerSizeDetecter';
import Intro from '../Intro/main';
import Loading from '../Loading/main';
import Logo from '../Logo/main';
import Result from '../Result/main';
import Select from '../Select/main';
import { EXHIBITION_DATE_LINE, TARGETINDEX } from '../Setting/config';
import Story from '../Story/main';
import './main.less';

// todo => custom router
const queryState = QueryString.get('state');
const queryStoryIndex = QueryString.get('storyIndex');
const queryShareTarget = QueryString.get('t');

const queryData = {
	normal: { intro: true, logo: true, story: false, loading: true, result: false },
	result: { intro: false, logo: false, story: false, loading: false, result: true },
	story: {
		intro: false,
		logo: false,
		story: queryStoryIndex ? window.parseInt(queryStoryIndex) : 0,
		loading: false,
		result: false,
	},
};

let queryInset;
if (!queryState) queryInset = queryData.normal;
else queryInset = queryData[queryState.split('#')[0]];

const defaultReadData = [...new Array(7).keys()].map(() => false);

// ! debug
// const defaultReadData = [true, true, true, true, true, true, true];
// Storage.clear();

const Index = () => {
	const container = useRef();
	const selectRef = useRef();
	const audioRef = useRef();

	const [commingSoon, setCommingSoon] = useState(false);
	const [process, setProcess] = useState({});
	const [preload, setPreload] = useState(queryState === 'result');
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

		const { data } = Storage.get('readData');
		if (!data) setRead(defaultReadData);
		else setRead(data.read);

		Gtag.pv('首頁');
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

	const selectFadein = () => {
		// exec select page fadein
		setState('select');
		selectRef.current.fadein();
	};

	const loadingComplete = () => {
		// ? => loading動畫完成
		setLoading(false);

		const now = new Date().getTime();
		const exhibitionDate = EXHIBITION_DATE_LINE.getTime();

		if (queryShareTarget) {
			const hasTargetIndex = TARGETINDEX[queryShareTarget];
			if (hasTargetIndex !== undefined) {
				setState('target');
				selectRef.current.fadein();
			} else setState('intro');
		} else {
			if (queryState === 'normal') {
				// skip time detector
				setState('intro');
			} else if (now < exhibitionDate) {
				// to comming Soon
				setCommingSoon(true);
			} else {
				// 進入intro page
				setState('intro');
			}
		}
	};

	useEffect(() => {
		// save data to Storage
		const howMuchRead = read.filter((e) => e);
		setTimeout(() => {
			if (state !== 'loading') setState('select');
			if (howMuchRead.length === read.length) setResult(true);
			Storage.set('readData', { read });
		}, 500);
	}, [read]);

	useEffect(() => {
		switch (state) {
			case 'back':
				read[story] = true;
				setRead((data) => [...data]);
				setStory(false);
				setAudioState('back');
				setAudioLoad(false);
				break;

			case 'giveUp':
				setStory(false);
				setAudioState('back');
				setAudioLoad(false);
				break;

			default:
		}
	}, [state]);

	const retry = () => {
		// ? => result頁讀完就從新再玩
		setRead(() => [...defaultReadData]);
		setResult(false);
		setState('reset');
		if (queryState === 'result') selectRef.current.fadein();
	};

	const onAudioLoaded = (e) => setAudioLoad(e);

	return (
		<div ref={container} className='Index'>
			{state === 'loading' && <Background commingSoon={commingSoon} />}
			{preload && (
				<Select
					ref={selectRef}
					{...{ state, setState, setStory, read, setRead, defaultReadData }}
				/>
			)}
			{story !== false && (
				<Story
					index={story}
					setStory={setStory}
					setState={setState}
					setAudioState={setAudioState}
					audioLoad={audioLoad}
					audioRef={audioRef}
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
			<Audio ref={audioRef} state={audioState} onload={onAudioLoaded} />
			<InnerSizeDetecter />
		</div>
	);
};
export default Index;
