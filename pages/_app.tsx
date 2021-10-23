import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar/sidebar';
import Footer from '../components/Footer';



import Loader from '../components/loader';
import Modal from '../components/modal';
import Success from '../components/success';
import { useStore } from '../redux/store';


const theme = createMuiTheme({
    palette: {
        primary: { light: '#33ab9f', main: '#009688', dark: '#00695f' },
        secondary: { light: '#6573c3', main: '#3f51b5', dark: '#2c387e' },
    },
    typography: {
        fontFamily: ['Sora', 'sans-serif'].join(','),
    },
    shape: {
        borderRadius: 10,
    },
});

const CustomApp = ({ Component, pageProps }: AppProps): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const store = useStore(pageProps.state);
    const persistor = persistStore(store);
    // const activeStep = useSelector((state: IState): number => state.activeStep);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle}/>

                
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Modal />
                    <Loader />
                    <Success />
                    <Component {...pageProps} />
                </ThemeProvider>
                <Footer/>
            </PersistGate>
        </Provider>
    );
};

export default CustomApp;
