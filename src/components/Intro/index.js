// styles
import './styles.css';

export function Intro({ text1, text2, text3 }) {
  return (
    <div className='intro'>
      <h3>{text1}</h3>
      <h1>{text2}</h1>
      <h1>{text3}</h1>
    </div>
  );
}
