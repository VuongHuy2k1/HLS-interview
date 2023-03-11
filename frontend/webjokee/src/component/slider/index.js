import styles from './style.module.scss'

function Slider() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleBig}>A joke a day keeps the doctor away</h1>
      <h1 className={styles.title}>
        If you joke wrong away, your teeth have to pay. (Serious)
      </h1>
    </div>
  )
}

export default Slider
