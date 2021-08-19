import Tweener, { Bezier } from 'lesca-object-tweener';
import { useEffect, useState } from 'react';
import ReactHowler from 'react-howler';
import BGM from './sounds/bgm.mp3';
import Ricecooker from './sounds/ricecooker_vo.mp3';
import Chargingpile from './sounds/chargingpile_vo.mp3';

const easing = Bezier['ease-out'];

const Audio = (props) => {
	const { state, onload } = props;

	const [BGMState, setBGMState] = useState(false);
	const [BGMVol, setBGMVol] = useState(1);

	const [RicecookerState, setRicecookerState] = useState(false);
	const [ChargingpileState, setChargingpileState] = useState(false);

	useEffect(() => {
		switch (state) {
			case 'bgm':
				setBGMState(true);
				break;

			case 'ricecooker':
				new Tweener({
					from: { vol: BGMVol },
					to: { vol: 0 },
					duration: 1000,
					easing,
					onUpdate: (data) => setBGMVol(data.vol),
					onComplete: (data) => setBGMVol(data.vol),
				});

				setRicecookerState(true);
				break;

			case 'chargingpile':
				new Tweener({
					from: { vol: BGMVol },
					to: { vol: 0 },
					duration: 1000,
					easing,
					onUpdate: (data) => setBGMVol(data.vol),
					onComplete: (data) => setBGMVol(data.vol),
				});

				setChargingpileState(true);
				break;

			case 'back':
				setRicecookerState(false);
				setChargingpileState(false);
				setBGMState(true);
				new Tweener({
					from: { vol: BGMVol },
					to: { vol: 1 },
					duration: 2000,
					easing,
					onUpdate: (data) => setBGMVol(data.vol),
					onComplete: (data) => setBGMVol(data.vol),
				});
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
			{ChargingpileState && (
				<ReactHowler
					src={Chargingpile}
					onLoad={() => onSoundsLoad('ricecooker')}
					playing
					loop={false}
				/>
			)}
		</>
	);
};
export default Audio;
