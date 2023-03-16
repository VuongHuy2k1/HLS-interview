import styles from './style.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          alt=""
          className={styles.avatar}
          src={process.env.PUBLIC_URL + '/logo.png'}
        ></img>
      </div>

      <div className={styles.right}>
        <div className={styles.content}>
          <h3 className={styles.title}>Handicrafed by</h3>
          <h3 className={styles.name}>Jim HLS</h3>
        </div>
        <img
          alt=""
          className={styles.avatar}
          src={process.env.PUBLIC_URL + '/avatar.png'}
        ></img>
      </div>
    </div>
  )
}

export default Header
