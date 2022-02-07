import React from 'react';
import {Container, Col, Row, Image} from 'react-bootstrap'

const userScreen = () => {
  return <>
     <Container className='my-5 '>
            <Row>
                <Col>
                    <h2 className='fw-bold text-red'>My Profile</h2>
                    <Row>
                        <Col md={4}>
                        <Image src="/img/profile.svg"></Image>
                </Col>
                <Col>
                    <p class="fw-bold text-soft-red m-0">Full Name</p>
                    <p>Agung Prasetya</p>
                    <p className="fw-bold text-soft-red m-0">Email</p>
                    <p>agungprasetya1121@gmail.com</p>
                </Col>
            </Row>
                </Col>
                <Col className='text-soft-red'>
                    <h2 className='my5 fw-bold text-soft-red'>My Transaction</h2>
                    <Row className='d-flex align-items-center bg-soft-red py-4 px-4 order-border'>
                    <Col>
                <Row className="mb-4 d-flex align-items-center justify-content-center">
                    <Col md={4}>
                        <Image src="/img/product-transaction.svg"></Image>
                    </Col>
                    <Col>
                        <div className="name-date lh-xs mt-2">
                            <p className="fs-6 fw-bold text-red">Hinami Latte</p>
                            <p className="fs-8"> <span class="fw-bold text-red">Friday</span> , 10 Feb 2020</p>
                        </div>
                        <div className="lh-xs">
                            <p className='fs-8'>Toping: Manggo</p>
                            <p className="fs-8">Price: 69.000</p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col md={4} className='text-center'>
                <Row>
                    <Col className='mb-1'>
                        <Image src="/img/nav-icon.svg"></Image>
                    </Col>
                </Row>
                <Row>
                    <Col className='my-3'>
                        <Image src="/img/qr-transaction.svg"></Image>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='fs-8 text-red bg-white py-2 fw-bold'>On The Ways</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className='fs-8 fw-bold'></p>
                    </Col>
                </Row>
            </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
  </>;
};

export default userScreen;
