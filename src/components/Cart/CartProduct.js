import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col, Button } from 'reactstrap';
import { MdRemoveShoppingCart, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { ProductContext } from '../../ProductContext';

const CartProduct = ({ item }) => {
  const { removeItem, increment, decrement } = useContext(ProductContext);
  const { id, title, count, total, img, price } = item;
  return (
    <StyledProductRow>
      <Col sm="2">
        <img className="img-fluid" src={img} alt={title} />
      </Col>
      <Col sm="2">{title}</Col>
      <Col sm="2">{price}</Col>
      <Col sm="2">
        <Button onClick={() => decrement(id)} color="dark">
          <MdRemoveCircleOutline />
        </Button>
        {count}
        <Button onClick={() => increment(id)} color="dark">
          <MdAddCircleOutline />
        </Button>
      </Col>
      <Col sm="2">
        <Button color="warning" onClick={() => removeItem(id)}>
          <MdRemoveShoppingCart />
        </Button>
      </Col>
      <Col sm="2">{total}</Col>
    </StyledProductRow>
  );
};

CartProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    total: PropTypes.number,
    count: PropTypes.number,
  }).isRequired,
};

const StyledProductRow = styled(Row)`
  text-align: center;
  border: 0.5px solid gray;
  font-family: 'Roboto', sans-serif;
  [class^='col-'] {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn {
    border-radius: 0 !important;
  }
`;

export default CartProduct;
