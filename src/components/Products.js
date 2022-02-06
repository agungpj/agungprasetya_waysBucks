import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Card from './Card'
import {productList} from '../utils/dataProduct'

const Products = () => {
  
  return <>
    <Container className="py-5 container-product">
        <Row>
          {productList.data.map((product) => (
            <Col md={3}>
              <Card key={product.id} product={product} />
            </Col>
          ))}
        
        </Row>
    </Container>
  </>;
};

export default Products;
