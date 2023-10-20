import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    REGISTER,
    PURGE,
    PAUSE,
    PERSIST
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import rootReducer from './reducers';

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2
};

const preloadedState = {
    rootReducer
};

const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST]
            }
        }),
    devTools: true,
    preloadedState
});

export const persistor = persistStore(store);

export default store;
