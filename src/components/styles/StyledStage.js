import styled from "styled-components";

export const StyledStage = styled.div`
    display: grid;
    grid-template-rows: repeat(
        ${props => props.height},
        calc(25vw / ${props => props.width})
    );
    grid-template-columns: repeat(${props => props.width}, 1fr);
    grid-gap: 1px;
    border: 2px solid #333;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 25vw;
    background: linear-gradient(145deg, #111, #333);
    overflow: hidden;

    @media (max-width: 1200px) {
        max-width: 35vw;
        border: 1.5px solid #333;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        max-width: 50vw;
        border: 1px solid #333;
        border-radius: 6px;
    }

    @media (max-width: 480px) {
        max-width: 75vw;
        border: 0.5px solid #333;
        border-radius: 4px;
    }
`;

