import { useState } from 'react';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';
import './App.css';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  let [shoes] = useState(data);
  return (

  
    <><div className='App'>

      

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">AppleShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">My Page</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/detail" element={<div>상세페이지</div>} />
        <Route path="/about" element={<div>어바웃페이지</div>} />
      </Routes>

      <div className="main-bg"></div>
      </div>
<Container>
  <Row>
    <Col className="text-center">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" alt="사진1" />
      <h4>{shoes[0].title}</h4>
      <p>{shoes[0].price}</p>
    </Col>
    <Col className="text-center">
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" alt="사진1" />
      <h4>{shoes[1].title}</h4>
      <p>{shoes[1].price}</p>
    </Col>
    <Col className="text-center">
      <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" alt="사진1" />
      <h4>{shoes[2].title}</h4>
      <p>{shoes[2].price}</p>
    </Col>
  </Row>
</Container></>

  );
}

export default App;
