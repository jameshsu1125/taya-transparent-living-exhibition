import { useEffect, useRef, useState } from 'react';
import Animation from './animation';
import './main.less';

const CommingSoon = () => {
	const container = useRef();
	const locationChtName = useRef();
	const locationEngName = useRef();
	const date = useRef();
	const line = useRef();

	const [startDate, setStartDate] = useState(18);
	const [endDate, setEndDate] = useState(18);

	useEffect(() => {
		const animation = new Animation({
			locationChtName,
			locationEngName,
			line,
			date,
			startDate,
			endDate,
			setStartDate,
			setEndDate,
		});
		container.current.style.display = 'block';
		animation.in();
	}, []);

	return (
		<div ref={container} className='CommingSoon'>
			<div className='footer'>
				<div className='location'>
					<div ref={locationChtName}>臺中國家歌劇院.</div>
					<div ref={locationEngName}>National Taichung Theater</div>
				</div>
				<div ref={date} className='date'>
					<div>
						<span>2021</span>
						10.
						{startDate}
					</div>
					<div ref={line} />
					<div>
						<span>2021</span>
						10.
						{endDate}
					</div>
				</div>
			</div>
		</div>
	);
};
export default CommingSoon;
