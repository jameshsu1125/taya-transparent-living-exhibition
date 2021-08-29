import Tweener, { Bezier } from 'lesca-object-tweener';
import { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import BGM from './sounds/bgm.mp3';
import Evcharger from './sounds/evcharger.mp3';
import Ricecooker from './sounds/ricecooker.mp3';
import Motorcycle from './sounds/motorcycle.mp3';

const easing = Bezier.linear;
const duration = 3000;

const Audio = (props) => {
	const { state, onload } = props;

	const [BGMState, setBGMState] = useState(false);
	const [BGMVol, setBGMVol] = useState(1);

	const [RicecookerState, setRicecookerState] = useState(false);
	const [EvchargerState, setEvchargerState] = useState(false);
	const [MotorcycleState, setMotorcycleState] = useState(false);

	const tweenVolume = (vol) => {
		new Tweener({
			from: { vol: BGMVol },
			to: { vol },
			duration,
			easing,
			onUpdate: (data) => setBGMVol(data.vol),
			onComplete: (data) => setBGMVol(data.vol),
		});
	};

	useEffect(() => {
		switch (state) {
			case 'bgm':
				setBGMState(true);
				break;

			case 'ricecooker':
				tweenVolume(0);
				setRicecookerState(true);
				break;

			case 'evcharger':
				tweenVolume(0);
				setEvchargerState(true);
				break;

			case 'motorcycle':
				tweenVolume(0);
				setMotorcycleState(true);
				break;

			case 'back':
				setRicecookerState(false);
				setEvchargerState(false);
				setBGMState(true);
				tweenVolume(1);
				break;

			case 'muted':
			default:
				setBGMState(false);
		}
	}, [state]);

	const onSoundsLoad = (e) => onload(e);

	return (
		<>
			<ReactHowler src={BGM} playing={BGMState} volume={BGMVol} loop />
			{RicecookerState && (
				<ReactHowler
					src={Ricecooker}
					onLoad={() => onSoundsLoad('ricecooker')}
					playing
					loop={false}
				/>
			)}
			{EvchargerState && (
				<ReactHowler
					src={Evcharger}
					onLoad={() => onSoundsLoad('ricecooker')}
					playing
					loop={false}
				/>
			)}
			{MotorcycleState && (
				<ReactHowler
					src={Motorcycle}
					onLoad={() => onSoundsLoad('motorcycle')}
					playing
					loop={false}
				/>
			)}
		</>
	);
};

export default Audio;
