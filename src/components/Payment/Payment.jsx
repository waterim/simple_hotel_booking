import React from 'react';
import './Payment.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Payment = (props) => {
    const totalPrice = useSelector((state) => state.cart.total);
    const history = useHistory();
    return (
        <div className='paymentContainer'>
            <div className='paymentLabelContainer'>
                <button
                    className='backButton'
                    onClick={() => history.push('/cart')}
                >
                    <i className='fas fa-arrow-left backButtonArrow'></i> Get
                    back
                </button>
                <p className='paymentLabel'>
                    Proceed with your <b>order</b>
                </p>
                <img alt="paymantImage" src='https://assets.website-files.com/5bff8886c3964a992e90d465/5c00fa3ad82b40e853c9952f_hero-3.svg' />
            </div>
            <div className='paymentDataContainer componentWrapper'>
                <div className='paymentHeaders'>
                    <h1 className='paymentHeader'>Payment</h1>
                    <p className='paymentPrice'>
                        Total price: <b>{`${totalPrice}$`}</b>
                    </p>
                </div>
                <Formik
                    initialValues={{
                        Name: '',
                        Address: '',
                        Phone: '',
                        Email: '',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(values);
                        }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        Name: Yup.string().min(3).required('Name is required.'),
                        Address: Yup.string().required('Address is required.'),
                        Email: Yup.string()
                            .email()
                            .required('Email is required.'),
                    })}
                >
                    {({ isSubmitting, isValid, dirty }) => (
                        <Form className='paymentForm'>
                            <div className='componentWrapper paymentInputs'>
                                <div className='paymentFormGroup'>
                                    <label className='paymentLabel'>
                                        Name*
                                    </label>
                                    <div className='inputContainer'>
                                        <i className='fas fa-user inputIcon'></i>
                                        <Field
                                            className='paymentInput'
                                            type='text'
                                            name='Name'
                                        />
                                    </div>
                                    <ErrorMessage
                                        className='paymentInputError'
                                        name='Name'
                                        component='div'
                                    />
                                </div>
                                <div className='paymentFormGroup'>
                                    <label className='paymentLabel'>
                                        Address*
                                    </label>
                                    <div className='inputContainer'>
                                        <i className='fas fa-map-marker-alt inputIcon'></i>
                                        <Field
                                            className='paymentInput'
                                            type='text'
                                            name='Address'
                                        />
                                    </div>
                                    <ErrorMessage
                                        className='paymentInputError'
                                        name='Address'
                                        component='div'
                                    />
                                </div>
                                <div className='paymentFormGroup'>
                                    <label className='paymentLabel'>
                                        Phone
                                    </label>
                                    <div className='inputContainer'>
                                        <i className='fas fa-phone-alt inputIcon'></i>
                                        <Field
                                            className='paymentInput'
                                            type='text'
                                            name='Phone'
                                        />
                                    </div>
                                    <ErrorMessage
                                        className='paymentInputError'
                                        name='Phone'
                                        component='div'
                                    />
                                </div>
                                <div className='paymentFormGroup'>
                                    <label className='paymentLabel'>
                                        E-mail
                                    </label>
                                    <div className='inputContainer'>
                                        <i className='fas fa-envelope inputIcon'></i>
                                        <Field
                                            className='paymentInput'
                                            type='email'
                                            name='Email'
                                        />
                                    </div>
                                    <ErrorMessage
                                        className='paymentInputError'
                                        name='Email'
                                        component='div'
                                    />
                                </div>
                            </div>
                            <div className='buttonsWrapper'>
                                <button
                                    className='backButton'
                                    onClick={() => history.push('/cart')}
                                >
                                    <i className='fas fa-arrow-left backButtonArrow'></i>{' '}
                                    Get back
                                </button>
                                <button
                                    className='paymentButton'
                                    type='submit'
                                    disabled={!(isValid && dirty)}
                                >
                                    Click to pay
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Payment;
