import { useState } from 'react';
import Loading from 'lesca-react-loading';
import Ricecooker from './ricecooker';
import Chargingpile from './chargingpile';

import './main.less';

const Story = (props) => {
	const { index, setStory, setState, setAudioState, audioLoad } = props;
	const [loading, setLoading] = useState(true);

	const appendStore = () => {
		switch (index) {
			case 1:
				return (
					<Ricecooker
						setLoading={setLoading}
						setStory={setStory}
						setState={setState}
						setAudioState={setAudioState}
						audioLoad={audioLoad}
					/>
				);

			case 5:
				return (
					<Chargingpile
						setLoading={setLoading}
						setStory={setStory}
						setState={setState}
						setAudioState={setAudioState}
						audioLoad={audioLoad}
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
