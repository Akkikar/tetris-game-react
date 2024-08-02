import React, { useState } from 'react';
import { createStage, didCollide } from '../gameHelpers';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Styled Components
import { StyledTetrisWrapper, StyledTetris, StyledControls, ControlButton } from './styles/StyledTetris';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    console.log('re-render');

    // Move player left or right
    const movePlayer = (dir) => {
        if (!didCollide(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    // Start game function
    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000); // 1 sec
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    // Drop function
    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel((prev) => prev + 1);
            // Also increase the speed
            setDropTime(1000 / (level + 1) + 100);
        }

        if (didCollide(player, stage, { x: 0, y: 1 })) {
            if (player.pos.y < 1) {
                console.log('Game Over');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        } else {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        }
    };

    // Key up event handler
    const keyUp = ({ keyCode }) => {
        if (gameOver) return;

        if (keyCode === 40) {
            setDropTime(1000 / (level + 1) + 100); // 1 sec
        }
    };

    // Drop player function
    const dropPlayer = () => {
        setDropTime(null);
        drop();
        setDropTime(1000 / (level + 1) + 100);
    };

    // Move function based on keyCode
    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                // left arrow key
                movePlayer(-1);
            } else if (keyCode === 39) {
                // right arrow key
                movePlayer(1);
            } else if (keyCode === 40) {
                // down arrow key
                dropPlayer();
            } else if (keyCode === 38) {
                // up arrow key
                playerRotate(stage, 1);
            }
        }
    };

    // Interval hook for dropping pieces
    useInterval(() => {
        drop();
    }, dropTime);

    // Render the Tetris game interface
    return (
        <StyledTetrisWrapper
            role="button"
            tabIndex="0"
            onKeyDown={move}
            onKeyUp={keyUp}
        >
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`Rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
                <StyledControls>
                    <ControlButton className="up" onClick={() => playerRotate(stage, 1)}>↻</ControlButton>
                    <ControlButton className="left" onClick={() => movePlayer(-1)}>←</ControlButton>
                    <ControlButton className="down" onClick={dropPlayer}>↓</ControlButton>
                    <ControlButton className="right" onClick={() => movePlayer(1)}>→</ControlButton>
                </StyledControls>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
