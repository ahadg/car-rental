import Container from '@material-ui/core/Container';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React, { ReactElement, useState } from 'react';

import Banner from '../components/banner';
import BlackRect from '../components/black-rect';
import CarCard from '../components/car-card';
import * as Actions from '../components/car-card/car-card.actions';
import { isAnalitic } from '../helpers/analitic';
import { ICar } from '../interfaces/interfaces';
import { initialState } from '../redux/rootState';
import { initializeStore } from '../redux/store';

const Home = (): ReactElement => {
    isAnalitic() && axios.post(process.env.NEXT_PUBLIC_ORIGIN + '/analitics').then(req => console.log(req.data));
    console.log(isAnalitic());

    



    console.log('the main url', process.env.NEXT_PUBLIC_ORIGIN);
    const handleClickConfirm = (): void => {
        //console.log('url', process.env.customKey);
        console.log('url', process.env.NEXT_PUBLIC_ORIGIN);
        axios
            .get(process.env.NEXT_PUBLIC_ORIGIN + '/cars')
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error.response);
            });
    };
    handleClickConfirm();
    return (
        <>
            <Head>
                <title>Agile Car Rentals</title>
            </Head>

            <header>
                <Container maxWidth="lg">
                    <Banner />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
                    <BlackRect />
                    <CarCard />
                </Container>
            </main>
        </>
    );
};

//get cars on server side
export const getServerSideProps: GetServerSideProps = async () => {
    // store
    const reduxStore = initializeStore(initialState);
    const { dispatch } = reduxStore;

    dispatch(Actions.start(true));
    // console.log('dasdasdasdaskdjhasjkdgasjkdgasdjkgasjkdhgs')
    // fetch
    try {
        const cars: ICar[] = await (await axios.get(process.env.NEXT_PUBLIC_ORIGIN + '/cars')).data;
        console.log('fetched',cars)
        dispatch(Actions.success(cars));
    } catch {
        dispatch(Actions.error('Server error'));
    }

    return {
        props: { state: reduxStore.getState() },
    };
};

export default Home;
