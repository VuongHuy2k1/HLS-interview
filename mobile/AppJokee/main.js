import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Data } from './Data'
import React, { useEffect, useState } from 'react'

import { Logs } from 'expo'
import Cookies from 'universal-cookie'
export default function Main() {
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
        <Text style={styles.contentEnd}>
          "That's all the jokes for today! Come back another day!"
        </Text>
      )
    } else {
      return <Text style={styles.content}>{Data[value].content}</Text>
    }
  }
  const button = () => {
    if (value >= Data.length) {
      return <></>
    } else {
      return (
        <View style={styles.bottom}>
          <TouchableOpacity
            style={styles.btnLeft}
            onPress={(e) => likeBtn(e, Data[value].id)}
          >
            <Text style={styles.btnContent}>This is Funny!</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRight}
            onPress={(e) => dislikeBtn(e, Data[value].id)}
          >
            <Text style={styles.btnContent}>This is not funny.</Text>
          </TouchableOpacity>
        </View>
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
    <View style={styles.container}>
      <View style={styles.top}>{content()}</View>

      {button()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    backgroundColor: '#fff',
    height: 'auto',

    width: '100%',
  },
  top: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '94%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  content: { textAlign: 'justify', opacity: 0.6 },
  contentEnd: {
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginTop: 80,
  },
  btnLeft: {
    height: 'auto',
    width: 140,
    backgroundColor: '#2C7EDB',
    justifyContent: 'center',

    alignContent: 'center',
    alignItems: 'center',
  },
  btnRight: {
    height: 'auto',
    width: 140,
    backgroundColor: '#29B363',
    justifyContent: 'center',

    alignContent: 'center',
    alignItems: 'center',
  },
  btnContent: {
    marginVertical: 12,
    color: '#ffff',
    fontWeight: 500,
  },
})
