import Click from 'lesca-click';
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Animation from './tayaAnimation';
import './tayalogo.less';

const TayaLogo = forwardRef((props, ref) => {
	const { commingSoon } = props;

	const logo = useRef();
	const textRef = useRef();
	const animation = useRef();

	useEffect(() => {
		animation.current = new Animation({ logo, textRef });
		Click.add('.TayaLogo', () => {
			window.open('https://www.taya.com.tw/');
		});
	}, []);

	useEffect(() => {
		if (commingSoon) {
			animation.current.in(3500);
		}
	}, [commingSoon]);

	useImperativeHandle(ref, () => ({
		out() {
			animation.current.out();
		},
	}));

	return (
		<div ref={logo} className='TayaLogo'>
			<div className='mark' />
			<div ref={textRef} className='text' />
		</div>
	);
});
export default TayaLogo;
