/* eslint-disable camelcase */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import QueryString from 'lesca-url-parameters';
import { useEffect, useRef } from 'react';
import { HASHTAG, STORY_CABLE_PAGE3, VR_URL } from '../../Setting/config';
import Label from '../label';
import Animation from './animation3';

const device = window.innerWidth >= 751;
const pageName = 'page3';
const name = 'cable';
const queryIsVR = QueryString.get('vr');

const Page3 = (props) => {
	const { state, fadeOut, collectTimer, back, setRootState } = props;

	const animation = useRef();
	const page = useRef();
	const labels = useRef();
	const product = useRef();
	const footer = useRef();
	const shareRef = useRef();
	const returnRef = useRef();

	useEffect(() => {
		animation.current = new Animation(
			{ page, labels, product, footer, shareRef, returnRef },
			() => {
				fadeOut();
			},
		);

		collectTimer(pageName, animation.current.totalTime);

		Click.add('#desktop_return', () => {
			Click.remove('#desktop_return');
			if (queryIsVR === '1') {
				window.location.href = VR_URL.cable;
				return;
			}
			setTimeout(() => {
				if (device) back();
				else animation.current.tr.out();
			}, 500);
		});

		Click.add('#desktop_share', () => {
			const root = QueryString.root();
			const url = `${root}${name}.html`;

			const sliderSteps = QueryString.get('s');
			let redirect_uri = root;
			if (sliderSteps) redirect_uri += '?s=6';
			if (queryIsVR === '1') {
				redirect_uri = VR_URL.cable;
			}

			setRootState('storage');
			setTimeout(() => {
				Facebook.share({
					url,
					hashtag: HASHTAG,
					redirect_uri,
				});
			}, 600);
		});

		return () => {
			Click.remove('#desktop_return');
			Click.remove('#desktop_share');
		};
	}, []);

	useEffect(() => {
		if (state === pageName) {
			animation.current.in();
			page.current.style.display = 'block';
		}
	}, [state]);

	return (
		<div ref={page} className='page page3'>
			<div className='align'>
				<div ref={product} className='product' />
				<div ref={footer} className='footer'>
					<div className='headline'>穩定的力量</div>
					<div className='logo' />
				</div>
				{!device && (
					<div className='btns'>
						<button ref={shareRef} id='desktop_share'>
							分享
						</button>
						<button ref={returnRef} id='desktop_return'>
							{queryIsVR === '1' ? '返回展場' : '繼續閱聽故事'}
						</button>
					</div>
				)}
				{device && (
					<div className='share'>
						<button id='desktop_return'>{queryIsVR === '1' ? '返回展場' : '回到選單'}</button>
						<button id='desktop_share'>分享</button>
					</div>
				)}
			</div>
			<div ref={labels} className='labels'>
				{STORY_CABLE_PAGE3.map((e) => (
					<Label key={e.text} data={e} lastPage />
				))}
			</div>
			{/* <div
				style={{
					position: 'absolute',
					width: '2px',
					backgroundColor: 'red',
					height: '100%',
					left: '50%',
				}}
			/> */}
		</div>
	);
};
export default Page3;
