import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import MainLayout from './layouts/MainLayout';
import WelcomeMessage from './components/WelcomeMessage';

import muiTheme from './styles/mui-theme';
import './styles/index.css';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainLayout>
      <App>
        <WelcomeMessage />
      </App>
    </MainLayout>
  </MuiThemeProvider>,
  document.getElementById('root')
);
