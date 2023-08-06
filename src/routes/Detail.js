import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import { useEffect } from "react";

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
