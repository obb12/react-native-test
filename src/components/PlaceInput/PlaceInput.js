import React, {Component} from "react"
import {StyleSheet,Button,TextInput,View} from "react-native"
export default class PlaceInput extends Component{
  state = {
    placename: '',
  }
  placenamechanged = val => {
    console.log(val)
    this.setState({
      placename:val
    })
  }
  onPlaceAdded = () => {

  }
  placeSubmitHandler = () => {
    console.log(this.state)
    if(this.state.placename.trim === ""){
      return;
    }
    this.props.onPlaceAdded(this.state.placename)
  //this.setState({ places: [...this.state.places, this.state.placename] }) //simple value
  }
  render(){
    return (
      <View style={styles.inputcontainer}>
        <TextInput style={styles.input} placeholder="An awesome place" value={this.state.placename} onChangeText={this.placenamechanged}/>
        <Button onPress={this.placeSubmitHandler} style={styles.button} title="Add"/>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  inputcontainer:{
  //  flex:1,
    flexDirection:'row',
    width:"100%",
    justifyContent:'space-between',
    alignItems:"center"
  },

  input:{
    width:"70%"
  },
  button:{
    width:"30%"
  },

});
