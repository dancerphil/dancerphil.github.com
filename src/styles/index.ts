import {injectGlobal} from '@emotion/css';

// reset styles
injectGlobal`
    * {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
    }
    .lucide {
        width: 1em;
        height: 1em;
        vertical-align: -0.125em;
    }
`;
