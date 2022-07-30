import { createGlobalStyle } from "styled-components";

const BaseStyle = createGlobalStyle`
    :root {

    // Primary palette:

    --color-green: 39, 174, 96;
    --color-green-light: 147, 215, 175;
    --color-red-light: 235, 87, 87;

    // Grey scale palette:

    --color-grey-100: 51, 51, 51;
    --color-grey-70: 100, 100, 100;
    --color-grey-50: 130, 130, 130;
    --color-grey-20: 224, 224, 224;
    --color-grey-0: 245, 245, 245;
    --color-white: 255, 255, 255;

    // Feeback pallete:

    --color-red: 230, 0, 0; // negative
    --color-yellow: 255, 205, 7; // warning
    --color-green-dark: 22, 136, 33; //success
    --color-blue: 21, 91, 203; // information

    --font-base: "Nunito", sans-serif;

    }
`;

export default BaseStyle;
