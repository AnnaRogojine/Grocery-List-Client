import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import OldList from '../components/OldList';
import { useApi } from '../hooks/api.hook';
import {fetchFavorites, addToFavorites, removeFromFavorites} from '../redux/actions/favoritesAction';
import {useDispatch, useSelector} from 'react-redux';



const OldListsScreen = props => {
    const { userID } = props.route.params;
    const api = useApi();
    const {favoriteItemIds, isInitialized: isFavoritesInitialized} = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [oldList, setoldList] = useState([]);
    



    useEffect(() => {
        const init = async () => {
            setIsLoading(true);
            try {
                const oldData = await api.getMyHistory(userID);
                setoldList(oldData);
                
                if(!isFavoritesInitialized){
                    await dispatch(fetchFavorites(userID));
                }

            } finally {
                setIsLoading(false);
            }
        }
        init();
    }, [])

    const _addFav = async (HistoryId) => {

        await api.addFav(userID, HistoryId);
        dispatch(addToFavorites(HistoryId));
    }
    const _removeFav = async (HistoryId) => {
        
        await api.removeFav(userID, HistoryId);
        dispatch(removeFromFavorites(HistoryId));
    }


    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (oldList.length == 0 && !isLoading) {
        return (
            <View style={styles.centered}>

                <Text style={styles.centered}>לא בוצעו רכישות</Text>


            </View>

        );
    }

    return (

        <View style={styles.container}>


            <FlatList
                data={oldList}

                keyExtractor={item => item._id}

                renderItem={({ item }) => (
                    <OldList

                        navigation={props.navigation}
                        item={item}
                        isLiked={favoriteItemIds.includes(item._id)}
                        addFav={_addFav}
                        removeFav={_removeFav}
                        userID={userID}
                        


                    />
                )}
            />
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


})
export default OldListsScreen;