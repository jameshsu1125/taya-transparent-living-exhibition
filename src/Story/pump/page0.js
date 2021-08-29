import { useEffect, useRef } from 'react';
import { STORY_MOTORCYCLE_PAGE0 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation0';

const pageName = 'page0';

const Page0 = (props) => {
	const { categroyName, state, setState } = props;
	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const cloud = useRef();
	const title = useRef();
	const labels = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, cloud, title, labels }, () => {
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
					<div ref={cloud} className='cloud' />
				</div>
			</div>
			<div ref={title} className='title'>
				{categroyName}
				<sub>。</sub>
			</div>
			<div ref={labels} className='labels'>
				{STORY_MOTORCYCLE_PAGE0.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page0;
