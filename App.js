import React from 'react';
import { StyleSheet, TextInput,Text, View,Button } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
export default class App extends React.Component {
  state = {
    places:[
      'helsinki'
    ]
  }
  placenamechanged = val => {
    console.log(val)
    this.setState({
      placename:val
    })
  }
  placeSubmitHandler = placeName => {

  this.setState({ places: [...this.state.places, placeName] }) //simple value
  }
  render() {

    return (
      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeSubmitHandler}/>
      <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding:20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  placescontainer:{
    width:"100%",
  },
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
