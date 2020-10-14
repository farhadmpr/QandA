// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';

import { fontFamily, fontSize, gray2 } from './Styles';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
