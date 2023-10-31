
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CakeSeaction() {
  let [products, setProducts] = useState([]);
  const getProducts = async () => {
      let reponse = await fetch("https://forkify-api.herokuapp.com/api/search?q=cake")
      let data = await reponse.json();
      console.log(data);
   
      setProducts(data.recipes.slice(0,8));

      console.log(products )
  }
  useEffect(() => {
      getProducts();
  }, [])
  return (
    <Container  > 
      <h1 className='title-section p-5 m-5'>Our Cake</h1>
    <Row xs={1} md={4} className="g-4">
   
           {products.map((Item) => {
                    return<Col key={Item.id}>
                         <Card className='  bg-light p-3 ' style={{ width: '18rem',borderColor:'#f3f3f3'}} >
                        <Card.Img variant="top" src={Item.image_url} />
                       <Card.Body>
                            <Card.Title>{Item.title}</Card.Title>
                            <Card.Text>
                                {Item.publisher}
                                <Card.Text className='text-secondary'>
                                <a className='text-secondary' href={Item.source_url}> More Deatalis</a>
                                </Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                       </Col>
                    
                    
                

                  })}
    </Row>
    </Container>
  );
}

export default CakeSeaction;