import React from "react";

import './styles.css'

const ItemLista = (props) => {
    return (
        <div className="boxSigno">
            <div className="nomeSigno">
                {props.signo}
            </div>

            <img className="imgSigno" src={props.imagem} alt={props.signo} />

            <div className="periodoNascimento">
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
    )
}

export default ItemLista;