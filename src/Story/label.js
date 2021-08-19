import './label.less';

const Label = (props) => {
	const { data } = props;
	const { text, x, y, delay } = data;

	return (
		<div data-delay={delay} className='Label' style={{ top: `${y}px`, left: `${x}px` }}>
			{text}
		</div>
	);
};
export default Label;
