const Usuario = () => {
    return (
      <>
        <h1>Página de usuários</h1>
        <button onClick={() => localStorage.setItem('usuario', 'jorge')}>Gravar</button>
      </>
    );
  };
  export default Usuario;
  