import 'antd/dist/antd.css';
import './index.css';
import 'dayjs/locale/de';
import 'fontsource-inter/latin-400.css';
import 'fontsource-inter/latin-600.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { AppContextProvider } from './AppContext';
import { AuthContextProvider } from './AuthContext';
import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import locale from 'antd/es/date-picker/locale/es_ES'
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekYear from 'dayjs/plugin/weekYear';
import 'dayjs/locale/es'

dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Santiago')
dayjs.locale("es");

function renderApp() {
    ReactDOM.render((
        <ConfigProvider locale={locale}>
            <AppContextProvider>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </AppContextProvider>
        </ConfigProvider>
    ), document.getElementById('root'));
}

if (process.env.REACT_APP_DEMO) {
    import('./demo/mockApi').then(mockApi => {
        mockApi.patchFetch();
        renderApp();
    });
} else {
    renderApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
