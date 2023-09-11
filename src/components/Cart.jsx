import { useDispatch, useSelector } from "react-redux"
import Card from  'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { remove } from "./store/cartSlice"


const Cart = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.cart)

  const RemoveFromCart = (id) =>{
    dispatch(remove(id))
  }

  const cards = products.map(product => (
        
    // eslint-disable-next-line react/jsx-key
    <div className="col-md-12" style={{marginBottom: '10px', width: '250px'}}>
        <Card key= {product.id} className='h-100' >
            <div className = 'text-center'>
                <Card.Img variant="top" src={product.images} style={{width: '100px', height: '130px', marginTop: '2rem'}} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>NGN: {product.price}</Card.Text>
                </Card.Body>
                
                <Card.Footer style={{height: '3rem', background: 'white', marginBottom: '0.6rem'}}>
                    <Button variant="danger" onClick={() => RemoveFromCart(product.id)}>Remove Product</Button>
                </Card.Footer>
            </div>
        </Card>
    </div>
))
  return (
    <div className="row">
      {cards}
    </div>
  )
}

export default Cart
