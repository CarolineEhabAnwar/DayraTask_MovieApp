import { createStore, combineReducers } from 'redux';
import MovieReducer from '../reducers/MovieReducer';


const rootReducer = combineReducers({
    MovieReducer: MovieReducer
})


const configureStore = () => createStore(rootReducer);

export type AppState = ReturnType<typeof MovieReducer>

export default configureStore;

