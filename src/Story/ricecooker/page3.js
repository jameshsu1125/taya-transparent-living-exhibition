import { useEffect, useRef } from 'react';
import { STORY_RICECOOKER_PAGE3 } from '../../Setting/config';
import Animation from './animation3';
import Label from '../label';

const pageName = 'page3';

const Page3 = (props) => {
	const { state, fadeOut } = props;

	const animation = useRef();
	const page = useRef();
	const labels = useRef();
	const product = useRef();
	const footer = useRef();

	useEffect(() => {
		animation.current = new Animation({ page, labels, product, footer }, () => {
			fadeOut();
		});
	}, []);

	useEffect(() => {
		if (state === pageName) {
			page.current.style.display = 'block';
			animation.current.in();
		}
	}, [state]);

	return (
		<div ref={page} className='page page3'>
			<div className='align'>
				<div ref={product} className='product' />
				<div ref={footer} className='footer'>
					<div className='headline'>穩定的力量</div>
					<div className='logo' />
				</div>
			</div>
			<div ref={labels} className='labels'>
				{STORY_RICECOOKER_PAGE3.map((e) => (
					<Label key={e.text} data={e} />
				))}
			</div>
		</div>
	);
};
export default Page3;
