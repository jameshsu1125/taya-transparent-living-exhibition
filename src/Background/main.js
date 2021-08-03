import './main.less';

const Background = (props) => {
	const { commingSoon } = props;
	return <div className='Background'>{commingSoon && <div className='darken' />}</div>;
};

Background.defaultProps = {
	commingSoon: false,
};

export default Background;
