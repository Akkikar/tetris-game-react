import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => props.gameOver ? 'red' : '#fff'};
    background: linear-gradient(145deg, #000, #333);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    font-family: 'Pixel', Arial, Helvetica, sans-serif;
    font-size: 1rem;
    text-align: center;
    transition: color 0.3s ease, background 0.3s ease;

    @media (max-width: 1200px) {
        padding: 15px;
        border: 3px solid #333;
        font-size: 0.9rem;
        border-radius: 15px;
    }

    @media (max-width: 768px) {
        padding: 10px;
        border: 2px solid #333;
        font-size: 0.8rem;
        border-radius: 10px;
    }

    @media (max-width: 480px) {
        padding: 8px;
        border: 2px solid #333;
        font-size: 0.8rem;
        border-radius: 10px;
    }
`;
