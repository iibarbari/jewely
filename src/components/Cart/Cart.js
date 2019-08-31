import React, { useContext } from 'react';
import { Container, Row, Button, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from '../Layout/Title';
import CartTitles from './CartTitles';
import CartProduct from './CartProduct';
import CartTotal from './CartTotal';
import { ProductContext } from '../../ProductContext';

const Cart = () => {
  const { cart } = useContext(ProductContext).megaState;
  const { clearCart } = useContext(ProductContext);
  const addProducts = cart => {
    return (
      <>
        <CartTitles />
        {cart.map(item => (
          <CartProduct key={item.id} item={item} />
        ))}
        <StyledClearAllRow>
          <Col sm="12" md={{ size: 3, offset: 9 }}>
            <Link to="/">
              <Button color="danger" onClick={() => clearCart()}>
                Clear All
              </Button>
            </Link>
          </Col>
        </StyledClearAllRow>
        <CartTotal />
      </>
    );
  };

  return (
    <Container>
      <Title name="your" title="cart page" />
      {cart.length > 0 ? addProducts(cart) : <Title name="is" title="empty :(" />}
    </Container>
  );
};

const StyledClearAllRow = styled(Row)`
  [class^='col-'] {
    display: flex;
    padding-right: 0;
    justify-content: flex-end;
  }
`;
export default Cart;
