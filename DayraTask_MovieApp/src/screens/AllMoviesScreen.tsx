import React, { FC, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import MovieComponent from '../components/MovieComponent'
import { useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import { Text } from "react-native-elements";


const { height, width } = Dimensions.get('screen');


const AllMoviesScreen: FC = (props) => {

    const dispatch = useDispatch();


    const [MoviesList, setMoviesList] = useState([]);
    const [isLoaded, setLoading] = useState(false);


    // Here I was supposed to fire the dispatch function
    // const fetchMovies = () => dispatch(getAllMovies())
    // but as I mentioned in the other screens, the Redux framework had an error that I couldn't resolve and hence used 
    // another function

    const fetchMovies = async () => {

        await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2af133461cc649b3d75d39cd9801f77d&page=1')
            .then(async response => await response.json())
            .then(async data => {
                setMoviesList(data.results);
                setLoading(true);
            })

    }

    useEffect(() => {

        fetchMovies();

    }, []);


    return (
        <View style={{ alignContent: "center" }}>
            {isLoaded ? <View style={{ backgroundColor: "black" }} >
                <FlatList
                    data={MoviesList}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <View
                            style={styles.container}>
                            <MovieComponent
                                MovieItem={item} />
                        </View>
                    )} />
            </View > : <Text style={styles.text}>Loading ... </Text>}
        </View>



    );

}


const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: '#212121',
        padding: 16
    },
    listText: {
        fontSize: 30
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 1,
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center"


    },
    text: {
        color: '#0E86D4',
        fontSize: 0.05 * width,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        marginTop: height / 2.6
    }
});


export default AllMoviesScreen;