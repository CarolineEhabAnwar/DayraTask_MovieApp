import React, { FC } from "react";
import { View, StyleSheet, Text } from 'react-native'
import MovieComponent from '../components/MovieComponent'


const AllMovies: FC = () => {
    return (
        <View style={styles.container}>
            <MovieComponent
                Poster={require('../../assets/spiderman.jpg')}
                Title="Movie Title"
                Overview="This is the overview of the movie"
                Rating="5.5"
                ReleaseDate="25/5/2016"

            />
        </View>
    )
}

export default AllMovies;

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