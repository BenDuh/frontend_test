import { combineReducers, Reducer } from 'redux'
import CitiesReducer, { CitiesState } from './CitiesReducer'

const RootReducer: Reducer = combineReducers({
    Cities: CitiesReducer,
})

export default RootReducer

export interface RootReducerState {
    Cities: CitiesState
}
