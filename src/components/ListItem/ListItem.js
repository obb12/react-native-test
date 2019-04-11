import React, {Component} from "react"
import {StyleSheet,Text,View} from "react-native"
const ListItem = (props) => (
  <View style={styles.listItem}>
  <Text>
  {props.placename}
  </Text>
    </View>
)
const styles = StyleSheet.create({
  listItem:{
    width:"100%",
    padding:10,
    marginBottom:5,
    backgroundColor:"#EEE"
  },
});
export default ListItem
