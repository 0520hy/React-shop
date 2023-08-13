import { useEffect, useState } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import data from './data';
import Detail from './routes/Detail';
import Cart from './routes/cart';
import axios from 'axios';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';


function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0)
  return (

    <div className='App'>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AppleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>My Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>Detail</Nav.Link>e 
          </Nav>
        </Container>
      </Navbar>

   

      <Routes>
        <Route path="/" element={<div>
          <>
          <div className="main-bg"></div>
          <Container>
          <Row>
          {
          shoes.map(function(shoe, i){ 
            return(
            <Col md={4} key={i}>
              <img
                            src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
                            alt="shoes"
                            width="80%"
                          />
                        <h4>{shoe.title}</h4>
                        <p>{shoe.price}</p>
            </Col>
          )})}
          
        </Row>

        {count == 0 || count ==1?
        <button onClick={(e)=>{
          {setCount(count + 1)}
          axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>
          {
            let copy = [...shoes,...결과.data]
            setShoes(copy)
          })
          axios.get('https://codingapple1.github.io/shop/data3.json').then((결과)=>
          {
            let copy = [...shoes,...결과.data]
            setShoes(copy)
            
          })
          .catch(()=>{
            console.log('error')
          })
         }}>button</button>:null}
         
          </Container>

         

          </>
        </div>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
       <Route path='/cart' element={<Cart/>} />
        
        <Route path="/about" element={<About/>}>
          <Route path='member' element= {<div>회사 직원</div>}/>
          <Route path='location' element= {<div>회사 위치</div>}/>
        </Route>
      

      <Route path="/event" element={<Event/>}>
          <Route path='one' element= {<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path='two' element= {<div>생일기념 쿠폰받기</div>}/>
        </Route>
      </Routes>




 </div>
 
 )
 
 


}
      
   {/* <Card shoes = {shoes[0]} i={1}></Card>
   <Card shoes = {shoes[1]} i={2}></Card>
   <Card shoes = {shoes[2]} i={3}></Card> */}

 


function Card(props){
return (
  <div className="p-list">
   <Col className="text-center">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" alt="사진1" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col></div>

)

}
function About(){
  return (
    <div>
      <h4>about페이지</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;


function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}