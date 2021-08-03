import { useState } from 'react';
import Loading from 'lesca-react-loading';
import Ricecooker from './ricecooker';

import './main.less';

const Story = (props) => {
	const { index, setStory, setState } = props;
	const [loading, setLoading] = useState(true);

	const appendStore = () => {
		switch (index) {
			case index:
				return <Ricecooker setLoading={setLoading} setStory={setStory} setState={setState} />;

			default:
				return false;
		}
	};

	return (
		<div className='Story'>
			{appendStore()}
			{loading && <Loading />}
		</div>
	);
};
export default Story;
