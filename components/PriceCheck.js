import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useApi } from '../hooks/api.hook';

const PriceCheck = (props) => {
    const price = 0;
    const [Missed, setMissed] = useState([]);
    const [Price, setPrice] = useState([]);
    const api = useApi();
    // const _count = async () => {
    //     for (let i = 0; i < props.products.length; i++) {
    //         //console.log(store_id, props.products[i].product_barcode);
    //         const result = await api.getPrice(props.item.store_id, props.products[i].product_barcode);
    //         if (result) {
    //             console.log(result);
    //         // price = result.store_product_last_price * props.products[i].quantity;
    //             //console.log(result.store_product_last_price);
    //         }
    //         else {
    //             // price = price + 0;
    //             // setMissed(result);
    //         }
    //     }
    //     setPrice(price);
    // }
    // _count();
    return (
        <TouchableOpacity /*onPress={() => props.navigation.navigate('Home', {
            id: props.item._id,
            items: props.item.items
        })}*/>
            <View style={styles.listItem}>
                <Image
                    source={{ uri: 'https://sloanreview.mit.edu/wp-content/uploads/2017/09/MAG-Simchi-Price-Optimization-Marketing-Analytics-Performance-Promotion-Pricing-1200-1200x630.jpg' }}
                    style={styles.coverImage}

                />

                <View style={styles.description}>
                    <Text style={styles.title}>{props.item.sub_chain_name}</Text>
                    <Text style={styles.descriptionText}>
                        מרחק מהבית:{props.item.distance}
                    </Text>
                    <Text style={styles.descriptionText}>
                        {props.item.store_id}
                    </Text>
                </View>
                {/* <MaterialCommunityIcons style={styles.icon} size={40} name={'recycle'}
                    onPress={() => {
                       // {toggleModalVisibility}
                       { toDo(props.userID, props.item.ListName, props.item.items) }
                    }} /> */}

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
        paddingHorizontal: 40,
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
export default PriceCheck;