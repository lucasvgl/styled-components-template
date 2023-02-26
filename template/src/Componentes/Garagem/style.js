import styled from "styled-components"

export const Botao = styled.button`
    padding: 5px;
    border: none;
    background-color: orange;

    :hover{
        background-color: red;
    }
`

export const GaragemContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1rem; // espaçamento
`

export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    li {
        list-style:none;
    }

`

