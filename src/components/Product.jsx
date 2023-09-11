import {useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/cartSlice'
import { getProducts } from './store/productSlice'
import statusCode from './store/utils/statusCode'

const Product = () => {
   const dispatch = useDispatch()
   const {data: products, status} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, []);

    if(status === statusCode.Loading){
        return <h6 style={{background: 'white', color: 'blue'}}>
          <Alert variant='white'>Loading...</Alert></h6>
    }

    if (status === statusCode.Error){ 
        return <h6 style={{background: 'red', color: 'white'}}>
        <Alert variant='red'>Sorry, there is an Error!!! Try Again</Alert> </h6>
    }

    const AddToCart = (products) => {
        dispatch(add(products))
    }

    const cards = products.map(product => (
        
        // eslint-disable-next-line react/jsx-key
        <div className="col-md-3" style={{marginBottom: '10px', width: '250px'}}>
            <Card key= {product.id} className='h-100' >
                <div className = 'text-center'>
                    <Card.Img variant="top" src={product.image} style={{width: '100px', height: '130px', marginTop: '2rem'}} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>NGN: {product.price}</Card.Text>
                    </Card.Body>
                    
                    <Card.Footer style={{height: '3rem', background: 'white', marginBottom: '0.6rem'}}>
                        <Button variant="primary" onClick={() => AddToCart(product)}>Add to Cart</Button>
                    </Card.Footer>
                </div>
            </Card>
        </div>
    ))
    
  return (
    <>
        <div className = 'row' style={{marginTop: '3rem', marginLeft: '10rem'}}>
       {cards}
        </div>
    </>
  )
}

export default Product
