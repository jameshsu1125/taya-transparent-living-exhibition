import Loading from 'lesca-react-loading';
import { useState } from 'react';
import { ITEMS_SELECT } from '../Setting/config';
import Cable from './cable';
import Earphone from './earphone';
import Evcharger from './evcharger';
import './main.less';
import Mobile from './mobile';
import Motorcycle from './motorcycle';
import Pump from './pump';
import Ricecooker from './ricecooker';

const Story = (props) => {
	const { index, setStory, setState, setAudioState, audioLoad, audioRef } = props;
	const [loading, setLoading] = useState(true);

	const categroyName = ITEMS_SELECT[index].category;

	const appendStore = () => {
		switch (index) {
			case 0:
				return (
					<Motorcycle
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 1:
				return (
					<Ricecooker
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 2:
				return (
					<Earphone
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 3:
				return (
					<Pump
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 4:
				return (
					<Mobile
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 5:
				return (
					<Evcharger
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
					/>
				);

			case 6:
				return (
					<Cable
						{...{
							categroyName,
							setLoading,
							setStory,
							setState,
							setAudioState,
							audioLoad,
							audioRef,
						}}
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
