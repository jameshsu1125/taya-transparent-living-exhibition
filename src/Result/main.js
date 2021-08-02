import ImageOnload from 'lesca-image-onload';
import { useEffect, useRef } from 'react';
import Animation from './animation';
import Share from '../Share/main';
import './main.less';

const Result = (props) => {
	const { setResult } = props;

	const container = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({});

		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
		}).then(() => {});
	}, []);

	return (
		<div ref={container} className='Result'>
			<div className='background' />
			<div className='headline-container'>
				<div className='gradient' />
				<div className='text'>
					分享你最喜歡的一則故事
					<br />
					即可獲得限量扭蛋
				</div>
			</div>
			<div className='logo' />
			<div className='logo-label' />
			<div className='buttons'>
				<button>分享</button>
				<button>重新聆聽故事</button>
				<button>了解大亞</button>
				<button>大亞FB</button>
			</div>
			<Share />
		</div>
	);
};
export default Result;
