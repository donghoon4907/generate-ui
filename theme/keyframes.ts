import { keyframes } from "styled-components";

export const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const blink = keyframes`
    50% {
        opacity: 0;
    }
`;
