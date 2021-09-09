import { useEffect, useRef } from 'react';
import { STORY_MOBILE_PAGE1 } from '../../Setting/config';
import Label from '../label';
import { SET_SIZE } from '../setSize';
import Animation from './animation1';

const pageName = 'page1';
const imageSize = { width: 1486, height: 1535, scale: 1 };

const Page1 = (props) => {
	const { state, setState, collectTimer } = props;

	const animation = useRef();
	const page = useRef();
	const bg = useRef();
	const img = useRef();
	const labels = useRef();

	useEffect(() => {
		const [listener, scale] = SET_SIZE({ ...imageSize, img });
		imageSize.scale = scale;

		animation.current = new Animation({ page, bg, labels, imageSize }, () => {
			setState('page2');
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
		<div ref={page} className='page page1'>
			<div ref={bg} className='bg'>
				<div ref={img} className='img'>
					<div className='rain' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_MOBILE_PAGE1.map((e) => (
					<Label key={`${e.text}${e.x}`} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page1;
