import { useEffect, useRef } from 'react';
import { STORY_CABLE_PAGE2 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation2';

const pageName = 'page2';
const imageSize = { width: 1423, height: 1658, scale: 1 };

const Page2 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();

	const white = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation({ page, bg, labels, white, imageSize }, () => {
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
			<div ref={white} className='white-color' />
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='eyes' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_CABLE_PAGE2.map((e) => (
					<Label key={`${e.text}${e.delay}`} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page2;
