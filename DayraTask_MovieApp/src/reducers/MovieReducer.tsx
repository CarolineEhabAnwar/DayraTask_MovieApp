import { Get_All_Movies, Add_Favourite_Movie, Remove_Favourite_Movie, Add_My_Movie, Remove_My_Movie } from '../actions/Types';
import AsyncStorage from "@react-native-community/async-storage";

// This is the reducer file that should work with the Redux framework but it the states
// were not updated and returned undefinded and therefore made some problems and I couldn't complete with this Framework

const initialState =
{
    AllMoviesList: [],
    MyMoviesList: [],
    FavouriteMoviesList: [],
    isLoaded: false

};

const MovieReducer = async (state = initialState, action: any) => {

    switch (action.type) {

        case Get_All_Movies: {
            try {
                await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2af133461cc649b3d75d39cd9801f77d&page=1')
                    .then(async response => await response.json())
                    .then(async data => {
                        state.AllMoviesList = data.results;
                        state.isLoaded = true;
                    })
                if (state.isLoaded) {
                    return {
                        ...state,
                        AllMoviesList: state.AllMoviesList,
                        isLoaded: true
                    };

                }
                else {
                    return {
                        ...state,
                        isLoaded: false
                    }
                }


            } catch (error) {
                console.error(error);
                return state;
            }
        }
        case Add_Favourite_Movie:
            {
                await AsyncStorage.setItem('Favourites', JSON.stringify(state.FavouriteMoviesList.concat(action.data)));
                return {
                    ...state,
                    FavouriteMoviesList: state.FavouriteMoviesList.concat(action.data)
                };
            }
        case Remove_Favourite_Movie:
            {
                let temp = state.FavouriteMoviesList;
                temp.forEach((element: any, index) => {
                    if (element.id == action.data.id) temp.splice(index, 1);
                });
                if (temp == null) {
                    temp = [];
                    await AsyncStorage.removeItem('Favourites');
                }
                else {
                    await AsyncStorage.setItem('Favourites', JSON.stringify(temp));
                }

                await AsyncStorage.setItem('Favourites', JSON.stringify(state.FavouriteMoviesList));

                return {
                    ...state,
                    FavouriteMoviesList: temp

                };
            }
        case Add_My_Movie:
            {
                await AsyncStorage.setItem('MyMovies', JSON.stringify(state.MyMoviesList.concat(action.data)));
                return {
                    ...state,
                    MyMoviesList: state.MyMoviesList.concat(action.data)
                };
            }
        case Remove_My_Movie:
            {
                let temp = state.MyMoviesList;
                temp.forEach((element: any, index) => {
                    if (element.id == action.data.id) temp.splice(index, 1);
                });
                if (temp == null) {
                    temp = [];
                    await AsyncStorage.removeItem('MyMovies');
                }
                else {
                    await AsyncStorage.setItem('MyMovies', JSON.stringify(temp));
                }

                await AsyncStorage.setItem('MyMovies', JSON.stringify(state.MyMoviesList));

                return {
                    ...state,
                    MyMoviesList: temp
                };
            }
        default:
            return state;
    }
}

export default MovieReducer;


