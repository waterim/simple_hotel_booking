import { HOTEL_ADDED_TO_CART } from '../types';
import { HOTEL_DELETED_FROM_CART } from '../types';

export const hotelsFetchDataSuccess = (hotels) => {
    return {
        type: HOTEL_ADDED_TO_CART,
        hotels,
    };
};

export const addHotelToCart = (
    id,
    title,
    description,
    image,
    pricePerDay,
    price
) => (dispatch) => {
    const hotelWithPrice = {
        id: id,
        title: title,
        description: description,
        image: image,
        pricePerDay: pricePerDay,
        price: price,
    };
    dispatch({
        type: HOTEL_ADDED_TO_CART,
        payload: hotelWithPrice,
    });
};

export const removeHotelFromCart = (id) => (dispatch) => {
    dispatch({
        type: HOTEL_DELETED_FROM_CART,
        payload: id
    })
};
