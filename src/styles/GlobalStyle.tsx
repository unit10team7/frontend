import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import "./font.css";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset};
        img[src$=".gif"],
        img[src$=".png"] {
          image-rendering: -moz-crisp-edges; /* Firefox */
          image-rendering: -o-crisp-edges; /* Opera */
          image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
          image-rendering: crisp-edges;
          -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
        }
        html,
        body {
          width: 100%;
          height: 100%;
        }

        * {
          box-sizing: border-box;
        }

        body,
        button,
        input,
        textarea {
          font-family: "gmarket-sans", sans-serif;
        }

        button {
          cursor: pointer;
          border: none;
          outline: none;
          padding: 0;
          background-color: transparent;
        }

        a,
        a:visited {
          text-decoration: none;
        }
      `}
    />
  );
};

export default GlobalStyle;
