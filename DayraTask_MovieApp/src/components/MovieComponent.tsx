import React, { FC } from 'react';
import { Dimensions, View, StyleSheet, Image, Text } from 'react-native'

const { height, width } = Dimensions.get('screen');

type Props = {
    Poster: string;
    Title: string;
    Overview: string;
    Rating: string;
    ReleaseDate: string;
};


const MovieComponent: FC<Props> = ({ Poster, Title, Overview, Rating, ReleaseDate }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{Title}</Text>
            <Image style={styles.poster} source={{ uri: Poster }} />
            <Text style={styles.text}>{Overview}</Text>
            <Text style={styles.text}>Release Date: {ReleaseDate}</Text>
            <Text style={styles.text}>Rating: {Rating}</Text>
        </View>
    )
}

export default MovieComponent;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 10

    },
    text: {
        color: 'black',
        fontSize: 20
    },
    poster: {
        width: 300,
        height: 300,
        alignContent: 'center'
    }
})