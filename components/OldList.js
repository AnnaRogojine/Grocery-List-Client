import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const OldList = ({ userID, removeFav, addFav, isLiked, ...props }) => {

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('HistoryListDitails', {
            id: props.item._id,
            items: props.item.items
        })}>
            <View style={styles.listItem}>
                <TouchableOpacity onPress={() => props.navigation.navigate('imageScreen', {
            uri:props.item.uri
        })}>
                    <Image  
                    
                        source={{uri:props.item.uri ??  require('../assets/images/DefaultPic.png')}}
                        style={styles.coverImage}

                    />
                </TouchableOpacity>

                <View style={styles.description}>
                    <Text style={styles.title}>{props.item.ListName}</Text>

                    <Text style={styles.descriptionText}>
                        סה"כ:{'\u20AA'}{props.item.price ? props.item.price:"NoPrice"}
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                        סופרמרקט :{props.item.superMarketName}
                    </Text>
                    <Text style={{ fontSize: 11 }}>
                        תאריך הזמנה:{props.item.date.substring(4, 21)}
                    </Text>


                </View>
                <MaterialIcons style={styles.icon} size={40} name={isLiked ? 'favorite' : 'favorite-border'}
                    onPress={() => {
                        isLiked ?
                            removeFav(props.item._id) : addFav(props.item._id);
                    }} />

            </View>

        </TouchableOpacity >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',


    },


    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    coverImage: {
        width: 80,
        height: 80,
        borderRadius: 8
    },

    title: {
        fontSize: 18,
        width: 200,

    },
    icon: {

        color: "#72bcd4",
        width: 50,


    },

    description: {
        margin: 10
    },
    descriptionText: {
        fontSize: 16,
        color: 'gray'
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
});
export default OldList;