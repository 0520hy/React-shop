import { useEffect, useState } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import data from './data';
import Detail from './routes/Detail';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import Main from './routes/Main'


function App() {
  let navigate = useNavigate();
  const list =data;


  return (

    <div className='App'>


      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">My todo-list</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>All</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>Detail</Nav.Link>e 
          </Nav>
        </Container>
      </Navbar>

   

      <Routes>
        <Route path="/" element={<div>
          <>
          <div className="main-bg"></div>
          <Container>
            <Main/>
    
          </Container>


          </>
        </div>} />
        <Route path="/detail/:id" element={<Detail list={list}/>} />

        
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