import { useEffect, useRef } from 'react';
import { STORY_RICECOOKER_PAGE0 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation0';

const pageName = 'page0';

const Page0 = (props) => {
	const { state, setState } = props;

	const animation = useRef();

	const page = useRef();
	const bg = useRef();
	const eyes = useRef();
	const sweat = useRef();
	const title = useRef();
	const labels = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, eyes, sweat, title, labels }, () => {
			setState('page1');
		});
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
				<div className='img'>
					<div ref={eyes} className='eyes' />
					<div ref={sweat} className='sweat' />
				</div>
			</div>
			<div ref={title} className='title'>
				溫熱的支持
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
