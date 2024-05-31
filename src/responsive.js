import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (width <= 431px) {
            ${props}
        }
    `;
};
export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 768px) {
            ${props}
        }
    `;
};