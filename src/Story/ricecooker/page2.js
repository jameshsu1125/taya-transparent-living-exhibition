import { useEffect, useRef } from 'react';
import { STORY_RICECOOKER_PAGE2 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation2';

const pageName = 'page2';

const Page2 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const labels = useRef();
	const img = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, labels }, () => {
			setState('page3');
		});

		collectTimer(pageName, animation.current.totalTime);

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
			animation.current.in();
			page.current.style.display = 'block';
		}
	}, [state]);

	return (
		<div ref={page} className='page page2'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='smoke-0' />
					<div className='smoke-1' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_RICECOOKER_PAGE2.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page2;
