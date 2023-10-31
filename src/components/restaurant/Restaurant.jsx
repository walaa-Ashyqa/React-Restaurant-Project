
import React from 'react'
import PizzaSeaction from './pizzaSeaction.jsx';
import Container from 'react-bootstrap/Container';
import CakeSeaction from './CakeSeaction.jsx';
import PastaSeaction from './pastaSeaction.jsx';

function Restaurant() {
  return (
<Container className='w-100 p-1 m-5'>
   

< PizzaSeaction/>
< PastaSeaction/>

< CakeSeaction/>
   
       
      </Container>
  )
}

export default Restaurant;
