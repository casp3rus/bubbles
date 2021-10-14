
// images
import bubble from '../../assets/images/bubble.png';
// styles
import './styles.css';

export default function Bubbles() {
  return (
    <div className='bubbles'>
      <div>•</div>
      <img src={bubble} alt='bubble' />
      <div>+</div>
      <div>•</div>
      <img src={bubble} alt='bubble' />
      <img src={bubble} alt='bubble' />
      <img src={bubble} alt='bubble' />
      <img src={bubble} alt='bubble' />
      <img src={bubble} alt='bubble' />
      <img src={bubble} alt='bubble' />
    </div>
  );
}
