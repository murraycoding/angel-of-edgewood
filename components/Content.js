import styles from '../styles/Content.module.scss'

export default function Content({ image, heading, content, flipped }) {
  return (
    <section className={flipped ? styles.flippedContentSection : styles.contentSection}>
      <div className={styles.contentSectionImage}>
        {image}
      </div>
      <h2 className={styles.contentSectionTitle}>
        {heading}
      </h2>
      <p className={styles.contentSectionContent}>
        {content}
      </p>
    </section>
  )
}