import { useEffect, useRef } from 'react';
import { STORY_RICECOOKER_PAGE1 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation1';

const pageName = 'page1';

const Page1 = (props) => {
	const { state, setState } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const labels = useRef();
	const img = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, labels }, () => {
			setState('page2');
		});

		const resize = () => {
			const { innerHeight } = window;
			const baseHeight = 1625;

			const scale = innerHeight / baseHeight;
			img.current.style.transform = `scale(${scale})`;
		};

		window.addEventListener('resize', resize);
		resize();

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, []);

	useEffect(() => {
		if (state === pageName) {
			page.current.style.display = 'block';
			animation.current.in();
		}
	}, [state]);

	return (
		<div ref={page} className='page page1'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='smoke-0' />
					<div className='smoke-1' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_RICECOOKER_PAGE1.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page1;
