import Click from 'lesca-click';
import Tweener from 'lesca-object-tweener';
import { useEffect, useRef } from 'react';
import './instruct.less';

const Instruct = (props) => {
	const { children, click, setInstruct } = props;

	const container = useRef();

	useEffect(() => {
		if (click) {
			Click.add('.Instruct', () => {
				Click.remove('.Instruct');
				click?.();
			});
		} else {
			const duration = 500;
			const fromA = { o: 0 };
			const toA = { o: 1 };
			const tweener = new Tweener();

			const set = (e) => {
				container.current.style.opacity = e.o;
			};

			container.current.style.opacity = 0;

			tweener
				.add({
					from: fromA,
					to: toA,
					duration,
					delay: 0,
					onUpdate: (e) => set(e),
					onComplete: (e) => set(e),
				})
				.add({
					from: toA,
					to: fromA,
					duration,
					delay: 4000,
					onUpdate: (e) => set(e),
					onComplete: (e) => {
						set(e);
						setInstruct(false);
					},
				})
				.play();
		}

		return () => {
			Click.remove('.Instruct');
		};
	}, []);
	return (
		<div ref={container} className='Instruct'>
			{children}
		</div>
	);
};
export default Instruct;
