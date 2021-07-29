import { useEffect } from 'react';
import './main.less';

const Background = (props) => {
	const { commingSoon } = props;

	useEffect(() => {}, []);

	return <div className='Background'>{commingSoon && <div className='darken' />}</div>;
};

Background.defaultProps = {
	commingSoon: false,
};

export default Background;
