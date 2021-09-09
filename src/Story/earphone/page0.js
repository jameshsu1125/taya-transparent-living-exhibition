import { useEffect, useRef } from 'react';
import { STORY_EARPHONE_PAGE0 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation0';

const pageName = 'page0';
const imageSize = { width: 1413, height: 1779, scale: 1 };

const Page0 = (props) => {
	const { categroyName, state, setState, collectTimer } = props;
	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const cloud = useRef();
	const title = useRef();
	const labels = useRef();
	const img = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation({ page, bg, cloud, title, labels, imageSize }, () => {
			setState('page1');
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
		<div ref={page} className='page page0'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='tail' />
				</div>
			</div>
			<div ref={title} className='title'>
				{categroyName}
				<sub>。</sub>
			</div>
			<div ref={labels} className='labels'>
				{STORY_EARPHONE_PAGE0.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page0;
