import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text, FlatList, Keyboard, Dimensions } from 'react-native'
import MovieComponent from '../components/MovieComponent'
import { useDispatch, useSelector } from 'react-redux';
import { addFavouriteMovie, getAllMovies } from "../actions/MovieActions";
import { Movie } from '../constants/Movie';
import { MyState } from "../reducers/MovieReducer";
import { AppState } from "../constants/Store";
import { useLinkProps } from "@react-navigation/native";
import { Header } from 'react-native-elements';


const { height, width } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window');


const AllMovieScreen: FC = (props) => {

    const dispatch = useDispatch();


    const [MovieItem, setMovieItem] = useState(new Movie());
    const [MoviesList, setMoviesList] = useState([]);


    const [movieToBeAddedToFavourites, setMovietoBeAddedToFavourites] = useState(new Movie());

    const [isLoaded, setLoading] = useState(false);
    // setMovieList(useSelector((state: IState) => state.AllMoviesList))


    const Launch = async () => {
        await dispatch(getAllMovies());

    }

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

    // const bagarab = useSelector(async (state: AppState) => (await state).isLoaded)
    // console.log(bagarab);





    const addMovieToFavourites = (MovieItem: any) => dispatch(addFavouriteMovie(movieToBeAddedToFavourites))

    return (

        <View style={{ backgroundColor: "black" }}>
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
        // width: 0.45 * windowWidth.width,
        // height: 0.45 * windowWidth.height,


    },
    text: {
        color: '#fff',
        fontSize: 0.5 * width,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold"
    }
});


export default AllMovieScreen;