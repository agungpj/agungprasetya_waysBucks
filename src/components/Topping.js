import React from 'react';
import { Col, Image } from 'react-bootstrap';
function Topping({ data }){
    return(
        <>
            <Col md={3} className='text-center toping-cnt'>
                <Image src={data.image}></Image>
                <p className='text-center'>{data.name}</p>
            </Col>
        </>
    );

    }

export default Topping;