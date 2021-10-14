// social links images
import shareImg from '../../assets/images/share.png'
import infoImg from '../../assets/images/info.png'


// styles
import './styles.css'


export function UsefulLinks() {
  return (
    <div className='useful-links'>
      <img src={shareImg} alt='share link' />
      <img src={infoImg} alt='info link' />
    </div>
  )
}
