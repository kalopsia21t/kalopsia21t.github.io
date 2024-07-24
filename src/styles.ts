import { createGlobalStyle } from "styled-components";

import RalewayRegular from "./fonts/Raleway-Regular.ttf";
import RalewayItalic from "./fonts/Raleway-Italic.ttf";
import RalewayBold from "./fonts/Raleway-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Raleway';
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        src: url(RalewayRegular);
    }
    @font-face {
        font-family: 'Raleway';
        font-weight: bold;
        font-style: italic;
        font-display: swap;
        src: url(RalewayItalic);
    }
    @font-face {
        font-family: 'Raleway';
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        src: url(RalewayBold);
    }
`;
