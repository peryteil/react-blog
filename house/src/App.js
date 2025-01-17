import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  // 데이터 정의
  const menus = ['Home', 'Shop', 'About'];
  const prices = [50, 55, 70];
  const products = ['역삼동원룸', '천호동원룸', '마포구원룸'];
  const content = [
    '침실만 따로 있는 공용 셰어하우스입니다. 최대 2인 가능',
    '2층 원룸입니다. 비올 때 물 가끔 들어오는거 빼면 좋아요',
    '살기 좋아요. 주변에 편의점 10개 넘어요.'
  ];

  // State 정의
  const [reportCounts, setReportCounts] = useState([0, 0, 0]); // 신고 카운트
  const [showModal, setShowModal] = useState(false); // 모달 표시 여부
  const [currentIndex, setCurrentIndex] = useState(null); // 선택한 게시물 인덱스

  // 신고 기능
  const reportHandler = (index) => {
    const updatedCounts = [...reportCounts];
    updatedCounts[index] += 1;
    setReportCounts(updatedCounts);
  };

  // 모달 열기
  const openModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      {/* 메뉴 */}
      <nav className="menu">
        {menus.map((menu, index) => (
          <span key={index} className="menu-item">{menu}</span>
        ))}
      </nav>

      {/* 원룸 목록 */}
      <div className="list-container">
        {products.map((product, index) => (
          <div key={index} className="list-item">
            <h4 onClick={() => openModal(index)}>
              {product}
            </h4>
            <p>가격: {prices[index]}만 원</p>
            <p>
              ☎ 허위매물 신고: {reportCounts[index]} 번
              <button onClick={() => reportHandler(index)}>
                신고하기
              </button>
            </p>
          </div>
        ))}
      </div>

      {/* 모달 */}
      {showModal && (
        <Modal
          title={products[currentIndex]}
          content={content[currentIndex]}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
// 모달 컴포넌트
function Modal({ title, content, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h4>{title}</h4>
        <p>{content}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

export default App;
