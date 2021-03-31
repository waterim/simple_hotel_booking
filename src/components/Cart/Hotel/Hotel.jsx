import React, { useState, useEffect } from 'react';
import './Hotel.scss';
import {
    addHotelToCart,
    removeHotelFromCart,
} from '../../../redux/actions/cartAction';
import { useDispatch } from 'react-redux';

const Hotel = ({
    hotelData: { description, pricePerDay, image, title, id },
    deleteHotelWithId,
    updateTotalPrice,
    oldTotalPrice,
}) => {
    const [selectedDays, setSelectedDays] = useState(0);
    const [price, setPrice] = useState(pricePerDay * selectedDays);
    const dispatch = useDispatch();

    useEffect(() => {
        setPrice(pricePerDay * selectedDays);
    }, [pricePerDay, selectedDays]);

    const handleRangeChange = (e) => {
        const calcPrice = e.target.value * pricePerDay;
        setSelectedDays(e.target.value);
        setPrice(calcPrice);
        if (e.target.value > 0) {
            dispatch(
                addHotelToCart(
                    id,
                    title,
                    description,
                    image,
                    pricePerDay,
                    calcPrice
                )
            );
        } else {
            dispatch(removeHotelFromCart(id));
        }
    };

    return (
        <div className='hotelCard componentWrapper'>
            <div className='cardLeft'>
                <img alt="hotelImage" src={image} className='cardImage'></img>
                <div className='cardDescPart'>
                    <h1 className='cardTitle'>{title}</h1>
                    <div className='cardDesc'>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className='cardRight'>
                <div className='quantity'>
                    <label className='cardLabel'>{selectedDays}</label>
                    <input
                        className='rangeOfDays'
                        type='range'
                        min='0'
                        max='100'
                        step='1'
                        value={selectedDays}
                        onChange={(e) => handleRangeChange(e)}
                    />
                </div>
                <div className='priceColumn'>
                    <button
                        onClick={() => deleteHotelWithId(id)}
                        className='deleteButton'
                    >
                        <i className='far fa-trash-alt'></i>
                    </button>
                    <h3>{`${price}$`}</h3>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
