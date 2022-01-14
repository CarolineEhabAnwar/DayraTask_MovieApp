import React, { FC } from 'react';
import { Dimensions, View, StyleSheet, Image, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { Movie } from '../constants/Movie';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackParams';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';


const { height, width } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window');



type MovieScreenProp = StackNavigationProp<RootStackParamList, 'MovieComponent'>;

const MovieScreen: FC = (MovieItem: any) => {

    const navigation = useNavigation<MovieScreenProp>();

    return (
        <ScrollView style={{ backgroundColor: "black" }}>

            <View style={styles.container} >
                <Text style={styles.Titletext}>{MovieItem.route.params.MovieItem.MovieItem.title}</Text>
                <Image style={styles.poster} source={{
                    uri: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
                        + MovieItem.route.params.MovieItem.MovieItem.poster_path
                }} />
                <Text style={styles.bodyText}>{MovieItem.route.params.MovieItem.MovieItem.overview}</Text>
                <Text style={styles.bodyText}>Release Date: {MovieItem.route.params.MovieItem.MovieItem.release_date}</Text>
                <Text style={styles.bodyText}>Rating: {MovieItem.route.params.MovieItem.MovieItem.vote_average}</Text>
                {/* <Icon
                    name='delete'
                    size={36}
                    onPress={() => { }}
                    tvParallaxProperties={undefined} /> */}
            </View>
        </ScrollView>

    )
}

export default MovieScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
        borderColor: 'white',
        margin: 5,
        alignContent: "center",
        alignItems: "center"

    },
    bodyText: {
        color: 'white',
        fontSize: 0.1 * windowWidth.width / 2.1,
        alignSelf: 'flex-start',
        margin: 15,
        alignContent: "flex-start",
        alignItems: "flex-start",
        textAlign: 'left',
        textAlignVertical: 'center'
    },
    Titletext: {
        color: 'white',
        fontSize: 0.2 * windowWidth.width / 2.1,
        alignSelf: 'center',
        margin: 10,
        alignContent: "center",
        alignItems: "center",
        textAlign: 'center',
        textAlignVertical: "center"
    },
    poster: {
        width: 0.5 * windowWidth.width,
        height: 0.5 * windowWidth.height,
        transform: [{ scale: 1 }],
        resizeMode: 'contain',
        alignContent: 'center',
        alignSelf: 'center',
        margin: 5
    }
})