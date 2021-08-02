import './label.less';

const Label = (props) => {
	const { data } = props;
	const { text, x, y } = data;

	return (
		<div className='Label' style={{ top: `${y}px`, left: `${x}px` }}>
			{text}
		</div>
	);
};
export default Label;
