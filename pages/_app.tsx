import CssBaseline from '@material-ui/core/CssBaseline';
import './style.css';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { ReactElement, useState, useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import TagManager, {TagManagerArgs} from "react-gtm-module"
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
        setIsOpen(!isOpen);
    };

    const store = useStore(pageProps.state);
    const persistor = persistStore(store);
    // const activeStep = useSelector((state: IState): number => state.activeStep);
    //GOOGLE TAG MANAGER
    const gtmId = "GTM-P8CZPP9";
    const tagManagerArgs: TagManagerArgs = {
        gtmId,
    };
    useEffect(()=>{
        TagManager.initialize(tagManagerArgs);
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="google-site-verification" content="UV7geI93Mq57Rr9EbvI-aUYGqWKS7E6iGUJv2TCa4cY" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="Agile Car Rental is a Rental company in St. Thomas, United States Virgin Islands. Offering the best vehicles for the area and incredible Deals including Cyril E King Airport Pick-Up, Unlimited Miles, Travel Partner package and more!"
                    />
                    <title>Agile Car Rental | St. Thomas Car Rentals Priced with you in mind </title>

                    <meta property="og:url" content="www.agilecarrental.com" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Agile Car Rental" />
                    <meta name="twitter:card" content="summary" />
                    <meta property="og:description" content="Let's get you, your Ideal Island vehicle! Book Now" />
                    <meta property="og:image" content={'url of image'} />
                </Head>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />

                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Modal />
                    <Loader />
                    <Success />
                    <Component {...pageProps} />
                </ThemeProvider>
                <Footer />
            </PersistGate>
        </Provider>
    );
};

export default CustomApp;
