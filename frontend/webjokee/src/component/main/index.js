import styles from './style.module.scss'
import { Data } from '../Data'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

function Main() {
  const [value, setValue] = useState(0)
  const [useData, setUseData] = useState({
    token: 'use12345',
    like: [],
    dislike: [],
  })
  const cookies = new Cookies()

  useEffect(() => {
    const res = cookies.get('useData')

    if (res) {
      setValue(res.reading)
    } else {
      setValue(0)
    }
  }, [])
  function content() {
    if (value >= Data.length) {
      return (
        <h1 className={styles.contentEnd}>
          "That's all the jokes for today! Come back another day!"
        </h1>
      )
    } else {
      return <h1 className={styles.content}>{Data[value].content}</h1>
    }
  }
  const button = () => {
    if (value >= Data.length) {
      return <></>
    } else {
      return (
        <div className={styles.bottom}>
          <button
            className={styles.btnLeft}
            onClick={(e) => likeBtn(e, Data[value].id)}
          >
            <h1 className={styles.btnContent}>This is Funny!</h1>
          </button>
          <button
            className={styles.btnRight}
            onClick={(e) => dislikeBtn(e, Data[value].id)}
          >
            <h1 className={styles.btnContent}>This is not funny.</h1>
          </button>
        </div>
      )
    }
  }

  const likeBtn = (e, id) => {
    var like = useData.like
    var newLike = [...like, id]
    var dislike = useData.dislike
    var reading = value + 1
    var variable = {
      token: useData.token,
      like: newLike,
      dislike: useData.dislike,
      reading: reading,
    }
    setValue(value + 1)
    setUseData({ token: 'use12345', like: newLike, dislike })
    cookies.set('useData', variable, { path: '/' })
  }
  const dislikeBtn = (e, id) => {
    var dislike = useData.dislike

    var newDislike = [...dislike, id]
    var like = useData.like
    var reading = value + 1
    var variable = {
      token: useData.token,
      like: useData.like,
      dislike: newDislike,
      reading: reading,
    }
    setValue(value + 1)
    setUseData({ token: 'use12345', like, dislike: newDislike })
    cookies.set('useData', variable, { path: '/' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>{content()}</div>

      {button()}
    </div>
  )
}

export default Main
