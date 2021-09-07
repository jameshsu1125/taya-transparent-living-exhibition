import { useEffect } from 'react';
import Click from 'lesca-click';
import './arrow.less';

const Arrow = (props) => {
	const { direct, click } = props;

	useEffect(() => {
		Click.add(`#arrows${direct}`, () => {
			click?.();
		});
	}, []);
	return (
		<div id={`arrows${direct}`} className={`Arrow ${direct}`}>
			<div />
		</div>
	);
};
export default Arrow;
