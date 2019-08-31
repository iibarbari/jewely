import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const CartTitles = () => {
  return (
    <>
      <StyledRow>
        <Col sm="2">Products</Col>
        <Col sm="2">Product Name</Col>
        <Col sm="2">Price</Col>
        <Col sm="2">Quantity</Col>
        <Col sm="2">Remove</Col>
        <Col sm="2">Total</Col>
      </StyledRow>
    </>
  );
};

export const StyledRow = styled(Row)`
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  margin: 1em 0 0 0;
  padding 1em 0 0 0;

  [class^=col-] {
    padding 1em 0;
    border: 1px solid gray;
  }
`;

export default CartTitles;
