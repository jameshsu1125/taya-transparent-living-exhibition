import { useEffect, useRef } from 'react';
import { STORY_EARPHONE_PAGE2 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation2';

const pageName = 'page2';

const Page2 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const white = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, labels, white }, () => {
			setState('page3');
		});

		collectTimer(pageName, animation.current.totalTime);

		const resize = () => {
			const { innerHeight } = window;
			const baseHeight = 2292;
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
			<div ref={white} className='white-color' />
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='air' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_EARPHONE_PAGE2.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page2;
