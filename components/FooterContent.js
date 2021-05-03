import styles from '../styles/FooterContent.module.scss'

export default function FooterContent({ title, children }) {
  return (
    <div className={styles.footerContent}>
      <h3><span className={styles.footerContentTitle}>{title}</span></h3>
      {children}
    </div>
  )
}