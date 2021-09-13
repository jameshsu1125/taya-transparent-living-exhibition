/* eslint-disable camelcase */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import UserAgent from 'lesca-user-agent';
import { useEffect, useRef } from 'react';
import { STORY_MOBILE_PAGE3, WEBSITE_URL } from '../../Setting/config';
import Animation from './animation3';
import Label from '../label';

const device = UserAgent.get() === 'desktop';
const pageName = 'page3';
const name = 'mobile';

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
			back();
		});

		Click.add('#desktop_share', () => {
			const url =
				window.location.hostname === 'localhost'
					? `https://localhost:8080/${name}.html`
					: `${WEBSITE_URL}${name}.html`;

			const redirect_uri =
				window.location.hostname === 'localhost'
					? 'https://localhost:8080/?state=normal'
					: `${WEBSITE_URL}?state=normal`;

			Facebook.share({
				url,
				hashtag: '大亞電線電纜_透明生活展',
				redirect_uri,
			});
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
				{device && (
					<div className='share'>
						<button id='desktop_return'>回到選單</button>
						<button id='desktop_share'>分享</button>
					</div>
				)}
			</div>
			<div ref={labels} className='labels'>
				{STORY_MOBILE_PAGE3.map((e) => (
					<Label key={e.text} data={e} />
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
