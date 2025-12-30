import { useEffect, useState } from "react";
import styled from "styled-components";
import SongTile from "../song-tile";

const Wrapper = styled.div`
    display: flex;
    flex-directions: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    margin-top: 100px;
`;
function TileContainer({ toggleCardClick, words }) {
    const [boomers, setBoomers] = useState([]);
    const getRandomIndex = () => {
        return Math.round(Math.random() * (words.length - 1));
    };
    useEffect(() => {
        const r1 = getRandomIndex();
        let r2 = getRandomIndex();
        while (r1 === r2) {
            r2 = getRandomIndex();
        }
        setBoomers({ [r1]: "boom", [r2]: "boom" });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [words]);
    return (
        <Wrapper>
            {words.map((word, index) => (
                <SongTile
                    toggleCardClick={toggleCardClick}
                    boom={boomers[index]}
                    word={word}
                    number={index + 1}
                />
            ))}
        </Wrapper>
    );
}

export default TileContainer;
