import ImageOnload from 'lesca-image-onload';
import { useEffect, useRef, useState } from 'react';
import Click from 'lesca-click';
import Animation from './animation';
import Share from '../Share/main';
import './main.less';

const Result = (props) => {
	const { retry } = props;

	const container = useRef();
	const animation = useRef();
	const background = useRef();
	const logo = useRef();
	const logoLabel = useRef();
	const buttons = useRef();
	const headline = useRef();

	const [shareDialog, setShareDialog] = useState('close');

	useEffect(() => {
		animation.current = new Animation({
			background,
			logo,
			logoLabel,
			buttons,
			headline,
			container,
		});

		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
		}).then(() => {
			animation.current.in();

			Click.add('#share', () => {
				setShareDialog('open');
			});

			Click.add('#back', () => {
				animation.current.out(() => {
					retry();
				});
			});

			Click.add('#about', () => {
				window.open('https://www.taya.com.tw/');
			});

			Click.add('#facebook', () => {
				window.open('https://www.facebook.com/TAIWANTAYA/');
			});
		});
	}, []);

	return (
		<div ref={container} className='Result'>
			<div ref={background} className='background' />
			<div ref={headline} className='headline-container'>
				<div className='gradient' />
				<div className='text'>
					分享你最喜歡的一則故事
					<br />
					即可獲得限量扭蛋
				</div>
			</div>
			<div ref={logo} className='logo' />
			<div ref={logoLabel} className='logo-label' />
			<div ref={buttons} className='buttons'>
				<button id='share'>分享</button>
				<button id='back'>重新聆聽故事</button>
				<button id='about'>了解大亞</button>
				<button id='facebook'>大亞FB</button>
			</div>
			<Share shareDialog={shareDialog} setShareDialog={setShareDialog} />
		</div>
	);
};
export default Result;
