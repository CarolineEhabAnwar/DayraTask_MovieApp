import { json } from 'overmind';
import { useState } from 'react';
import { Get_All_Movies, Add_Favourite_Movie, Remove_Favourite_Movie, Add_My_Movie, Remove_My_Movie } from '../actions/Types';

declare interface IAction {
    type: string;
    data: any;
}

export interface MyState {
    AllMoviesList: Array<any>,
    MyMoviesList: Array<any>,
    FavouriteMoviesList: Array<any>,
    isLoaded: boolean
}

let initialState: MyState = {
    AllMoviesList: [],
    MyMoviesList: [],
    FavouriteMoviesList: [],
    isLoaded: false

}


const MovieReducer = async (state = initialState, action: IAction) => {

    let temp;

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
                return {
                    ...state,
                    FavouriteMoviesList: state.FavouriteMoviesList.concat(action.data)
                };
            }
        case Remove_Favourite_Movie:
            {
                return {
                    ...state,
                    FavouriteMoviesList: state.FavouriteMoviesList.filter(action.data)
                };
            }
        case Add_My_Movie:
            {
                return {
                    ...state,
                    MyMoviesList: state.MyMoviesList.concat(action.data)
                };
            }
        case Remove_My_Movie:
            {
                return {
                    ...state,
                    MyMoviesList: state.MyMoviesList.filter(action.data)
                };
            }
        default:
            return state;
    }
}

export default MovieReducer;


