import { useEffect, useState } from 'react';
import { useShallowCompareEffect } from 'react-use';
import QueryString from 'lesca-url-parameters';
import './InnerSizeDetecter.less';

const InnerSizeDetecter = () => {
	const [innerSize, setInnerSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const [state, setState] = useState(false);

	useEffect(() => {
		const setSize = () => {
			setTimeout(() => {
				const { innerWidth: width, innerHeight: height } = window;
				setInnerSize({ width, height });
			}, 300);
		};

		setSize();
		window.addEventListener('resize', setSize);

		return () => {
			window.removeEventListener('resize', setSize);
		};
	}, []);

	useShallowCompareEffect(() => {
		const { width, height } = innerSize;

		if (QueryString.file() === 'iframe.html') setState(false);
		else if (width < 749) setState(true);
		else if (width <= 750 && height < 880) setState(true);
		else setState(false);
	}, [innerSize]);

	return (
		<>
			{state && (
				<div className='InnerSizeDetecter'>
					<div>
						為了確保您能夠有完整的體驗，
						<br />
						請將瀏覽器縮放至大於750x880以上。
					</div>
				</div>
			)}
		</>
	);
};
export default InnerSizeDetecter;
