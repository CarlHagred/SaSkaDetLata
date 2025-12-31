import { useState } from "react";
import Timer from "./components/timer";
import Score from "./components/score";
import TileContainer from "./components/tile-container";
import Title from "./components/title";
import styled from "styled-components";
import Confetti from "react-confetti";

import DEMO from "./sounds/demo.mp3";
import ORDINARY from "./sounds/ordinary.mp3";
import PPC from "./sounds/ppc.mp3";
import LF from "./sounds/lush_life.mp3";
import UNWRITTEN from "./sounds/unwritten.mp3";
import EENIE_MEENIE from "./sounds/eenie_meenie.mp3";
import IMH from "./sounds/imh.mp3";
import TTLO from "./sounds/ttlo.mp3";
import IWY from "./sounds/IWY.mp3";
import IGAF from "./sounds/IGAF.mp3";
import LOVE_STORY from "./sounds/love_story.mp3";

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
    title: "Demo",
    words: ["This", "is", "a", "Demo"],
    sound: DEMO,
  },
  {
    title: "Ordinary",
    words: ["You're", "takin", "me", "out", "of", "the"],
    sound: ORDINARY,
  },
  {
    title: "Pink ponn club",
    words: ["It's", "where", "I", "belong", "down", "at", "the"],
    sound: PPC,
  },
  {
    title: "Lush Life",
    words: ["Doing", "it", "the", "way", "I", "wanna"],
    sound: LF,
  },
  {
    title: "Unwritten",
    words: ["Feel", "the", "rain", "on", "your", "skin"],
    sound: UNWRITTEN,
  },
  {
    title: "eenie meenie",
    words: ["You", "can't", "make", "up", "your"],
    sound: EENIE_MEENIE,
  },
  {
    title: "In my head",
    words: ["I", "can", "see", "it", "going", "down"],
    sound: IMH,
  },
  {
    title: "Turn the lights off",
    words: ["Come", "on", "baby", "turn", "the"],
    sound: TTLO,
  },
  {
    title: "Im with you",
    words: ["It's", "a", "damn", "cold", "night"],
    sound: IWY,
  },
  {
    title: "I gotta feeling",
    words: ["Tonight's", "the", "night", "hey"],
    sound: IGAF,
  },
  {
    title: "Love Story",
    words: ["But", "you", "were", "everything", "to", "me"],
    sound: LOVE_STORY,
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
