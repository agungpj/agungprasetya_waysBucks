import React,{useState} from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import Topping from '../components/Topping'
import {toppingList, productList} from '../utils/dataProduct'

const ProductScreen = (props) => {
    const product = productList.data.find((product) => product.id === props.match.params.id);
    const [price,setPrice] = useState(product.price);

    if(!product) {
        return <div>Product Not Found</div>
    }

    function caughtChange(val){
        setPrice(price+val);
    }
    
  return <>
     <Container>
            <Row>
                <Col>
                    <Image src="/img/product-hero.svg"></Image>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1 className="text-red">{product.name}</h1>
                            <p className="mb-5 fs-4 text-soft-red">{product.price}</p>
                            <h5 className="mb-5 fw-bold fs-4 text-soft-red">Toping</h5>
                        </Col>
                        <Row className='mb-5'>
                            {toppingList.data.map((data) => <Topping  data={data} key={data.id}/> ) }
                        </Row>
                    </Row>
                    <Row>
                        <Col>
                            <h5 className="fw-bold fs-4 text-soft-red">{product.price}</h5>
                        </Col>
                        <Col className='text-end'>
                            <h5 className="fw-bold fs-4 text-soft-red">{product.price}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button  className="btn btn-danger w-100 my-5 bg-red">Add Chart</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
  </>;
};

export default ProductScreen;


// const i=useParams().id;

//     const [price,setPrice]=useState(productList.data[i].price);

//     function caughtChange(val){
//         setPrice(price+val);
//     }
    
//     return(
//         <Container>
//             <Row>
//                 <Col>
//                     <Image src="/img/product-hero.svg"></Image>
//                 </Col>
//                 <Col>
//                     <Row>
//                         <Col>
//                             <h1 className="text-red">{productList.data[i].name}</h1>
//                             <p className="mb-5 fs-4 text-soft-red">{productList.data[i].price}</p>
//                             <h5 className="mb-5 fw-bold fs-4 text-soft-red">Toping</h5>
//                         </Col>
//                         <Row className='mb-5'>
//                             {/* { toppingList.data.map( ( data,i) => <ToppingRender getChange={(val)=> caughtChange(val) } data={data} keyvalue={i}/> ) } */}
//                         </Row>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <h5 className="fw-bold fs-4 text-soft-red">Total</h5>
//                         </Col>
//                         <Col className='text-end'>
//                             <h5 className="fw-bold fs-4 text-soft-red">{price}</h5>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col md={12}>
//                             <Button  className="btn btn-danger w-100 my-5 bg-red">Add Chart</Button>
//                         </Col>
//                     </Row>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
