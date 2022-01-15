import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { AllMoviesScreen, MyMoviesScreen, MovieScreen, AddMovieScreen } from '../screens'
import { Dimensions, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const { Navigator, Screen } = createStackNavigator();
const Stack = createStackNavigator();
const { height, width } = Dimensions.get('screen');
const Tab = createBottomTabNavigator();



const MainStack: FC = () => {
    return (
        <Navigator screenOptions={{ headerShown: true }}>
            <Screen name="AllMovies2" component={AllMoviesScreen}
                options={{
                    title: 'Discover Movies',
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#0E86D4',
                        height: 0.09 * height
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 0.06 * width,

                    },
                }}
            />

            <Screen name="MovieScreen" component={MovieScreen}
                options={{
                    title: 'Discover Movies',
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#0E86D4',
                        height: 0.09 * height,

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 0.06 * width,

                    },
                }} />

            <Screen name="AddMovie" component={AddMovieScreen}
                options={{
                    title: 'Add New Movies',
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#0E86D4',
                        height: 0.09 * height,

                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 0.06 * width,

                    },
                }} />
        </Navigator>
    );
}


const AppStack: FC = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
            tabBarStyle: {
                height: 0.07 * height

            }
        }} >
            <Tab.Screen name="All Movies" component={MainStack} options={{
                header: () => null,
                tabBarLabelStyle: {

                    fontSize: 0.03 * width
                },
                tabBarIcon: () => (
                    <Image
                        source={require('../../assets/allmovies.png')}
                        style={{ width: 28, height: 28, tintColor: '#0E86D4' }}
                    />
                ),
            }} />
            <Tab.Screen name="My Movies" component={MyMoviesScreen}
                options={{

                    tabBarIcon: () => (
                        <Image
                            source={require('../../assets/mymovies.png')}
                            style={{ width: 28, height: 28, tintColor: '#0E86D4' }}
                        />
                    ),
                    title: 'My Movies',
                    tabBarLabelStyle: {

                        fontSize: 0.03 * width
                    },
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: '#0E86D4',
                        height: 0.09 * height
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 0.06 * width,

                    },
                }}
            />
        </Tab.Navigator>
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
