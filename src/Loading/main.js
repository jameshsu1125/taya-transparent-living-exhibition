import { useEffect, useRef } from 'react';
import Animation from './animation';
import './main.less';

const Loading = (props) => {
	const container = useRef();
	const animation = useRef();

	const { process, onComplete } = props;
	const { total, loaded } = process;

	useEffect(() => {
		animation.current = new Animation(container, () => onComplete());
	}, []);

	useEffect(() => {
		if (total && loaded) {
			const percent = (loaded / total) * 100;
			animation.current.update(percent);
		}
	}, [total, loaded]);

	return (
		<div ref={container} className='Loading'>
			{[...new Array(5).keys()].map((e) => (
				<div key={e} />
			))}
		</div>
	);
};
export default Loading;
