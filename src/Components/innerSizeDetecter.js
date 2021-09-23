import { useEffect, useState } from 'react';
import userAgent from 'lesca-user-agent';
import { useShallowCompareEffect } from 'react-use';
import './InnerSizeDetecter.less';

const InnerSizeDetecter = () => {
	const [state, setState] = useState(false);
	const [innerSize, setInnerSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const setSize = () => {
			const { innerWidth: width, innerHeight: height } = window;
			setInnerSize({ width, height });
		};

		setSize();
		window.addEventListener('resize', setSize);

		return () => {
			window.removeEventListener('resize', setSize);
		};
	}, []);

	useShallowCompareEffect(() => {
		const device = userAgent.get();
		const { width, height } = innerSize;
		if (device === 'desktop') {
			if (width <= 1000 || height <= 650) setState(true);
			else setState(false);
		}
	}, [innerSize]);

	return (
		<>
			{state && (
				<div className='InnerSizeDetecter'>
					<div>
						為了確保您能夠有完整的體驗，
						<br />
						請將瀏覽器縮放至大於1000x650以上。
					</div>
				</div>
			)}
		</>
	);
};
export default InnerSizeDetecter;
