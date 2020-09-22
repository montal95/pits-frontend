import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {plantsReducer} from './plants'
export default combineReducers({ auth: authReducer, plants:  plantsReducer});
