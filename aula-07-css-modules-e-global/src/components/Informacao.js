import { useState } from "react";

const Informacao = () => {

    const infos = ["Natasha", "Registro", "26 anos"];
    const [indice, setInfo] = useState(0);

    return (
        <>
            <div>
                <p>Nome: {infos[indice]}</p>
                <button onClick={() => { setInfo(indice + 1) }}>Mudar</button>
            </div>
        </>
    );
};

export default Informacao;