// styles
import { Button } from '../../components/Button';
import { Intro } from '../../components/Intro';

// styles
import './styles.css';

export function Content() {
  return (
    <div>
      <div className='content'>
        <div>
          <Intro text1='Welcome to our' text2="World's" text3='Creative Studio' />
        </div>
          <Button buttonText='Take a tour' />
        <div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
