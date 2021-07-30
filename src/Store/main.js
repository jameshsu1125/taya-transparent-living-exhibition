import { useEffect, useState } from 'react';
import Loading from 'lesca-react-loading';
import Ricecooker from './ricecooker';

import './main.less';

const Store = (props) => {
	const { index } = props;

	const [loading, setLoading] = useState(true);

	useEffect(() => {}, []);

	const appendStore = () => {
		switch (index) {
			case index:
				return <Ricecooker setLoading={setLoading} />;

			default:
				return false;
		}
	};

	return (
		<div className='Store'>
			{appendStore()}
			{loading && <Loading />}
		</div>
	);
};
export default Store;
