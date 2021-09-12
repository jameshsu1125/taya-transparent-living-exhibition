import { render } from 'react-dom';
import QueryString from 'lesca-url-parameters';
import { useEffect } from 'react';
import Gtag from 'lesca-gtag';
import './Setting/global.less';

Gtag.install(process.env.GA_ID);

const App = () => {
	useEffect(() => {
		const [storyName] = QueryString.file().split('.');
		const root = QueryString.root();
		const url = `${root}?t=${storyName}`;
		window.location.replace(url);
	}, []);
	return <div />;
};

render(<App />, document.getElementById('app'));
