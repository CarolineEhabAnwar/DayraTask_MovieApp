import { Get_All_Movies, Add_Favourite_Movie, Remove_Favourite_Movie, Add_My_Movie, Remove_My_Movie } from './Types';
import { Movie } from '../constants/Movie'


export const getAllMovies = () => (
    {
        type: Get_All_Movies,
    }
);

export const addFavouriteMovie = (movie: Movie) => (
    {
        type: Add_Favourite_Movie,
        data: movie
    }
);

export const removeFavouriteMovie = (key: Number) => (
    {
        type: Remove_Favourite_Movie,
        key: key
    }
);

export const addMyMovie = (movie: Movie) => (
    {
        type: Add_My_Movie,
        data: movie
    }
);

export const removeMyMovie = (key: Number) => (
    {
        type: Remove_My_Movie,
        key: key
    }
);