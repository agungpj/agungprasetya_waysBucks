import React from 'react';
import styled from 'styled-components'
import {Container, Col, Row} from 'react-bootstrap'
import {productList} from "../utils/dataProduct"

const Card = (props) => {
    const {product} = props;
  return <>
   <div key={product.id} className='text-red bg-soft-red order-border'>
   <a href={`/product/${product.id}`} style={{textDecoration: "none", cursor: "pointer"}}>
        <img src={product.image} className='w-100' alt="product"></img>
        <div className='px-4 py-2'>
            <h5 className='fw-bold' style={{color: "red"}}>{product.name}</h5>
            <h6 className='text-soft-red'>Rp.{product.price}</h6>
        </div>
            </a>
      </div>
  </>;
};

export default Card;
