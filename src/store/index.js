import {createStore,combineReducers} from "redux"
import upComingReducer from './upcomingReducer'
import titleReducer from './Title'
import thunk from "redux-thunk"
import promiseThunk from "redux-promise"
import {applyMiddleware} from "redux"
const DrawerReducer = (prevstate=false,action)=>{
	let {type,payload}= action;
	switch(type){
		case "isShow":
            return payload;
        case "isHide":
            return payload;
		default:
			return prevstate
	}
}
const reducer = combineReducers({
    upComingReducer,
	DrawerReducer,
	titleReducer
})
const store = createStore(reducer,applyMiddleware(thunk,promiseThunk));
export default store;