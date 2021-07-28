import Facebook from 'lesca-facebook-share';
import { useEffect } from 'react';
import './main.less';

const Index = () => {
	useEffect(() => {}, []);

	const share = () => {
		Facebook.share({
			url: 'https://jameshsu1125.github.io/taya-transparent-living-exhibition/',
			redirect_uri: 'https://jameshsu1125.github.io/taya-transparent-living-exhibition/',
			hashtag: '透明生活展',
		});
	};

	return (
		<div className='Index'>
			<button onClick={share}>分享</button>
		</div>
	);
};
export default Index;
