import React, { useState, useEffect } from 'react';
import './Cart.scss';
import Hotel from './Hotel/Hotel';
import HotelSceleton from './HotelSkeleton/HotelSkeleton';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeHotelFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const [hotels, setHotels] = useState();
    const apiURL = 'https://60621a46ac47190017a726df.mockapi.io/hotel';
    const total = useSelector((state) => state.cart.total);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getHotels(apiURL);
    }, []);

    const getHotels = (url) => {
        axios
            .get(url)
            .then((res) => {
                console.log('Hotels were successfully uploaded');
                console.log(`res.data`, res.data);
                setHotels(res.data);
            })
            .catch((err) => {
                console.log('Error during uploading hotels data', err);
                alert("Something went wrong! Try again")
            });
    };

    const deleteHotel = (id) => {
        axios.delete(`${apiURL}/${id}`).then((res) => {
            dispatch(removeHotelFromCart(id));
            getHotels(apiURL);
        }).catch((err) => {
            console.log('Error during deleting hotel', err);
            alert("Something went wrong! Try again")
        });
    };

    const handleBuyClick = () => {
        history.push('/payment');
    };

    return (
        <div className='componentWrapper cartContainer'>
            {!hotels
                ? [1, 2, 3, 4, 5].map((index) => {
                      return <HotelSceleton key={index} theme='dark' />;
                  })
                : hotels &&
                  hotels.map((hotel, index) => {
                      return (
                          <Hotel
                              key={index}
                              hotelData={hotel}
                              deleteHotelWithId={deleteHotel}
                          />
                      );
                  })}
            <div className='buyContainer'>
                <h2 className='totalPrice'>{`${total}$`}</h2>
                <button className='buyButton' onClick={handleBuyClick}>
                    Buy
                </button>
            </div>
        </div>
    );
};

export default Cart;
