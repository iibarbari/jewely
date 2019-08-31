import React, { useContext } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../ProductContext';

const DetailModal = () => {
  const { toggleModal } = useContext(ProductContext);
  const { modalOpen } = useContext(ProductContext).megaState;
  const { modalProduct } = useContext(ProductContext).megaState;
  const { id, title, img, price } = modalProduct;

  return (
    <>
      <StyledModal isOpen={modalOpen} className="modal-dialog-centered">
        <ModalHeader>Product Added To Cart </ModalHeader>
        <ModalBody>
          <h1>{title}</h1>
          <p>${price}</p>
        </ModalBody>
        <img src={img} alt={title} />
        <ModalFooter>
          <Link className="btn btn-primary" to="/cart" onClick={() => toggleModal(id)}>
            Cart Page
          </Link>{' '}
          <Button color="secondary" onClick={() => toggleModal(id)}>
            Continue To Shopping
          </Button>
        </ModalFooter>
      </StyledModal>
    </>
  );
};

export default DetailModal;

const StyledModal = styled(Modal)`
  img {
    align-self: center;
  }
`;
