import styles from './style.module.scss'

function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This appis created as part of Hlsolutions program. The materials
        con-tained on this webite are provied for general infomation only and do
        not constitule ant form of advice. HLS assumes no responsibility for the
        accuracy of any particular statement and accepts no liablity for any
        loss or damage which may arise from reliance on the infor-mation
        contained on this site
      </h1>
      <h1 className={styles.content}>Copyright 2021 HLS</h1>
    </div>
  )
}

export default Footer
