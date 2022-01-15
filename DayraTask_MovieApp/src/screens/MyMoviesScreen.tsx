import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native/';
import AsyncStorage from "@react-native-community/async-storage";
import { MyMoviesComponent } from "../components";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParams";

const { height, width } = Dimensions.get('screen');

type MyMovieScreenProp = StackNavigationProp<RootStackParamList, 'MyMovieScreen'>;

const MyMoviesScreen: FC = () => {


    const navigation = useNavigation<MyMovieScreenProp>();

    const [FavouritesList, setFavouritesList] = useState([]);

    const [MyMoviesList, setMyMoviesList] = useState([]);


    const fetchMovies = async () => {

        const favourites = await AsyncStorage.getItem('Favourites');
        const mine = await AsyncStorage.getItem('MyMovies');

        if (favourites != null) {
            setFavouritesList(JSON.parse(favourites));
        }
        if (mine != null) {
            setMyMoviesList(JSON.parse(mine));
        }


    }

    useEffect(() => {

        fetchMovies();

    }, []);


    return (
        <View style={{ width: width, height: height, backgroundColor: "black", flexDirection: "column" }}>
            <View style={styles.smallerView}>
                <Text style={styles.text}>Favourties</Text>
                <FlatList
                    horizontal={true}
                    data={FavouritesList}
                    extraData={FavouritesList}
                    renderItem={({ item }) => (
                        <View
                            style={styles.container}>
                            <MyMoviesComponent
                                MovieItem={item} />
                        </View>
                    )} />
            </View>
            <View style={styles.smallerView}>
                <Text style={styles.text}>My Movies</Text>
                <FlatList
                    horizontal={true}
                    data={MyMoviesList}
                    extraData={MyMoviesList}
                    renderItem={({ item }) => (
                        <View
                            style={styles.container}>
                            <MyMoviesComponent
                                MovieItem={item} />
                        </View>
                    )} />
            </View>
            <View style={styles.smallerView}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('AddMovie')
                    }}
                >
                    <Image style={{ height: 50, width: 50, marginBottom: 20, tintColor: "white" }}
                        source={require('../../assets/plus.png')}
                    />
                </TouchableOpacity>
            </View>
        </View >

    )
}

export default MyMoviesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 1,

        width: width,
        height: height / 4,
    },
    text: {
        color: '#fff',
        fontSize: 0.05 * width,
        textAlign: "left",
        alignContent: "flex-start",
        alignItems: "flex-start",
        alignSelf: "flex-start",
        fontWeight: "bold",
        margin: 10
    },
    biggerView: {
        flexDirection: "column"
    },
    smallerView: {
        width: width,
        height: height / 3,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flexDirection: "column"
    }
})