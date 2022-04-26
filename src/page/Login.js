import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ onHandleAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (ev) => {
    ev.preventDefault();
    onHandleAuthenticate(true);
    navigate("/");
  };

  return (
    <Container style={{ width: "500px" }}>
      <Form onSubmit={(ev) => loginUser(ev)}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>아이디</Form.Label>
          <Form.Control type="id" placeholder="아이디를 입력하세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
