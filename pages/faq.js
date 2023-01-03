import React from 'react';
import Head from 'next/head';
import Faq from 'react-faq-component';
import styled from 'styled-components';

const data = {
    title: "Agile FAQ's",
    rows: [
        {
            title: "Can I use my international driver's license?",
            content: 'A valid drivers license, issued in your state or country is acceptable as well as international licenses to rent with us at Agile Car Rental. ',
        },
        {
            title: 'Do I need insurance?',
            content: 'Yes, Insurance is required by law. ',
        },
        {
            title: 'What are your age requirements?',
            content: 'You have to be at least 21 years of age to rent a vehicle with us. ',
        },
        {
            title: 'Do you pick up and drop off customers?',
            content: 'Yes, we have a service to pick up and drop off customers for rentals.',
        },
        {
            title: 'Do you deliver and pick up the vehicle?',
            content: 'Yes, we provide free pick-up and drop-off once requested. ',
        },
        {
            title: 'Do you pick up at the airport?',
            content: 'Yes, we pick up from and deliver to the airport. ',
        },
        {
            title: 'Do you deliver at the hotels?',
            content: 'Yes, we do deliver at hotels but customer needs to be present to sign your rental contract. ',
        },
        {
            title: 'How do I pay?',
            content:
                'You can call us at (340) 626-9224 / (954) 390-1560 and we can arrange payment processing, or you can pay online.',
        },
        {
            title: 'Is a deposit required when I book?',
            content:
                'Yes, a deposit of $400 is required for security puposes. The amount of the requested deposit will be returned to you upon the return of your rental vehicle.',
        },
        {
            title: 'How much is the deposit?',
            content: 'The deposits is based on the type of vehicle, usually from $400.00 for credit card, and $800 if paying in cash. ',
        },
        {
            title: 'How many miles do I get per day?',
            content: 'Agile offers unlimited driving miles with rented vehicles.',
        },
        {
            title: 'Can I travel to St. John with the car?',
            content: 'Agile allows the travel of our vehicles to St. John.',
        },
        {
            title: 'What happens if I get involved in an accident.',
            content:
                'In the event of an accident make sure yourself and those involved are ok. Contact Agile and then contact the local police force. The hirer is responsible for paying insurance excess, should the waiver be declined the hirer is responsible for the full value of the car.',
        },
        {
            title: 'What happens if I get a traffic offence?',
            content:
                "Be sure to get the other party's contact information so we may pursue them and/or their insurance company on your behalf for damages. Please note that our pursuit of the other party does not absolve you from your contractual obligation to pay for the damage. ",
        },
        {
            title: 'How do I cancel my booking?',
            content: 'Booking cancellations are free, simply call or email us. ',
        },
        {
            title: 'Are there any fees for modifying booking details or for cancelling a booking?',
            content: 'No fees are charged for booking modifications or cancellations.',
        },
        {
            title: 'Do you offer accessories with your rentals?',
            content:
                'We do have accessories that can be rented with the vehicles. The accessories are a baby seat and GPS systems. ',
        },
        {
            title: 'Can I pre-pay my rental?',
            content: 'Yes you can.',
        },
        {
            title: 'What forms of payment do you accept?',
            content: 'You can pay cash, check, credit card, travels check, or debit card.',
        },
        {
            title: "Can I use another person's credit card with their permission? ",
            content: 'Yes, but the card holder must be present themselves with proper I.D. to sign the rental contract.',
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: 'gray',
    rowTitleColor: 'blue',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const MainContainer = styled.div`
    margin: 0px;
    padding: 40px;
    background-color: white;
`;

const faq = () => {
    return (
        <MainContainer>
            <Head>
                <title>Agile Car Rental | FAQ Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Faq data={data} styles={styles} />
        </MainContainer>
    );
};

export default faq;
