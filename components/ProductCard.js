import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';

const ProductCard = ({ addItem, ...props }) => {
    return (
        <TouchableOpacity onPress={() => {
            addItem(props.product_name, props.product_unit_name, props.manufacturer_id, props.product_barcode, props.product_description, props.quantity, props.manufacturer_name)
        }}>

            <View style={styles.card}>
                <View style={styles.description}>
                    <Text style={styles.title}>
                        {props.product_name.length > 30 ? props.product_name.slice(0, 30) + '...' : props.product_name}
                    </Text>

                </View>
                <View>
                    <Text style={styles.title}>
                        {props.manufacturer_name}
                    </Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptionText}>
                        {props.product_description}
                    </Text>
                </View>


            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    c: {
        marginTop: 50,
    },
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        height: 130,
        margin: 10
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    titleContainer: {
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray'
    },


    year: {

        height: 30,
        width: 80,
        borderRadius: 15,
        position: 'absolute',
        right: 100,


    },
    yearText: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    description: {
        margin: 10
    },
    descriptionText: {
        fontSize: 16,
        color: 'gray'
    }
});

export default ProductCard;