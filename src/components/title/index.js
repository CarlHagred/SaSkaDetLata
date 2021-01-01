import "./title.css";
import styled from "styled-components";
import useSound from "use-sound";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
`;

const H1 = styled.h1``;
function Title({ sound }) {
    const [playing, setPlaying] = useState(false);
    const [play, { stop }] = useSound(sound);
    const toggle = () => {
        if (playing) {
            setPlaying(false);
            stop();
        } else {
            setPlaying(true);
            play();
        }
    };
    useEffect(() => {
        setPlaying(false);
        stop();
    }, [sound]);
    return (
        <Wrapper>
            <H1 onClick={toggle} className="glow">
                Så ska de låouta
            </H1>
        </Wrapper>
    );
}

export default Title;
