import React from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Title = ({ name, title }) => {
  return (
    <>
      <Row className="justify-content-center py-3">
        <StyledTitle className="title text-center">
          {name}
          <strong>{' ' + title}</strong>
        </StyledTitle>
      </Row>
    </>
  );
};

var StyledTitle = styled.h1`
  margin: 0;
`;

Title.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

export default Title;
