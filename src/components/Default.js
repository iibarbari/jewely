import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Default = (props) => {
  return (
    <StyledContainer>
      <Row>
        <Col sm='12'>
          <h1>SORRY </h1>
		      <h4>This url<span className='text-danger'>{props.location.pathname}</span> doesn't exist ;(</h4>
        </Col>
        <Col sm='12'>
            <Link to='/'>
              <Button color='warning'>Take Me To Homepage</Button>
            </Link>
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  .row {
    min-height: 80vh;
  }
  [class^='col'] {
    display: flex;
    justify-content: center;
	align-items: center;
	font-family: "Montserrat", sans-serif;
	flex-direction:column;
  }
  h4{
	font-family: "Montserrat", sans-serif;
  }
`;

export default Default;
