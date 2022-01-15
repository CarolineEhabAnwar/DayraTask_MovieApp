import { createStore, combineReducers } from 'redux';
import MovieReducer from '../reducers/MovieReducer';


const rootReducer = combineReducers({
    MovieReducer: MovieReducer
})


const configureStore = () => createStore(rootReducer);

export type AppState = ReturnType<typeof MovieReducer>

export default configureStore;

// const appReducers = combineReducers({
//     MovieReducer,
// });

// const rootReducer = (state: any, action: any) => appReducers(state, action);


// export const store = createStore(rootReducer);

