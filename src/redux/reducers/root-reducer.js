import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
