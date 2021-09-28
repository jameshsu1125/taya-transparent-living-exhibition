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
const tweenPreset = { index: 0 };

const Audio = forwardRef((props, ref) => {
	const { state, onload } = props;

	const [BGMState, setBGMState] = useState(false);
	const [BGMVol, setBGMVol] = useState(1);
	const [storyVol, setStoryVol] = useState(1);

	const storyRef = useRef();

	const [RicecookerState, setRicecookerState] = useState(false);
	const [MotorcycleState, setMotorcycleState] = useState(false);
	const [EarphoneState, setEarphoneState] = useState(false);
	const [PumpState, setPumpState] = useState(false);
	const [MobileState, setMobileState] = useState(false);
	const [EvchargerState, setEvchargerState] = useState(false);
	const [CableState, setCableState] = useState(false);

	const tweenVolume = (tar, vol, duration = 2000) => {
		const tarVol = tar === 'BGM' ? BGMVol : storyVol;
		new Tweener({
			from: { vol: tarVol },
			to: { vol },
			duration,
			easing,
			onUpdate: (data) => {
				tweenPreset.index += 1;
				if (tweenPreset.index % 10 === 0) {
					if (tar === 'BGM') setBGMVol(data.vol);
					else setStoryVol(data.vol);
				}
			},
			onComplete: (data) => {
				if (tar === 'BGM') setBGMVol(data.vol);
				else setStoryVol(data.vol);
			},
		});
	};

	useEffect(() => {
		switch (state) {
			case 'bgm':
				setBGMState(true);
				break;

			case 'motorcycle':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setMotorcycleState(true);
				break;

			case 'ricecooker':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setRicecookerState(true);
				break;

			case 'earphone':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setEarphoneState(true);
				break;

			case 'pump':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setPumpState(true);
				break;

			case 'mobile':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setMobileState(true);
				break;

			case 'evcharger':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setEvchargerState(true);
				break;

			case 'cable':
				tweenVolume('BGM', 0);
				setStoryVol(1);
				setCableState(true);
				break;

			case 'back':
			case 'giveUp':
				setRicecookerState(false);
				setEvchargerState(false);
				setMotorcycleState(false);
				setEarphoneState(false);
				setPumpState(false);
				setMobileState(false);
				setCableState(false);

				setBGMState(true);
				tweenVolume('BGM', 1);
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
		fadeout() {
			tweenVolume('STORY', 0, 2000);
		},
	}));

	return (
		<>
			<ReactHowler src={BGM} playing={BGMState} volume={BGMVol} loop />
			{MotorcycleState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Motorcycle}
					volume={storyVol}
					onLoad={() => onSoundsLoad('motorcycle')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{RicecookerState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Ricecooker}
					volume={storyVol}
					onLoad={() => onSoundsLoad('ricecooker')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{EarphoneState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Earphone}
					volume={storyVol}
					onLoad={() => onSoundsLoad('earphone')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{PumpState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Pump}
					volume={storyVol}
					onLoad={() => onSoundsLoad('pump')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{EvchargerState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Evcharger}
					volume={storyVol}
					onLoad={() => onSoundsLoad('evcharger')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{MobileState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Mobile}
					volume={storyVol}
					onLoad={() => onSoundsLoad('mobile')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
			{CableState && (
				<ReactHowler
					playing
					loop={false}
					ref={storyRef}
					src={Cable}
					volume={storyVol}
					onLoad={() => onSoundsLoad('cable')}
					onEnd={() => {
						setStoryVol(() => 0);
					}}
				/>
			)}
		</>
	);
});

export default Audio;
