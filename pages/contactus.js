import React from 'react'
import Head from 'next/head'


const contactus = () => {
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
                <title>Contact Page</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

            Contact Us
        </div>
    )
}

export default contactus