import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import useSound from "use-sound";
import boomSound from "../../sounds/boom.mp3";
const Side = styled.div(
    ({ back, boom }) => ` 
    width: 15vw;
    height: 15vw;
    padding: 20px;
    font-size: 30px;
    color: ${back ? (boom ? "red" : "#8c6f2e") : "white"};
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    border-radius: 5px;
    background: ${
        back
            ? "rgba(0, 0, 0, 0) linear-gradient(rgb(188, 198, 204), rgb(238, 238, 238), rgb(188, 198, 204)) repeat scroll 0% 0%;"
            : "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)"
    };
    &:hover {
        cursor: pointer;
    }
    
`
);
function SongTile({ toggleCardClick, number, word, boom }) {
    const [clicked, setClicked] = useState(false);
    const [delay, setDelay] = useState(false);
    const [play] = useSound(boomSound, { volume: 0.5 });
    const handleClick = () => {
        if (boom) {
            console.log("play");
            play();
        }
        setClicked(true);
        toggleCardClick();
    };
    useEffect(() => {
        setClicked(false);
        setDelay(false);
        setTimeout(() => setDelay(true), 1000);
    }, [word]);
    return (
        <ReactCardFlip
            isFlipped={clicked}
            flipSpeedFrontToBack={2}
            flipSpeedBackToFront={delay ? 2 : 0}
        >
            <Side clicked={clicked} onClick={handleClick}>
                <h3>{number}</h3>
            </Side>
            <Side clicked={clicked} back boom={boom} onClick={handleClick}>
                <h3>{word}</h3>
            </Side>
        </ReactCardFlip>
    );
}

export default SongTile;
