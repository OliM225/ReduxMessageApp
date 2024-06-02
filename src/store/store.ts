import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import storage from "@react-native-async-storage/async-storage";
import {persistStore, persistReducer} from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
    key:"root",
    storage
}
const rootReducer = combineReducers({
    userData: persistReducer(persistConfig,userReducer)
})
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store)