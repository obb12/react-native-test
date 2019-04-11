import React from 'react'
import {StyleSheet,View} from 'react-native'
import ListItem from '../ListItem/ListItem'
const PlaceList = props => {
  const placesoutput = props.places.map((place,i) => {
    return <ListItem key={i}  placename={place}/>
  })
  return (
    <View style={styles.placescontainer}>
    {
      placesoutput
    }
    </View>
  )
}
const styles = StyleSheet.create({

placescontainer:{
  width:"100%",
},
});
