import React, {useEffect, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface switchProps {
    light: boolean;
}
const switchWrapperStyle = css({
    width: '30px',
    height: '15px',
    padding: '1px',
    margin: 0,
    borderRadius: '15px',
    boxShadow: '0 0 5px black'
});
const StyledSwitch = styled.div<switchProps>`
    display: block;
    position: relative;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: ${(props) => props.light ? 'grey' : 'black'};
    transform: ${(props) => props.light ? 'translateX(0)': 'translateX(15px)'}; 
    transition-duration: 0.5s;
`;

const Component: React.FunctionComponent = () => {
    const [light, setLight] = useState(true);

    const switchLight = () => {
        setLight(!light);
    };

    return (
        <div css={switchWrapperStyle} onClick={switchLight}>
            <StyledSwitch light={light}/>
        </div>
    )
};

export default Component;