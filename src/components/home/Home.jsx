import React ,{useState } from 'react'

function Home() {
    let [age,setAge]=useState(20);
    let [name,setName]=useState("wala");
    const changeAge=(age,name)=>{
        setAge(age);
        setName(name);
    }
  return (
   
  
<div  className="  vh-100 text-center bg-image " style={{backgroundImage:  'url("./images/photo-background.avif")' , backgroundSize:'cover'}}>
  <div className="mask  vh-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">This is a tutorial project for a website designed by API using ReactJS. </h1>
        <h5 className="mb-4">It contains: The Products page and The Restaurant page</h5>
         </div>
   
  </div>
  </div>
</div>



   
  )
}

export default Home