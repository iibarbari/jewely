import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../Layout/Title';
import { ProductContext } from '../../ProductContext';

const Details = () => {
  const { details } = useContext(ProductContext).megaState;
  const { addToCart } = useContext(ProductContext);
  const { id, title, img, price, info, inCart } = details;

  return (
    <ProductDisplay className="py-5">
      <Title title={title} name="" />
      <Row>
        <Col sm="6">
          <img src={img} alt={title} />
        </Col>
        <Col sm="6">
          <p>
            <span className="text-muted">Some Info : </span>
            <br />
            {info}
          </p>
          <p>
            <span className="text-muted">Price:</span> ${price}
          </p>
          <div className="links py-3">
            <Link className="btn btn-outline-success" to="/">
              Back To Products
            </Link>
            <Button
              color={inCart ? 'light' : 'success'}
              disabled={inCart}
              onClick={() => {
                addToCart(id);
              }}
            >
              {inCart ? 'In Cart' : 'Add To Cart'}
            </Button>
          </div>
        </Col>
      </Row>
    </ProductDisplay>
  );
};

const ProductDisplay = styled(Container)`
  [class^='col-'] {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  img {
    align-self: center;
  }
  .links {
    display: flex;
    justify-content: space-between;
  }
`;

export default Details;
