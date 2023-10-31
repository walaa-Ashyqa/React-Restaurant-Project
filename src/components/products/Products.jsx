import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Products.css'
function Products() {
    let [products, setProducts] = useState([]);
    const getProducts = async () => {
        let reponse = await fetch("https://fakestoreapi.com/products")
        let data = await reponse.json();
        
        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='p-5 bg-light'>
            <Container className='row justify-content-between  ' >
            <h1 className='title-section p-2'>Our Products</h1>
                {products.map((Item) => {
                    return  <Card className=' col-6 m-3 p-5 mt-5' style={{ width: '18rem',borderColor:'#f3f3f3'}} >
                        <Card.Img variant="top" src={Item.image} className=''/>
                       <Card.Body>
                            <Card.Title>{Item.title}</Card.Title>
                            <Card.Text>
                                {Item.price}
                            </Card.Text>
                            <Button  style={{ backgroundColor: '#111', borderColor:'#111' }}>Go somewhere</Button>
                        </Card.Body>
                    </Card>

                  })}


                  



            </Container>
        </div>
    );
}

export default Products;