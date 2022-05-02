import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddNewPost = () => (
  <View style={styles.container}>
    <Header />
  </View>

)

const Header = () => (
  <View style={styles.headerContainer} >
    <TouchableOpacity>
      <Image source={{ uri: 'https://img.icons8.com/small/16/ffffff/back.png' }}
        style={{ height: 30, width: 30 }} />

    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5
  },
  headerText: {
    color:'#fff',
    fontWeight:'700',
    fontSize:20,
    marginRight:25
  }
})

export default AddNewPost