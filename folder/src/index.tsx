import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import App from './App';
import {BaseProvider, LightTheme} from 'baseui';

const engine = new Styletron();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App/>
    </BaseProvider>
  </StyletronProvider>
);
