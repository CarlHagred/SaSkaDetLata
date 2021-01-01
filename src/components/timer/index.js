import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
`;

const TimeLeft = styled.h1(
    ({ warning }) => `
    color: ${warning ? "red" : "white"};
    font-size: 40px;
`
);
const Timer = ({ seconds, setSeconds, isActive, setIsActive }) => {
    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(30);
        setIsActive(true);
    }

    useEffect(() => {
        let interval = null;
        if (isActive && seconds !== 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <Wrapper>
            <TimeLeft warning={seconds <= 5}>{seconds}</TimeLeft>
        </Wrapper>
    );
};

export default Timer;
