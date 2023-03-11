import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Data } from './Data'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Logs } from 'expo'
import Cookies from 'universal-cookie'
export default function Main() {
  const [value, setValue] = useState(0)
  const [useData, setUseData] = useState({
    token: 'use12345',
    like: [],
    dislike: [],
  })
  useEffect(() => {
    const cookies = new Cookies()
    set = cookies.set('useData', useData, { path: '/' })
    console.log(cookies.get('useData'))
  }, [useData])

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
    var listId = useData.like
    var dislike = useData.dislike
    setValue(value + 1)
    setUseData({ token: 'use12345', like: [...listId, id], dislike })
  }
  const dislikeBtn = (e, id) => {
    var listId = useData.dislike
    var like = useData.like
    setValue(value + 1)
    setUseData({ token: 'use12345', like, dislike: [...listId, id] })
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
    paddingVertical: 20,
    width: '100%',
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
    marginTop: 30,
  },
  content: { textAlign: 'justify' },
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
    width: 120,
    backgroundColor: '#2C7EDB',
    justifyContent: 'center',

    alignContent: 'center',
    alignItems: 'center',
  },
  btnRight: {
    height: 'auto',
    width: 120,
    backgroundColor: '#29B363',
    justifyContent: 'center',

    alignContent: 'center',
    alignItems: 'center',
  },
  btnContent: {
    marginVertical: 10,
    color: '#fff',
  },
})
