import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function Slider() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleBig}>A joke a day keeps the doctor away</Text>
      <Text style={styles.title}>
        If you joke wrong away, your teeth have to pay. (Serious)
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',

    backgroundColor: '#29B363',
    height: 200,
    width: '100%',
  },
  titleBig: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    paddingBottom: 12,
  },

  title: {
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
  },
})
