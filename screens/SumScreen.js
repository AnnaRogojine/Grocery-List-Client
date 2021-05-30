import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Modal, TextInput, Alert, Text, View, ActivityIndicator, FlatList } from 'react-native';
import PriceCheck from '../components/PriceCheck';
import { useApi } from '../hooks/api.hook';
import { useDispatch, useSelector } from 'react-redux';
import * as houseAction from '../redux/actions/houseAction';
import { fetchFavorites } from '../redux/actions/favoritesAction';
import { Dimensions } from 'react-native';
import { concat } from 'react-native-reanimated';
const { width } = Dimensions.get("window");

const SumScreen = props => {
    const { lat, long, radius, products, listid, supermarkets } = props.route.params;
    const [isLoading, setIsLoading] = useState(false);
    const api = useApi();
    const [priceView,setpriceView]=useState([]);
    var price=0;
    var arr=[];
    //const [superMarkets, setsuperMarkets] = useState([]);
    useEffect(() => {
            _count();
    
    }, [])
   
    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
   
 const _count = async () => {
    var price = 0;
    var arr=[];
    for (let i = 0; i < supermarkets.length; i++) {
        price = 0;
        arr=[];
        for (let j = 0; j < products.length; j++) {
            const result = await api.getPrice(supermarkets[i].store_id, products[j].product_barcode);
            var sothing=result[0].store_product_last_price;
            console.log((sothing===undefined));
            // if(result[0].store_product_last_price ==='undefined'){
            //     console.log("I am undefined");
            //     arr.push(products[j]);
            //     console.log(arr);

            // }
            if(result && result[0].store_product_last_price) {
               
                //console.log("SoreId:",supermarkets[i].store_id, "result:", result[0].store_product_last_price,"kamut:",products[j].quantity, "BarCode", products[j].product_barcode);
                var p=result[0].store_product_last_price
                // console.log(p);
                price=price+p*products[j].quantity;
            }
           
        }
        console.log("*********************************************")
        console.log(price.toFixed(2));
        // setpriceView({cart_price:price.toFixed(2),missing:arr,supermarket:supermarkets[i]});
        // console.log(priceView);
    }
   
}

    if (supermarkets.length === 0 && !isLoading) {
        return (
            <View style={styles.centered}>

                <Text style={styles.centered}>לא נמצאו סופרמרקטים נתונים לחישוב</Text>


            </View>

        );
    }


    return (
        <View style={styles.container}>
            {/* <FlatList

                data={supermarkets}
                keyExtractor={item => item._id}

                renderItem={({ item }) => (
                    <PriceCheck
                        navigation={props.navigation}
                        item={item}
                        listid={listid}
                        products={products}
                    />
                )}
            />
             */}
            <Text>{JSON.stringify(priceView)}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,

    },
    row: {

        flexDirection: "row"
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
})
export default SumScreen;