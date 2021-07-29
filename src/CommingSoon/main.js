import { useEffect, useRef } from 'react';
import ImageOnload from 'lesca-image-onload';
import './main.less';

const CommingSoon = () => {
	const container = useRef();

	useEffect(() => {
		new ImageOnload(container.current, {
			hideBeforeLoaded: true,
		}).then(() => {});
	}, []);

	return (
		<div ref={container} className='CommingSoon'>
			<div className='darken' />
			<div className='footer'>
				<div className='location'>
					臺中國家歌劇院.
					<br />
					<span>National Taichung Theater</span>
				</div>
				<div className='date'>
					<div>
						<span>2021</span>
						10.15
					</div>
					<div />
					<div>
						<span>2021</span>
						11.25
					</div>
				</div>
			</div>
		</div>
	);
};
export default CommingSoon;
