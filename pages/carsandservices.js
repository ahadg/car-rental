import React from 'react'
import Head from 'next/head'
import CarCard from '../components/car-card/index'
import Container from '@material-ui/core/Container';


const carsandservices = () => {
    return (
        <div>
            <Head>
                <title>Cars and Services</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <div >
            <Container >
            <CarCard/>
            </Container>
            </div>

            <div
             style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}>
            Cars and Services
            </div>
        </div>
    )
}

export default carsandservices