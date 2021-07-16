import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';


const ShippingScreen = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country}))
    history.push('/payment')
  } 
  const addressChangeHandler = (e) => {
     setAddress(e.target.value)
  }
  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };
  const postalCodeChangeHandler = (e) => {
    setPostalCode(e.target.value);
  };
  const countryChangeHandler = (e) => {
    setCountry(e.target.value);
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => addressChangeHandler(e)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Your City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => cityChangeHandler(e)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Your postal code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => postalCodeChangeHandler(e)}
          ></Form.Control>

          <Form.Group controlId='country'>
            <Form.Label>Your Country</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter country'
              value={country}
              required
              onChange={(e) => countryChangeHandler(e)}
            ></Form.Control>
          </Form.Group>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
