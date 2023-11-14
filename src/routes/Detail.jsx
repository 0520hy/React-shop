import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { useState } from "react";
import { useEffect } from "react";
import Importance from "../componenents/Importance"; 

let Box = styled.div`
  padding: 20px;
`;

function Detail(props) {

  //현재 URL의 id 파라미터 가져오기
  let { id } = useParams();

  //props로 받은 list의 id와 url id 일치하는 요소 반환
  let find = props.list.find(function (x) {
    return x.id == id;
  });

  let [alert, setAlert] = useState(true);
  let [message, setMessage] = useState('');  
  let [inputValue, setInputValue] = useState(''); // 댓글 저장
  let [comments, setComments] = useState([]); // 댓글 리스트 저장
  let [editIndex, setEditIndex] = useState(-1); // 수정할 댓글의 인덱스




  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000); // 2초간 alert
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddComment = () => {
    //값을 입력 전에 버튼을 누를 시 경고 메세지 
    if (inputValue.trim().length === 0) {
      setMessage('내용을 입력해주세요.');
      return;
    }

    if (editIndex === -1) {
      // 새로운 댓글 추가
      setComments([...comments, inputValue]);
    } else {
      // 댓글 수정(index -1이 아닌 경우)
      const updatedComments = [...comments];
      updatedComments[editIndex] = inputValue;
      setComments(updatedComments);
      setEditIndex(-1); // 수정 모드 종료
    }

    setInputValue(''); //입력값 초기화
    setMessage(''); //메세지 초기화
  };

  const handleEditComment = (index) => {
    //댓글 수정 핸들러
    setInputValue(comments[index]);
    setEditIndex(index);
  };

  const handleDeleteComment = (index) => {
    //댓글 삭제 핸들러
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  if (!find) {
    //findrk falst인 경우
    return <div>없는 페이지입니다.</div>;
  }

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">
          <Box>Welcome!</Box>
        </div>
      ) : null}
    
      {message && (
        <div className="alert alert-danger">
          <Box>{message}</Box>
        </div>
      )}

      <div className="row">
        <div className="col-md-6 mt-4">
          <img src="/images/user.png" width="70%" />
        </div>
        <div className="col-md-6 mt-5">
          <h4 className="pt-5">{find.title}</h4>
          <p></p>
          <p>{find.content}</p>
          <p>{find.deadline}까지</p>
          <Importance deadline={find.deadline} />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h5>**</h5>
          <div className="mb-3 d-flex justify-content-center align-items-center">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="form-control"
              style={{ width: '80%', height: '200px', margin: '20px'}}
              placeholder="추가 내용을 입력하세요."
            />
            <button
              className="btn btn-primary mt-2"
              onClick={handleAddComment}
              style={{height: '200px'}}
            >
             save
            </button>
          </div>
          {comments.map((comment, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">{comment}</div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  
                  onClick={() => handleEditComment(index)}
                 
                >
                  update
                </button>
                <button
                  
                  onClick={() => handleDeleteComment(index)}
                 
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Detail;
