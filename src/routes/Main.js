import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import data from '../data';
import { useNavigate } from 'react-router-dom';

function Main(props) {
  const navigate = useNavigate();
  
  
  const [list, setList] = useState(data);

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const newItem = { title, content, deadline };
    setList([...list, newItem]); // list 배열에 항목 추가
    setTitle('');
    setContent('');
    setDeadline('');
    handleClose();
  };

  const handleDelete = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const handleDetailClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>content</th>
            <th>deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={item.id} onClick={() => handleDetailClick(item.id)}>
              <td>{i+1}</td>
              <td>{item.title}</td>
              <td>{item.content}</td>
              <td>{item.deadline}</td>
              <td><Button onClick={() => handleDelete(i)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShow}>
        +Add
      </Button>

      <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>새로운 항목 추가하기</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formContent">
          <Form.Label>내용</Form.Label>
          <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formDeadline">
          <Form.Label>날짜</Form.Label>
          <Form.Control type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        cancel
      </Button>
      <Button variant="primary" onClick={handleSubmit}>
        save
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  );
}

export default Main;
