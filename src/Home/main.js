import { useEffect } from 'react';
import './main.less';

const Home = () => {
	useEffect(() => {}, []);
	return (
		<div className='Home'>
			<div className='darken' />
			<div className='content'>
				<div className='logo' />
				<div className='label' />
				<div className='description'>即將開展</div>
			</div>
			<div className='footer'>
				<div className='location'>
					臺中國家歌劇院.
					<br />
					<span>National Taichung Theater</span>
				</div>
				<div className='date'>
					<div>
						<span>2021</span>
						10.15
					</div>
					<div />
					<div>
						<span>2021</span>
						11.25
					</div>
				</div>
			</div>
		</div>
	);
};
export default Home;
