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
  let today = new Date();
  let deadlineDate = new Date(deadline);
  let diffTime = deadlineDate.getTime() - today.getTime();
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 날짜 차이 계산

  let importanceMessage;
  if (diffDays < 0) {
    importanceMessage = "기한이 지났습니다";
  } else if (diffDays <= 3) {
    importanceMessage = "🔥중요도 높음";
  } else if (diffDays <= 5) {
    importanceMessage = "🌳중요도 보통";
  } else {
    importanceMessage = "🍀중요도 낮음";
  }
  
  return (
    <ImportanceBox>{importanceMessage}</ImportanceBox>
  );
}

export default Importance;
