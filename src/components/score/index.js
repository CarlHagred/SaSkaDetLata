import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styled from "styled-components";
import useSound from "use-sound";
import cheer from "../../sounds/cheer.mp3";
import boo from "../../sounds/boo.mp3";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 125px;
    color: white;
`;

const Button = styled.button`
    min-width: 20px;
    font-weight: bold;
    padding: 0px;
`;

const H1 = styled.h1``;
function Score({ teamName }) {
    const [score, setScore] = useState(0);
    const [grafitti, setGrafitti] = useState(false);
    const [playCheer, { stop: stopCheer }] = useSound(cheer, { volume: 0.5 });
    const [playBoo, { stop: stopBoo }] = useSound(boo, { volume: 0.5 });
    const increaseScore = () => {
        setScore(score + 1);
        stopCheer();
        stopBoo();
        playCheer();
    };
    const decreaseScore = () => {
        setScore(score - 1);
        stopCheer();
        stopBoo();
        playBoo();
    };
    useEffect(() => {
        if (score) {
            setGrafitti(true);
            setTimeout(() => setGrafitti(false), 7000);
        }
    }, [score]);
    return (
        <Wrapper>
            {grafitti && <Confetti gravity={0.2} wind={0.01} />}
            <H1>
                {teamName} - {score} Poäng
            </H1>
            <Button onClick={increaseScore}>+</Button>
            <Button disabled={score === 0} onClick={decreaseScore}>
                -
            </Button>
        </Wrapper>
    );
}

export default Score;
