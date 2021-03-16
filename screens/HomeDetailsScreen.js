import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {useSelector} from 'react-redux';

const HomeDetailsScreen = props => {

  const {houseId} = props.route.params;
  
  console.log("1111111111",houseId);
  const house = useSelector(state => state.house.houses.find(house => house._id == houseId));
  
  
      return (
        <View>
            <Text>Home Details Screen</Text>
        </View>
  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20
      },
      heading: {
        marginHorizontal: 20,
        marginBottom: 10
      },
      title: {
        fontSize: 24
      },
      image: {
        width: '100%',
        height: 200
      },
      group: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
      },
      label: {
        fontSize: 18
      },
      value: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1
      }
});

export default HomeDetailsScreen;