import {createStore,combineReducers} from "redux"
import upComingReducer from './upcomingReducer'
import thunk from "redux-thunk"
import promiseThunk from "redux-promise"
import {applyMiddleware} from "redux"

const reducer = combineReducers({
    upComingReducer
})
const store = createStore(reducer,applyMiddleware(thunk,promiseThunk));
export default store;