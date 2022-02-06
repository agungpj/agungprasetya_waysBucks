import React, {useState} from 'react'
import {Navbar, Container, Button, Modal, Form} from 'react-bootstrap'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Header() {
 

  const [isLogin, setIsLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  return (
    <div className="App">
    <Navbar>
  <Container className="py-3">
      <Link to="/">
    <Navbar.Brand href="#home">
    <img src="/img/WaysBucks1.png" alt="" />
    </Navbar.Brand>
    </Link>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <ButtonCom>
      <ButtonLoginCom onClick={handleShowLogin}>Login</ButtonLoginCom>
      </ButtonCom>
      <ButtonRegisterCom onClick={handleShowRegister}>Register</ButtonRegisterCom>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
<Modal show={showRegister} centered onHide={handleCloseRegister} className='rounded order-border'>
                <Modal.Body> 
                    <h2 className='text-red py-4 fw-bold'>Register</h2>   
                    <Form>
                        <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                        <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                        <Form.Control type="text" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Full Name" />
                        <Button className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'>Register</Button>
                    </Form>
                    <p className='fw-bold text-center'>Already have an account ? Klik
                        <button className='modal-next fw-bold' onClick={()=>{ handleCloseRegister(); handleShowLogin(); }}> Here</button> 
                    </p>
                </Modal.Body>
            </Modal>  

            <Modal show={showLogin} centered onHide={handleCloseLogin} className='rounded order-border'>
                <Modal.Body> 
                    <h2 className='text-red py-4 fw-bold'>Login</h2>   
                    <Form>
                        <Form.Control type="email" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Email" />
                        <Form.Control type="password" className='mb-4 py-2 bg-soft b-red border-2' placeholder="Password" />
                        <Button className='bg-red mb-2 text-light b-red w-100 py-2 fw-bold'>Login</Button>
                    </Form>
                    <p className='fw-bold text-center'>Dont have an account ? Klik
                        <button className='modal-next fw-bold' onClick={ ()=>{ handleCloseLogin(); handleShowRegister(); }}> Here</button> 
                    </p>
                </Modal.Body>
            </Modal>
    </div>
  );
}

const ButtonCom = styled.div`
  padding-right: 25px;
`

const ButtonPadding = styled.div`
 
`

const ButtonRegisterCom = styled(Button)`
  background-color: #BD0707;
  border: 2px solid #BD0707!important;
  width: 100px;
  border-radius: 5px;
  :hover {
    background-color: #9e1212;
  }
  `

const ButtonLoginCom = styled(Button)`
  background-color: #fff;
  color: #BD0707!important;
  width: 100px;
  border: none!important;
  border-radius: 5px;
  
  border: 2px solid #BD0707!important;
  :hover {
    background-color: #BD0707!important;
    color: white!important;
  }
  `

export default Header;