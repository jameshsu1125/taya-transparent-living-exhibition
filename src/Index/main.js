import { useEffect, useState, useRef } from 'react';
import ImageOnload from 'lesca-image-onload';
import Background from '../Background/main';
import Logo from '../Logo/main';
import Loading from '../Loading/main';
import './main.less';

const Index = () => {
	const container = useRef();
	const [commingSoon, setCommingSoon] = useState(false);
	const [process, setProcess] = useState({});

	useEffect(() => {
		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
			onUpdate: (p) => setProcess(p),
		}).then((p) => {
			setProcess(p);
			if (window.location.hash !== '') setCommingSoon(true);
		});
	}, []);

	return (
		<div ref={container} className='Index'>
			<Background commingSoon={commingSoon} />
			<Logo commingSoon={commingSoon} />
			<Loading process={process} />
		</div>
	);
};
export default Index;
