import React, { FC } from "react";
import { View, StyleSheet, Text } from 'react-native'

const AllMovies: FC = () => {
    return (
        <View style={styles.container}>
            <Text>This is All Movies Screen</Text>
        </View>
    )
}

export default AllMovies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})