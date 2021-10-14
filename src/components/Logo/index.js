import logoImg from '../../assets/images/logo.png'

// styles
import './styles.css'

export function Logo() {
  return (
    <div className='logo'>
      <img src={logoImg} />
    </div>
  )
}
