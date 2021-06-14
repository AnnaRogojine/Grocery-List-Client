import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,  Image } from 'react-native';




const imageScreen = props =>{
    const {uri} = props.route.params;
 
    
    return (
        <View>
            <Image  source={{uri:uri ?? require('../assets/images/DefaultPic.png')}}
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