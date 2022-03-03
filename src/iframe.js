/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Landscape from 'lesca-react-landscape';
import { render } from 'react-dom';
import Device from 'lesca-user-agent';
import Gtag from 'lesca-gtag';
import './Setting/global.less';
import App from './Index/main';

Facebook.install(process.env.FB_ID);
Gtag.install(process.env.GA_ID);
Click.init(true, true);

const { innerWidth, innerHeight } = window;
const device = Device.get() === 'mobile';
const scale = innerWidth / (device ? 750 : 1);
const style = !device
	? {}
	: {
			transform: `scale(${scale})`,
			transformOrigin: 'left top',
			width: '750px',
			height: innerHeight / scale,
	  };

render(
	<>
		<div style={style}>
			<App />
		</div>
		<Landscape />
	</>,
	document.getElementById('app'),
);
