import Click from 'lesca-click';
import Facebook from 'lesca-facebook-share';
import Landscape from 'lesca-react-landscape';
import { render } from 'react-dom';
import App from './Index/main';
import './Setting/global.less';

Facebook.install('171368189560011', {});
Click.init(true, true);

render(
	<>
		<App />
		<Landscape />
	</>,
	document.getElementById('app'),
);
