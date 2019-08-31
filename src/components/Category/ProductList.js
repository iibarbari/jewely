import React, { useContext } from 'react';
import Product from '../Product/Product';
import Title from '../Layout/Title';
import { Container, Row } from 'reactstrap';
import { ProductContext } from '../../ProductContext';

const ProductList = () => {
  const products = useContext(ProductContext).megaState.productList;
  return (
    <>
      <Container>
        <Title name="our" title="products" />
        <Row className="mt-3 mb-3">
          {products.map(item => (
            <Product key={item.id} product={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
