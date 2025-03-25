import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Form } from "react-bootstrap";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("usuario");

  return (
    <Container className="mt-5">
      {!isAuth ? (
        <Form>
          <Form.Group>
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </Form.Group>
          <Button
            className="mt-2"
            onClick={() => {
              localStorage.setItem("usuario", usuario);
              navigate("/privado");
            }}
          >
            Login
          </Button>
        </Form>
      ) : (
        <Button
          variant="danger"
          onClick={() => {
            localStorage.removeItem("usuario");
            navigate("/");
          }}
        >
          Logout
        </Button>
      )}
    </Container>
  );
};

export default Login;