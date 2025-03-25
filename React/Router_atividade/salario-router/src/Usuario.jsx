import withAuth from "./withAuth";
import { Container } from "react-bootstrap";

const Usuario = () => {
  return (
    <Container className="text-center mt-5">
      <h1>Dados do usuário</h1>
      <h3>Usuário: {localStorage.getItem("usuario")}</h3>
    </Container>
  );
};

export default withAuth(Usuario);
