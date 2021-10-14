// social links images
import fbLogo from '../../assets/images/fb.png'
import twLogo from '../../assets/images/tw.png'
import igLogo from '../../assets/images/ig.png'


// styles
import './styles.css'


export function SocialLinks() {
  return (
    <div className='social-links'>
      <img src={fbLogo} alt='facebook' />
      <img src={igLogo} alt='instagram' />
      <img src={twLogo} alt='twitter' />
    </div>
  )
}
