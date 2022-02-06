import React from 'react';
import { Container, Row, Col, Image, Button,Form, Modal } from "react-bootstrap";

const cartScreen = () => {
  return <>
     <Container className='text-red'>
            <h2>My Chart</h2>
            <h5 className='pb-2'>Review Your Order</h5>
            <Row className='d-flex justify-content-between'>
                <Col md={7} className='border-top b-red'>
                   
        <Row className='d-flex align-items-center justify-content-between mt-2 mb-4'>
        <Col md={2}>
                <Image src="/img/cleppon-cofee.svg" className="img-fluid order-border"></Image>
            </Col>
            <Col md={8}>
                <p class="fw-bold">Clepon Coffee</p>
                <p> Toping: Boba Manggo</p>
            </Col>
            <Col className='text-end'>
                <p>Rp. 32.000</p>
                <Image src="/img/delete-icon.svg"></Image>
            </Col>
        </Row>

        <Row className='d-flex align-items-center justify-content-between mt-2 mb-4'>
        <Col md={2}>
                <Image src="/img/cleppon-cofee.svg" className="img-fluid order-border"></Image>
            </Col>
            <Col md={8}>
                <p class="fw-bold">Hinami Latte</p>
                <p> Toping: Manggo</p>
            </Col>
            <Col className='text-end'>
                <p>Rp. 37.000</p>
                <Image src="/img/delete-icon.svg"></Image>
            </Col>
        </Row>
                    

        <Row className='border-top py-5 b-red d-flex align-items-center justify-content-between'>
            <Col md={7}>
                <Row className='border-top b-red py-4'>
                    <Col>
                        <p>Sub total</p>
                        <p>Qty</p>
                        <p class="fw-bold">Total</p>
                    </Col>  
                    <Col className='text-end'>
                        <p>69.000</p>
                        <p>2</p>
                        <p class="fw-bold">69.000</p>
                    </Col>  
                </Row>
            </Col>
            <Col md={4} className='py-4 text-center bg-soft-red border border-2 b-red order-border'>
                <Image src="/img/invoices.svg"></Image>
            </Col>
        </Row>


                </Col>
                <Col md={4}>
                    <Form>
                       
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="name" className='b-red bg-soft-red' placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" name="email" className='b-red bg-soft-red' placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="phone" name="phone" className='b-red bg-soft-red' placeholder="Phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="number" name="number" className='b-red bg-soft-red' placeholder="Post Code" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control as="textarea" name="adress" className='b-red bg-soft-red' rows={5} placeholder="Adress" />
            </Form.Group>


                        <Button type='submit' className='bg-red text-light fw-bold w-100'>Pay</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
  </>;
};

export default cartScreen;