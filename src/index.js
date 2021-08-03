import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Landscape from 'lesca-react-landscape';
import { render } from 'react-dom';
import UserAgent from 'lesca-user-agent';
import App from './Index/main';
import './Setting/global.less';

Facebook.install(process.env.FB_ID);
Click.init(true, true);

render(
	<>
		{UserAgent.get() === 'mobile' && <App />}
		<Landscape />
	</>,
	document.getElementById('app'),
);
