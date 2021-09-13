import { useState } from 'react';
import Loading from 'lesca-react-loading';
import Ricecooker from './ricecooker';
import Evcharger from './evcharger';
import Motorcycle from './motorcycle';
import Earphone from './earphone';
import Mobile from './mobile';
import Pump from './pump';
import InnerSizeDetecter from '../Components/innerSizeDetecter';
import Cable from './cable';
import { ITEMS_SELECT } from '../Setting/config';
import './main.less';

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
			<InnerSizeDetecter />
		</div>
	);
};
export default Story;
