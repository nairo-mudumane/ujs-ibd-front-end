import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    transition: all ease;
}

svg,
img {
    width:100%;
    height: 100%;
}

.no-margin {
    margin: 0 !important;
}
`;
