import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';


const imageScreen = props =>{
    const { uri} = props.route.params;
    const DEFAULT_PHOTO_URL = 'https://icons.iconarchive.com/icons/praveen/minimal-outline/512/gallery-icon.png';
    
    return (
        <View>
            <Image  source={uri ? {uri:uri}:{uri:DEFAULT_PHOTO_URL}}
                        style={styles.coverImage}

                    />
        </View>
    );
}

const styles = StyleSheet.create({
    coverImage: {
        width: '100%',
        height: '100%',
        borderRadius: 8
    },
    
});

export default imageScreen;