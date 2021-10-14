// components
import { Menu } from '../../components/Menu'
import { SocialLinks } from '../../components/SocialLinks'
import { UsefulLinks } from '../../components/UsefulLinks'

// styles
import './styles.css'


export function Sidebar() {
  return (
    <div className='sidebar'>
      <Menu />
      <SocialLinks />
      <UsefulLinks />
    </div>
  )
}
