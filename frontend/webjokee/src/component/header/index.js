import styles from './style.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img
          alt=""
          className={styles.avatar}
          src={process.env.PUBLIC_URL + '/lg.jpg'}
        ></img>
      </div>

      <div className={styles.right}>
        <div className={styles.content}>
          <h3 className={styles.title}>Handicrafed by</h3>
          <h3 className={styles.name}>Vuong Huy</h3>
        </div>
        <img
          alt=""
          className={styles.avatar}
          src={process.env.PUBLIC_URL + '/avatar.jpg'}
        ></img>
      </div>
    </div>
  )
}

export default Header
