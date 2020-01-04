import React from 'react';
import createStore from '../store/create-store';
import { Provider } from 'react-redux';
import App from './App';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

const Root = props => {

    const initialState = {};
    const store = createStore(initialState);

    return (
        <ThemeProvider>
            <CssBaseline/>
            <Provider store={store}>
                <App />
            </Provider>
            </ThemeProvider>
    )


}

export default Root;