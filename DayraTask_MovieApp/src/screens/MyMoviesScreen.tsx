import React, { FC } from "react";
import { View, StyleSheet, Text } from 'react-native'

const MyMoviesScreen: FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is My Movies Screen</Text>
        </View>
    )
}

export default MyMoviesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 45,
        color: 'black'
    }
})