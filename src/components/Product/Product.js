import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button, Col } from 'reactstrap';
import { FaCartPlus } from 'react-icons/fa';
import { ProductContext } from '../../ProductContext';

const Product = ({ product }) => {
  const { id, title, img, inCart, price } = product;
  const { addToCart } = useContext(ProductContext);
  const { handleDetail } = useContext(ProductContext);
  const { toggleModal } = useContext(ProductContext);

  return (
    <>
      <Col sm="6" md="4" lg="3" className="mb-3 mt-3">
        <StyledCard>
          <StyledDiv>
            <Link to="/details" onClick={() => handleDetail(id)}>
              <StyledImg top width="100%" src={img} alt={title} />
            </Link>
            <AddToCartButton
              color={inCart ? 'light' : 'info'}
              onClick={() => {
                inCart ? toggleModal(id) : addToCart(id);
              }}
            >
              {inCart ? 'In Cart' : <FaCartPlus />}
            </AddToCartButton>
          </StyledDiv>
          <StyledCardBody>
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardSubtitle>{`$${price}`} </StyledCardSubtitle>
          </StyledCardBody>
        </StyledCard>
      </Col>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const StyledCard = styled(Card)`
  background: transparent;
  border-radius: 0;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  padding: 0;
`;

const StyledImg = styled(CardImg)`
  transition: transform 0.2s;
  margin-bottom: 15px;
  :hover {
    transform: scale(1.2);
  }
`;

const StyledCardBody = styled(CardBody)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
`;

const StyledCardTitle = styled(CardTitle)`
  margin-bottom: 0 !important;
`;

const StyledCardSubtitle = styled(CardSubtitle)`
  margin-top: 0 !important;
  font-family: 'Roboto', sans-serif;
`;

const StyledDiv = styled.div`
  position: relative;
  background: gray;
  padding: 1em;
`;

const AddToCartButton = styled(Button)`
  position: absolute;
  transition: visibility 0.3s;
  bottom: 0;
  right: 0;
  visibility: hidden;
  outline: none;
  border-radius: 0 !important;
  z-index: 9999;
  ${StyledCard}:hover & {
    visibility: visible;
  }
`;

export default Product;
