/* eslint-disable camelcase */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import QueryString from 'lesca-url-parameters';
import { useEffect, useRef } from 'react';
import { HASHTAG, STORY_CABLE_PAGE3 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation3';

const device = window.innerWidth >= 751;
const pageName = 'page3';
const name = 'cable';

const Page3 = (props) => {
	const { state, fadeOut, collectTimer, back } = props;

	const animation = useRef();
	const page = useRef();
	const labels = useRef();
	const product = useRef();
	const footer = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, labels, product, footer }, () => {
			fadeOut();
		});

		collectTimer(pageName, animation.current.totalTime);

		Click.add('#desktop_return', () => {
			Click.remove('#desktop_return');
			setTimeout(() => back(), 500);
		});

		Click.add('#desktop_share', () => {
			const root = QueryString.root();
			const url = `${root}${name}.html`;

			setTimeout(() => {
				Facebook.share({
					url,
					hashtag: HASHTAG,
				});
			}, 500);
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
						<button id='desktop_share'>分享故事 獲得限量小禮</button>
						<button id='desktop_return'>繼續閱聽故事</button>
					</div>
				)}
				{device && (
					<div className='share'>
						<button id='desktop_return'>回到選單</button>
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
