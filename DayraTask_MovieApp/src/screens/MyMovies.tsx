import React, { FC } from "react";
import { View, StyleSheet, Text } from 'react-native'

const MyMovies: FC = () => {
    return (
        <View style={styles.container}>
            <Text>This is My Movies Screen</Text>
        </View>
    )
}

export default MyMovies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})