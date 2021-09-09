import { useEffect, useRef } from 'react';
import { STORY_RICECOOKER_PAGE0 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation0';

const pageName = 'page0';
const imageSize = { width: 1719, height: 1565, scale: 1 };

const Page0 = (props) => {
	const { categroyName, state, setState, collectTimer } = props;

	const animation = useRef();
	const img = useRef();
	const page = useRef();
	const bg = useRef();
	const eyes = useRef();
	const sweat = useRef();
	const title = useRef();
	const labels = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation({ page, bg, eyes, sweat, title, labels, imageSize }, () => {
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
					<div ref={eyes} className='eyes' />
					<div ref={sweat} className='sweat' />
				</div>
			</div>
			<div ref={title} className='title'>
				{categroyName}
				<sub>。</sub>
			</div>
			<div ref={labels} className='labels'>
				{STORY_RICECOOKER_PAGE0.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page0;
