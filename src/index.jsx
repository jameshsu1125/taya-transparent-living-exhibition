import Facebook from 'lesca-facebook-share';
import { render } from 'react-dom';
import App from './Index/main';
import './Setting/global.less';

Facebook.install('171368189560011', {});

render(<App />, document.getElementById('app'));
