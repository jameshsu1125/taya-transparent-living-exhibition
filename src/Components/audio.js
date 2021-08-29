import Tweener, { Bezier } from 'lesca-object-tweener';
import { forwardRef, useImperativeHandle, useEffect, useState, useRef } from 'react';
import ReactHowler from 'react-howler';
import BGM from './sounds/bgm.mp3';
import Cable from './sounds/cable.mp3';
import Earphone from './sounds/earphone.mp3';
import Evcharger from './sounds/evcharger.mp3';
import Mobile from './sounds/mobile.mp3';
import Motorcycle from './sounds/motorcycle.mp3';
import Pump from './sounds/pump.mp3';
import Ricecooker from './sounds/ricecooker.mp3';

const easing = Bezier.linear;
const duration = 3000;

const Audio = forwardRef((props, ref) => {
	const { state, onload } = props;

	const [BGMState, setBGMState] = useState(false);
	const [BGMVol, setBGMVol] = useState(1);

	const storyRef = useRef();

	const [RicecookerState, setRicecookerState] = useState(false);
	const [MotorcycleState, setMotorcycleState] = useState(false);
	const [EarphoneState, setEarphoneState] = useState(false);
	const [PumpState, setPumpState] = useState(false);
	const [MobileState, setMobileState] = useState(false);
	const [EvchargerState, setEvchargerState] = useState(false);
	const [CableState, setCableState] = useState(false);

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

			case 'motorcycle':
				tweenVolume(0);
				setMotorcycleState(true);
				break;

			case 'ricecooker':
				tweenVolume(0);
				setRicecookerState(true);
				break;

			case 'earphone':
				tweenVolume(0);
				setEarphoneState(true);
				break;

			case 'pump':
				tweenVolume(0);
				setPumpState(true);
				break;

			case 'mobile':
				tweenVolume(0);
				setMobileState(true);
				break;

			case 'evcharger':
				tweenVolume(0);
				setEvchargerState(true);
				break;

			case 'cable':
				tweenVolume(0);
				setCableState(true);
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

	useImperativeHandle(ref, () => ({
		seek(time) {
			storyRef.current.seek(time);
		},
	}));

	return (
		<>
			<ReactHowler src={BGM} playing={BGMState} volume={BGMVol} loop />
			{MotorcycleState && (
				<ReactHowler
					ref={storyRef}
					src={Motorcycle}
					onLoad={() => onSoundsLoad('motorcycle')}
					playing
					loop={false}
				/>
			)}
			{RicecookerState && (
				<ReactHowler
					ref={storyRef}
					src={Ricecooker}
					onLoad={() => onSoundsLoad('ricecooker')}
					playing
					loop={false}
				/>
			)}
			{EarphoneState && (
				<ReactHowler
					ref={storyRef}
					src={Earphone}
					onLoad={() => onSoundsLoad('earphone')}
					playing
					loop={false}
				/>
			)}
			{PumpState && (
				<ReactHowler
					ref={storyRef}
					src={Pump}
					onLoad={() => onSoundsLoad('pump')}
					playing
					loop={false}
				/>
			)}
			{EvchargerState && (
				<ReactHowler
					ref={storyRef}
					src={Evcharger}
					onLoad={() => onSoundsLoad('evcharger')}
					playing
					loop={false}
				/>
			)}
			{MobileState && (
				<ReactHowler
					ref={storyRef}
					src={Mobile}
					onLoad={() => onSoundsLoad('mobile')}
					playing
					loop={false}
				/>
			)}
			{CableState && (
				<ReactHowler
					ref={storyRef}
					src={Cable}
					onLoad={() => onSoundsLoad('cable')}
					playing
					loop={false}
				/>
			)}
		</>
	);
});

export default Audio;
