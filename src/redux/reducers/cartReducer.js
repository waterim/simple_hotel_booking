import { HOTEL_ADDED_TO_CART } from '../types';
import { HOTEL_DELETED_FROM_CART } from '../types';

const initState = {
    cart: [],
    total: 0,
};

export default function cartReducer(state = initState, action) {
    if (action.type === HOTEL_ADDED_TO_CART) {
        const addedHotel = action.payload;
        const existedHotel = state.cart.find(
            (hotel) => addedHotel.id === hotel.id
        );
        if (existedHotel) {
            const updatedCart = state.cart.filter(
                (hotel) => hotel.id !== existedHotel.id
            );
            const newCart = [...updatedCart, action.payload];
            const total = newCart.reduce((acc, hotel) => {
                return acc + hotel.price;
            }, 0);
            return {
                ...state,
                cart: newCart,
                total: total,
            };
        } else {
            const newCart = [...state.cart, addedHotel];
            const total = newCart.reduce((acc, hotel) => {
                return acc + hotel.price;
            }, 0);
            return {
                ...state,
                cart: newCart,
                total: total,
            };
        }
    }

    if (action.type === HOTEL_DELETED_FROM_CART) {
        const cartWithoutSpecificHotel = state.cart.filter(
            (hotel) => hotel.id !== action.payload
        );
        const total = cartWithoutSpecificHotel.reduce((acc, hotel) => {
            return acc + hotel.price;
        }, 0);
        return {
            ...state,
            cart: cartWithoutSpecificHotel,
            total: total,
        };
    } else {
        return state;
    }
}
