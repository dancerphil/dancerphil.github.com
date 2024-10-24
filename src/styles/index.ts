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
`;
