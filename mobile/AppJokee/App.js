import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from './header'
import Slider from './slider'
import Main from './main'
import Footer from './footer'
export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <Slider />
        <Main />
        <Footer />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  scroll: {
    height: 100000000,
  },
})
