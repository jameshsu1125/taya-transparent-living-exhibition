import { useEffect, useRef } from 'react';
import { STORY_CHARGIINGPILE_PAGE1 } from '../../Setting/config';
import Label from '../label';
import Animation from './animation1';

const pageName = 'page1';

const Page1 = (props) => {
	const { state, setState } = props;

	const animation = useRef();

	const page = useRef();
	const bg = useRef();
	const trash0 = useRef();
	const trash1 = useRef();
	const trash2 = useRef();

	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, bg, labels, trash0, trash1, trash2 }, () => {
			setState('page2');
		});

		const resize = () => {
			const { innerHeight } = window;
			const baseHeight = 1779;
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
					<div ref={trash0} className='trash0' />
					<div ref={trash1} className='trash1' />
					<div ref={trash2} className='trash2' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_CHARGIINGPILE_PAGE1.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page1;
