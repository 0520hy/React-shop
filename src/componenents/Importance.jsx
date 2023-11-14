// Importance.js
import React from 'react';
import styled from 'styled-components';

const ImportanceBox = styled.p`
  display: inline-block;
  background-color: #F5F6CE;
  border-radius: 20px;
  padding: 20px;
  color: black;
`;

function Importance({ deadline }) {
  // props로 deadline 받음
  let today = new Date();
  let deadlineDate = new Date(deadline);
  let diffTime = deadlineDate.getTime() - today.getTime();
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 날짜 차이 계산

  let importanceMessage;
  if (diffDays < 0) { 
    // deadline이 이미 지났으면 
    importanceMessage = "기한이 지났습니다";
  } else if (diffDays <= 3) {
    // 날짜 차이가 3 이하이면
    importanceMessage = "🔥중요도 높음";
  } else if (diffDays <= 5) {
    // 날짜 차이가 5 이하이면
    importanceMessage = "🌳중요도 보통";
  } else {
     // 그 외의 경우(5일 넘게 남은 경우)
    importanceMessage = "🍀중요도 낮음";
  }
  
  return (
    <ImportanceBox>{importanceMessage}</ImportanceBox>
  );
}

export default Importance;
