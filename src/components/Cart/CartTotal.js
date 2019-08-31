import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { ProductContext } from '../../ProductContext';

const CartTotal = () => {
  const { megaState } = useContext(ProductContext);
  const { cartTotal, cartTax, cartSubTotal } = megaState;

  return (
    <Row>
      <Col sm="12" md={{ size: 3, offset: 9 }}>
        <h4>Sub Total : $ {cartSubTotal}</h4>
        <h4>Tax : $ {cartTax}</h4>
        <h4>Total : $ {cartTotal}</h4>
      </Col>
    </Row>
  );
};

export default CartTotal;
