import { useEffect } from 'react';
import './main.less';

const Loading = (props) => {
	const { process } = props;
	const { total, loaded } = process;

	useEffect(() => {
		if (total && loaded) {
			const percent = (loaded / total) * 100;
			console.log(percent);
		}
	}, [total, loaded]);

	return (
		<div className='Loading'>
			{[...new Array(5).keys()].map((e) => (
				<div key={e} />
			))}
		</div>
	);
};
export default Loading;
