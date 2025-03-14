import { useParams } from "react-router-dom";
const Rotas = () => {

    const { id } = useParams();
    return (
        <>
            <h1>Rotas com React</h1>
            {
                id &&
                <h1>ID: {id}</h1>
            }
        </>
    );
}

export default Rotas;