import React from 'react'
import Head from 'next/head'
import Faq from 'react-faq-component';
import styled from 'styled-components';

const data = {
    title: "Agile FAQ's",
    rows: [
      {
        title: "Does Agile charge a deposit?",
        content: "Yes, you will be charged a deposit. "
      },
      {
        title: "What are the requirements to rent a car?",
        content: "Copy of a valid ID or passport, Drivers License with a credit or debit card."
      },
      {
        title: "How do I pay?",
        content: "You can call us at (340) 626-9224 and we can arrange payment processing, or you can pay online."
      },
      {
        title: "Is a deposit required when I book?",
        content: "Yes, you will be charged a deposit prior to the release of the car."
      },
      {
        title: "How many miles do i get per day?",
        content: "Agile offers unlimited driving miles with our vehicles."
      },
      {
        title: "Can I travel to St. John with the car?",
        content: "Agile allows the travel of our vehicles to St. John."
      },
      {
        title: "What happens if I get involved in an accident.",
        content: "The hirer is responsible for paying insurance excess, should the waiver be declined the hirer is responsible for the full value of the car."
      },
      {
        title: "What happens if I get a traffic offence?",
        content: "Be sure to get the other party's contact information so we may pursue them and/or their insurance company on your behalf for damages. Please note that our pursuit of the other party does not absolve you from your contractual obligation to pay for the damage. "
      },
      {
        title: "How do I cancel my booking?",
        content: "Booking cancellations are free, simply call or email us. "
      },
      {
        title: "Are there any fees for modifying booking details or for cancelling a booking?",
        content: "No fees are charged for booking modifications or cancellations."
      },
      {
        title: "Can I pre-pay my rental?",
        content: "Yes you can."
      },
      {
        title: "Can I pay with cash?",
        content: "Yes, you can pay with cash. However, to release a car to you at rental pickup time, you must provide a deposit using a credit card."
      },
      {
        title: "Can I use another person's credit card with their permission? ",
        content: "No. At the time of rental, the renter is required to present a valid driver's license and credit card with his/her name imprinted on it. The name on the credit/debit card MUST match the name on the drivers license."
      },
      {
        title: "Do you deliver vehicles?",
        content: "Yes, we can make delivery arrangments prior to your booking date. "
      },
      {
        title: "Do you offer a pick-up service?",
        content: "We offer free pick-up services, you can arrange to be picked up prior to your booking date. "
      },
    ]
  }

  const styles = {
    // bgColor: 'white',
    titleTextColor: "gray",
    rowTitleColor: "blue",
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
        <MainContainer >
            <Head>
                <title>FAQ Page</title>
                <link rel='icon' href='/favicon.ico'/>
            </Head>

           <Faq 
           data={data}
           styles={styles}
           />
           

        </MainContainer>
    )
}

export default faq
