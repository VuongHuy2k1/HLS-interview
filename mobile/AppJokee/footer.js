import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        This appis created as part of Hlsolutions program. The materials
        con-tained on this webite are provied for general infomation only and do
        not constitule ant form of advice. HLS assumes no responsibility for the
        accuracy of any particular statement and accepts no liablity for any
        loss or damage which may arise from reliance on the infor-mation
        contained on this site
      </Text>
      <Text style={styles.content}> Copyright 2021 HLS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: '#EBEBEB',
    borderTopWidth: 2,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    height: 'auto',
    width: '100%',
    marginTop: 80,
    paddingHorizontal: 20,
    marginBottom: 10,
    bottom: 0,
  },
  title: { textAlign: 'center', color: '#9E9E9E', marginTop: 18 },
  content: {
    fontWeight: 600,
    fontSize: 18,
    color: '#646464',
    marginTop: 18,
  },
})
