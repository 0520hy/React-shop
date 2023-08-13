import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import { useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import { useDispatch } from "react-redux";
import {addItem} from './../store.js';

let Box = styled.div`
  background: yellow;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let find = props.shoes.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState('');
  let [message, setMessage] = useState('');
  let [tabs, setTab] = useState(0)
  let dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isNaN(num)) {
      setMessage('숫자만 입력 가능합니다');
    } 
  }, [num]);

  if (!find) {
    return <div>없는 페이지입니다.</div>;
  }

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">
          <Box>2초 이내 구매시 할인</Box>
        </div>
      ) : null}

      {message && (
        <div className="alert alert-danger">
          <Box>{message}</Box>
        </div>
      )}

      <div className="row">
        <div className="col-md-6">
          <input onChange={((e) => { setNum(e.target.value) })} />
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{find.title}</h4>
          <p>{find.content}</p>
          <p>{find.price}원</p>
          <button className="btn btn-danger" onClick={()=> {
              dispatch(addItem({id: find.id, name: find.title, count: 1}))
          }}>주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link1" >
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(0)}} eventKey="link1">상세 정보</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(1)}}eventKey="link2">후기</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTab(2)}}eventKey="link3">문의하기</Nav.Link>
      </Nav.Item>
    </Nav>
    <TabContent tabs={tabs}/>
    </div>
    
  );
}




function TabContent(props){
return [<div>내용</div>, <div>후기</div>, <div>문의하기</div>][props.tabs]
  }
export default Detail;