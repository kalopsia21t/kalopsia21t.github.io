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

    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #0a0a0a;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body {
        margin: 0;
        display: flex;
        place-items: center;
        height: 100%;
        width: 100%;
    }

    #root {
        height: 100%;
        width: 100%;
    }

    ul,
    h1,
    h3 {
        margin: 0;
        padding: 0;
    }

    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    a {
        font-family: "Raleway";
        font-size: 1.8vh;
        text-decoration: none;
        margin-top: 1vh;
        display: inline-flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.87);

        &:hover {
            color: rgba(255, 255, 255, 0.43);
        }
    }

`;
