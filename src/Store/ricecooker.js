import { useEffect, useRef } from 'react';
import ImageOnload from 'lesca-image-onload';
import './ricecooker.less';

const Ricecooker = (props) => {
	const { setLoading } = props;

	const container = useRef();

	useEffect(() => {
		new ImageOnload(container.current, { hideBeforeLoaded: true }).then(() => {
			console.log('aaaa');
			setLoading(false);
		});
	}, []);

	return (
		<div ref={container} className='Ricecooker'>
			<div />
		</div>
	);
};
export default Ricecooker;
