import Link from 'next/link'
import styles from './styles.module.scss'

export default function NavBar({links}) {

  console.log(links)
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>


        {links.map((link) => {
          return (
              <Link className={styles.navItem} href={link.url}>{link.description}</Link>
          )
        })}
        
      </ul>
    </nav>
  )
}