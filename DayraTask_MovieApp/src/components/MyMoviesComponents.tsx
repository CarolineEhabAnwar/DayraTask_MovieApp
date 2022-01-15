import { useNavigation } from '@react-navigation/native';
import React, { FC, useEffect, useState } from 'react';
import { Dimensions, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackParams';
import { useDispatch } from 'react-redux';
import { addFavouriteMovie, removeFavouriteMovie } from '../actions/MovieActions';
import AsyncStorage from "@react-native-community/async-storage";


const { height, width } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window');


type Props = {
    MovieItem: any
};

type MyMovieComponentProp = StackNavigationProp<RootStackParamList, 'MovieComponent'>;


const MyMoviesComponent: FC<Props> = (MovieItem) => {

    const navigation = useNavigation<MyMovieComponentProp>();
    const dispatch = useDispatch();
    const [isFavourite, setIsFavourite] = useState(true);
    const [favouriteList, setFavouriteList] = useState<any[]>([]);

    const [myList, setMyList] = useState<any[]>([]);

    const fetchMovies = async () => {

        const favourites = await AsyncStorage.getItem('Favourites');
        const mine = await AsyncStorage.getItem('MyMovies');

        if (favourites != null) {
            setFavouriteList(JSON.parse(favourites));
        }
        if (mine != null) {
            setMyList(JSON.parse(mine));
        }

    }


    // I was supposed to dispatch the addFavouriteMovie action in the Reducer, but due to some errer (always returning
    // undefined). I couldn't use the reducer and had to make my own function for adding and removing movies 
    // from the favourites list

    // const AddMovieToFavourite = (FavMovie: Movie) => dispatch(addFavouriteMovie(FavMovie))
    // const RemoveMovieFromFavourite = (FavMovie: Movie) => dispatch(removeFavouriteMovie(FavMovie))

    const AddMovieToFavourite = async (favMovie: any) => {
        let temp = favouriteList;
        temp.push(favMovie)
        setFavouriteList(temp);
        console.log(temp)
        await AsyncStorage.setItem('Favourites', JSON.stringify(temp));

    }

    const RemoveMovieFromFavourite = async (favMovie: any) => {
        let temp = favouriteList;
        temp.forEach((element, index) => {
            if (element.id == favMovie.id) temp.splice(index, 1);
        });
        if (temp == null) {
            temp = [];
            await AsyncStorage.removeItem('Favourites');
            setFavouriteList(temp);
        }
        else {
            await AsyncStorage.setItem('Favourites', JSON.stringify(temp));
            setFavouriteList(temp);
        }
    }



    useEffect(() => {
        fetchMovies();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.posterContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MovieScreen', {
                    MovieItem
                })}>
                    <Text style={styles.text}>{MovieItem.MovieItem.title}</Text>
                    <Image style={styles.poster} source={{
                        uri: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
                            + MovieItem.MovieItem.poster_path
                    }}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.favourite}>
                <TouchableOpacity onPress={() => {
                    if (isFavourite) {
                        RemoveMovieFromFavourite(MovieItem)
                        setIsFavourite(false);
                    }
                    else {
                        AddMovieToFavourite(MovieItem.MovieItem);
                        setIsFavourite(true);

                    }
                }}>
                    {isFavourite ? <Image style={{ height: 30, width: 30, marginBottom: 20 }}
                        source={require('../../assets/filledheart.png')}
                    /> : <Image style={{ height: 30, width: 30, marginBottom: 20 }}
                        source={require('../../assets/heart.png')}
                    />
                    }

                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyMoviesComponent;

const styles = StyleSheet.create({

    container: {
        width: width / 2.1,
        height: height / 1.73,
        alignSelf: 'center',
        backgroundColor: '#F0F8FF',
        borderRadius: 5,
        borderColor: 'white',
        margin: 5,
        alignContent: "center",
        alignItems: "center",
        flexDirection: "column",
        opacity: 50
    },
    posterContainer: {

        width: width / 2.1,
        height: height / 1.9,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center"


    },

    favourite: {
        height: 40,
        width: width / 2.1,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center"

    },
    text: {
        color: 'black',
        fontSize: 0.1 * width / 2.1,
        alignSelf: 'center',
        margin: 10,
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
        textAlignVertical: "center",
        textDecorationStyle: 'solid'
    },
    poster: {
        width: 0.45 * windowWidth.width,
        height: 0.39 * windowWidth.height,
        transform: [{ scale: 1 }],
        resizeMode: 'contain',
        alignContent: 'center',
        alignSelf: 'center',
        margin: 5,
        flexWrap: 'wrap',
        flex: 1
    }
})