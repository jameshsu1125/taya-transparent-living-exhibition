import { useEffect, useRef } from 'react';
import { STORY_EVCHARAGER_PAGE1 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation1';

const pageName = 'page1';
const imageSize = { width: 1481, height: 1779, scale: 1 };

const Page1 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const trash0 = useRef();
	const trash1 = useRef();
	const trash2 = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation(
			{ page, bg, labels, trash0, trash1, trash2, imageSize },
			() => {
				setState('page2');
			},
		);

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
		<div ref={page} className='page page1'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div ref={trash0} className='trash0' />
					<div ref={trash1} className='trash1' />
					<div ref={trash2} className='trash2' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_EVCHARAGER_PAGE1.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page1;
