import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-community/async-storage";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackParams';


type MovieComponentProp = StackNavigationProp<RootStackParamList, 'MovieComponent'>;


const AddMovieScreen: FC = () => {

    const [title2, setTitle] = useState('')
    const [posterpath, setPosterPath] = useState('')
    const [overview2, setOverview] = useState('')
    const [releasedate, setReleaseDate] = useState('')
    const [rating, setRating] = useState('')
    const [MyMoviesList, setMyMoviesList] = useState<any[]>([]);


    const dispatch = useDispatch();

    const fetchMovies = async () => {

        const mine = await AsyncStorage.getItem('MyMovies');

        if (mine != null) {
            setMyMoviesList(JSON.parse(mine));
        }


    }

    useEffect(() => {

        fetchMovies();

    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                value={title2}
                placeholder='Title'
                placeholderTextColor="black"
                style={styles.Input}
                onChangeText={(title2) => setTitle(title2)}
            />
            <TextInput
                value={posterpath}
                placeholder='Poster Path'
                placeholderTextColor="black"
                style={styles.Input}
                onChangeText={(posterpath) => setPosterPath(posterpath)}
            />
            <TextInput
                value={overview2}
                placeholder='Overview'
                placeholderTextColor="black"
                style={styles.Input}
                onChangeText={(overview2) => setOverview(overview2)}
            />
            <TextInput
                value={releasedate}
                placeholder='Release Date'
                placeholderTextColor="black"
                style={styles.Input}
                onChangeText={(releasedate) => setReleaseDate(releasedate)}
            />
            <TextInput
                value={rating}
                placeholder='Rating'
                placeholderTextColor="black"
                style={styles.Input}
                onChangeText={(rating) => setRating(rating)}
            />
            <TouchableOpacity
                style={{ marginBottom: 16 }}
                onPress={async () => {
                    MyMoviesList.push({
                        title: title2,
                        poster_path: posterpath,
                        overview: overview2,
                        release_date: releasedate,
                        vote_average: rating,
                    })
                    await AsyncStorage.setItem('MyMovies', JSON.stringify(MyMoviesList));

                }}>
                <Text style={{ fontSize: 22, color: '#5fc9f8', borderColor: "white" }}>Add Movie</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        marginBottom: 30,
        marginTop: 16,
        color: 'white'
    },
    Input: {
        fontSize: 24,
        marginBottom: 32,
        borderWidth: 1,
        padding: 12,
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    image: {
        width: 120,
        height: 120,
        borderColor: 'orange',
        borderWidth: 2,
        borderRadius: 100,
    }
});

export default AddMovieScreen;