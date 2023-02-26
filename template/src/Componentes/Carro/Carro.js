import { CarroStyle } from "./style";

export function Carro(props) {
    return (
      <div>
        <CarroStyle>Meu carro</CarroStyle>
        <ul>
          <li>Cor: {props.cor}</li>
          <li>Ano: {props.ano}</li>
          <li>Flex: {props.flex}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
        </ul>
      </div>
    );
  }
  
