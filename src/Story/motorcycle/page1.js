import { useEffect, useRef } from 'react';
import { STORY_MOTORCYCLE_PAGE1 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation1';

const pageName = 'page1';

const Page1 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, labels }, () => {
			setState('page2');
		});

		collectTimer(pageName, animation.current.totalTime);

		const resize = () => {
			const { innerHeight } = window;
			const baseHeight = 1754;
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
		<div ref={page} className='page page1'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='smoke0' />
					<div className='smoke1' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_MOTORCYCLE_PAGE1.map((e) => (
					<Label key={`${e.text}${e.x}`} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page1;
