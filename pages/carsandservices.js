import React from 'react'
import Head from 'next/head'


const carsandservices = () => {
    return (
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        >
            <Head>
                <title>Cars and Services</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>


            Cars and Services
        </div>
    )
}

export default carsandservices