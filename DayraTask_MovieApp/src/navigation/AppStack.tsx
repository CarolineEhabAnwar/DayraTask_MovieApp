import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { AllMovies, MyMovies } from '../screens'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AppStack: FC = () => {


    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="AllMovies" component={AllMovies} />
            <Screen name="MyMovies" component={MyMovies} />
        </Navigator>
    )
}

export default AppStack;


const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
