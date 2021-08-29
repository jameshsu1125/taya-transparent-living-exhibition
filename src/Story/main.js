import { useState } from 'react';
import Loading from 'lesca-react-loading';
import Ricecooker from './ricecooker';
import Evcharger from './evcharger';
import Motorcycle from './motorcycle';
import { ITEMS_SELECT } from '../Setting/config';

import './main.less';

const Story = (props) => {
	const { index, setStory, setState, setAudioState, audioLoad } = props;
	const [loading, setLoading] = useState(true);

	const categroyName = ITEMS_SELECT[index].category;

	const appendStore = () => {
		switch (index) {
			case 0:
				return (
					<Motorcycle
						{...{ categroyName, setLoading, setStory, setState, setAudioState, audioLoad }}
					/>
				);

			case 1:
				return (
					<Ricecooker
						{...{ categroyName, setLoading, setStory, setState, setAudioState, audioLoad }}
					/>
				);

			case 5:
				return (
					<Evcharger
						{...{ categroyName, setLoading, setStory, setState, setAudioState, audioLoad }}
					/>
				);

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
