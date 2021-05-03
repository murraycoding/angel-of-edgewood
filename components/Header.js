import Link from 'next/link'
import styles from '../styles/Header.module.scss'
import NavLink from '../components/NavLink'


export default function Header() {
  return (
    <header>
      <div className={styles.topLogo}>
        <img src='Logo.png' />
      </div>
      <nav>
        <ul>
          <NavLink link="" name="Home"/>
          <NavLink link="about" name="About Us"/>
          <NavLink link="calendar" name="calendar" />
          <NavLink link="photos" name="Photo Gallery" />
          <NavLink link="give" name="Give Back" />
        </ul>
      </nav>
    </header>
  )
}