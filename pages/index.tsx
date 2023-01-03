import Container from '@material-ui/core/Container';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HeroSection from '../components/HeroSection';
import Banner from '../components/banner';
import BlackRect from '../components/black-rect';
import CarCard from '../components/car-card';
import ClientFeedback from '../components/ClientsFeedback';
import * as Actions from '../components/car-card/car-card.actions';
import { isAnalitic } from '../helpers/analitic';
import { ICar } from '../interfaces/interfaces';
import { initialState } from '../redux/rootState';
import { initializeStore } from '../redux/store';

const Home = (): ReactElement => {
    isAnalitic() && axios.post(process.env.NEXT_PUBLIC_ORIGIN + '/analitics').then(req => console.log(req.data));
    console.log(isAnalitic());
    const dispatch = useDispatch();

    console.log('the main url', process.env.NEXT_PUBLIC_ORIGIN);
    useEffect(() => {
        console.log('url', process.env.NEXT_PUBLIC_ORIGIN);
        axios
            .get(process.env.NEXT_PUBLIC_ORIGIN + '/cars')
            .then(res => {
                console.log(res);
                dispatch(Actions.success(res.data));
            })
            .catch(error => {
                console.log(error.response);
            });
    }, []);

    return (
        <>
            <Head>
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
            <HeroSection />
            <header>
                <Container maxWidth="lg">
                    <CarCard />
                    <Banner />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <BlackRect />
                    <ClientFeedback />
                </Container>
            </main>
        </>
    );
};

//get cars on server side
// export const getServerSideProps: GetServerSideProps = async () => {
//     // store
//     const reduxStore = initializeStore(initialState);
//     const { dispatch } = reduxStore;

//     dispatch(Actions.start(true));
//     // console.log('dasdasdasdaskdjhasjkdgasjkdgasdjkgasjkdhgs')
//     // fetch
//     try {
//         const cars: ICar[] = await (await axios.get('./'+process.env.NEXT_PUBLIC_ORIGIN + '/cars')).data;
//         console.log('fetched',cars)
//         dispatch(Actions.success(cars));
//     } catch {
//         dispatch(Actions.error('Server error'));
//     }

//     return {
//         props: { state: reduxStore.getState() },
//     };
// };

export default Home;
