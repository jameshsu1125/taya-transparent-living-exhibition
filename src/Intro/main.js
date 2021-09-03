import Gtag from 'lesca-gtag';
import { useEffect, useRef } from 'react';
import { INTRO_TITLE } from '../Setting/config';
import Animation from './animation';
import './main.less';

const Intro = (props) => {
	const { state, setIntro, selectFadein, setAudioState } = props;

	const animation = useRef();

	const introRef = useRef();
	const contentRef = useRef();
	const ctaRef = useRef();
	const startButton = useRef();
	const arrow = useRef();

	useEffect(() => {
		animation.current = new Animation(
			{ contentRef, ctaRef, startButton, introRef, selectFadein, arrow, setAudioState },
			() => {
				setIntro(false);
			},
		);
	}, []);

	useEffect(() => {
		if (state === 'intro') {
			introRef.current.style.display = 'flex';
			animation.current.in();
			Gtag.pv('簡介頁');
		}
	}, [state]);

	return (
		<div ref={introRef} className='Intro'>
			<div ref={contentRef} className='content'>
				{INTRO_TITLE.map((e) => (
					<div key={e}>{e}</div>
				))}
			</div>
			<button className='startButton' ref={startButton}>
				開始聆聽故事
			</button>
			<div ref={ctaRef} className='cta'>
				請左右滑動
			</div>
			<div ref={arrow} className='arrow' />
		</div>
	);
};
export default Intro;
