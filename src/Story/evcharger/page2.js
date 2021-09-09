import { useEffect, useRef } from 'react';
import { STORY_EVCHARAGER_PAGE2 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation2';

const pageName = 'page2';
const imageSize = { width: 1833, height: 1807, scale: 1 };

const Page2 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const cloud = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation({ page, bg, cloud, labels, imageSize }, () => {
			setState('page3');
		});

		collectTimer(pageName, animation.current.totalTime);

		return () => {
			listener();
		};
	}, []);

	useEffect(() => {
		if (state === pageName) {
			animation.current.in();
			page.current.style.display = 'block';
		}
	}, [state]);

	return (
		<div ref={page} className='page page2'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div ref={cloud} className='cloud' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_EVCHARAGER_PAGE2.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page2;
