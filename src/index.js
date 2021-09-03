import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Landscape from 'lesca-react-landscape';
import { render } from 'react-dom';
import Gtag from 'lesca-gtag';
import App from './Index/main';
import './Setting/global.less';

Facebook.install(process.env.FB_ID);
Gtag.install(process.env.GA_ID);
Click.init(true, true);

render(
	<>
		<App />
		<Landscape />
	</>,
	document.getElementById('app'),
);
