import { useState } from "react";
import Timer from "./components/timer";
import Score from "./components/score";
import TileContainer from "./components/tile-container";
import Title from "./components/title";
import styled from "styled-components";
import Confetti from "react-confetti";

import BetOnIt from "./sounds/BetOnIt.mp3";
import BlindingLights from "./sounds/BlindingLights.mp3";
import BotenAnna from "./sounds/BotenAnna.mp3";
import IGottaFeeling from "./sounds/IGottaFeeling.mp3";
import SimplytheBest from "./sounds/SimplytheBest.mp3";
import Summer from "./sounds/Summer.mp3";
import Underbart from "./sounds/Underbart.mp3";
import yeahwow from "./sounds/yeahwow.mp3";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const UpperWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`;
const Row = styled.div`
    display: flex;
    background-color: black;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    justify-content: space-evenly;
    background: black;
`;
const songs = [
  {
    title: "Boten Anna",
    words: ["För", "i", "mina", "ögon", "är", "hon"],
    sound: BotenAnna,
  },
  {
    title: "I Gotta Feeling",
    words: ["Go", "out", "and", "smash", "it"],
    sound: IGottaFeeling,
  },
  {
    title: "Blinding lights",
    words: ["The", "city's", "cold", "and", "empty"],
    sound: BlindingLights,
  },
  {
    title: "Summer of 69",
    words: ["Me", "and", "some", "guys", "from", "school"],
    sound: Summer,
  },
  {
    title: "Simply The Best",
    words: ["Better", "than", "all", "the", "rest"],
    sound: SimplytheBest,
  },
  {
    title: "Yeah Yeah Wow Wow",
    words: ["Du", "är", "här", "jag", "är", "frusen"],
    sound: yeahwow,
  },
  {
    title: "Bet on it",
    words: ["I'm", "not", "gonna", "stop"],
    sound: BetOnIt,
  },
  {
    title: "Underbart",
    words: ["Hör", "du", "kärlekens", "alla", "toner"],
    sound: Underbart,
  },
];

function drawSnowflake(ctx) {
  const randomInt = () => 3;
  const numPoints = this.numPoints || randomInt(3, 4) * 2;
  this.numPoints = numPoints;
  const innerRadius = this.radius * 0.2;
  const outerRadius = this.radius * 0.8;
  ctx.beginPath();
  ctx.moveTo(0, 0 - outerRadius);

  for (let n = 1; n < numPoints * 2; n++) {
    const radius = n % 2 === 0 ? outerRadius : innerRadius;
    const x = radius * Math.sin((n * Math.PI) / numPoints);
    const y = -1 * radius * Math.cos((n * Math.PI) / numPoints);
    ctx.lineTo(x, y);
  }
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  const toggleCardClick = () => {
    setSeconds(30);
    setIsActive(true);
  };

  const nextSong = () => {
    setCurrentSongIndex(currentSongIndex + 1);
  };
  const prevSong = () => {
    setCurrentSongIndex(currentSongIndex - 1);
  };
  return (
    <Wrapper>
      <UpperWrapper className="bg">
        <Confetti
          drawShape={drawSnowflake}
          colors={["#D4AF37"]}
          gravity={0.03}
          wind={0.01}
          style={{ zIndex: 0 }}
        />
        <Title sound={songs[currentSongIndex].sound} />
        <TileContainer
          toggleCardClick={toggleCardClick}
          words={songs[currentSongIndex].words}
        />
      </UpperWrapper>
      <Row>
        <button disabled={currentSongIndex === 0} onClick={prevSong}>
          Förra!
        </button>
        <Timer
          seconds={seconds}
          setSeconds={setSeconds}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <button
          disabled={currentSongIndex === songs.length - 1}
          onClick={nextSong}
        >
          Nästa!
        </button>
      </Row>
      <Row>
        <Score teamName="Wells Angels" />
        <Score teamName="Puttes Pappor" />
        <Score teamName="Tottes Huliganer" />
      </Row>
    </Wrapper>
  );
}

export default App;
