import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Dimensions, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Movie } from '../constants/Movie';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../screens/RootStackParams';

const { height, width } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window');


type Props = {
    MovieItem: any
};

type MovieComponentProp = StackNavigationProp<RootStackParamList, 'MovieComponent'>;


const MovieComponent: FC<Props> = (MovieItem) => {

    const navigation = useNavigation<MovieComponentProp>();

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
                <TouchableOpacity onPress={() => console.log("da ana ya mo3taz")}>
                    <Image style={{ height: 30, width: 30, marginBottom: 20 }}
                        source={require('../../assets/heart.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MovieComponent;

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