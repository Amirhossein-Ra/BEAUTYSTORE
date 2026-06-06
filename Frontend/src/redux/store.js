import {configureStore , combineReducers} from '@reduxjs/toolkit';
import { userReducer } from './userRedux';
import { cartReducer } from './cartRedux';

import {persistStore, persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ]
        },
    }),
});

export const persistor = persistStore(store);