import styled from "styled-components";
import bgImage from "../../img/bg.png";

export const StyledTetrisWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 40px;
    margin: 0 auto;
    max-width: 900px;

    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;

export const StyledControls = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        ". up ."
        "left . right"
        ". down .";
    grid-gap: 5px;  /* Reduced space */

    @media (min-width: 768px) {
        grid-gap: 10px;  /* Slightly larger gap for larger screens */
    }
`;

export const ControlButton = styled.button`
    width: 40px;  /* Reduced size */
    height: 40px;  /* Reduced size */
    background: #333;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
    transition: background 0.3s, transform 0.2s;

    &:hover {
        background: #555;
    }

    &:active {
        transform: scale(0.9);
        background: #777;
    }

    @media (min-width: 768px) {
        width: 50px;  /* Slightly larger size for larger screens */
        height: 50px;  /* Slightly larger size for larger screens */
        font-size: 1.5rem;
    }

    &.up {
        grid-area: up;
    }
    &.left {
        grid-area: left;
    }
    &.down {
        grid-area: down;
    }
    &.right {
        grid-area: right;
    }
`;
