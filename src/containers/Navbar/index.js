import { Button } from '../../components/Button'
import { Logo } from '../../components/Logo'

import './styles.css'

export function Navbar() {
  return (
    <div className='navbar'>
      <Logo />
      <Button buttonText="Sign Up"/>
    </div>
  )
}
