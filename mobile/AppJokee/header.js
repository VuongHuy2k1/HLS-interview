import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          style={styles.avatar}
          source={require('../AppJokee/assets/logo.png')}
        ></Image>
      </View>
      <View style={styles.right}>
        <View style={styles.content}>
          <Text style={styles.title}>Handicrafed by</Text>
          <Text style={styles.name}> Jim HLS</Text>
        </View>
        <Image
          style={styles.avatar}
          source={require('../AppJokee/assets/avatar.png')}
        ></Image>
      </View>
    </View>
  )
}

const newLocal = 0.9
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    width: '100%',
    paddingBottom: 10,
  },
  left: {
    width: '50%',
    height: '100%',
    paddingLeft: 20,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  title: { color: '#9E9E9E' },
  name: { opacity: 0.8 },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
})
