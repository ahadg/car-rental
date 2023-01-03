import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

import useStyles from './black-rect.styles';
import Faq from 'react-faq-component';
import styled from 'styled-components';

const data = {
    title: "Agile Frequently Asked Question's",
    rows: [
        {
            title: "What type of car is recommended for driving in St. Thomas?",
            content: 'The main roads of St. Thomas can be  some hilly terrain, so renting a sedan for your vacation is your best option. Agile offers a variety of rental car deals to make your vacation both safe and economical. It is important to travel with a rental car suitable to traverse all of the United States Virgin Islands.',
        },
        {
            title: 'What is the speed limit in St. Thomas?',
            content: 'Since there are no freeways on St. Thomas and most of the hills have one lane, the speed limits across the Virgin Islands are low. When you drive through more urban areas and towns in the Virgin Islands, the speed limit is 20 miles per hour.',
        },
        {
            title: 'Where are the best places to park in Saint Thomas?',
            content: 'In Charlotte Amalie, there is free parking beneath the American Yacht Harbor, which is located in Red Hook. Agile\'s vehicles are offered with free pick-up and drop-off services, and can commonly be delivered at the airport for rentals, acting as an economy airport car rental. To avoid being tolled at the airport, car rentals with Agile can be picked up at the terminal with prior notice.',
        },
        {
            title: 'What is the cheapest car rental company in Saint Thomas?',
            content: 'Within the last 48 hours, the cheapest car rentals in St. Thomas were found at Agile Car Rental ($47). In the last 36 hours, the cheapest St. Thomas car rentals were found at Agile Car Rental 19A Prindsens Gade Kings Quarter (0.5 miles from the city center).',
        },
        {
            title: 'What is the most popular rental car in Saint Thomas?',
            content: 'Economy cars ( such as Toyota Corollas or similar vehicles) are the most frequently booked rental car types in the Virgin Islands.',
        },
        {
            title: 'What side of the road do you drive on Saint Thomas?',
            content: 'In the Virgin Islands, including St. Thomas, St. John, and St. Croix we drive on the left side of the road.',
        },
        {
            title: 'Can I take my St. Thomas Car Rental over to St. John on the car barge?',
            content: 'Agile Car Rentals allows their car rentals in St. Thomas to be taken to St. John on the car barge, however, it\'s best to ask the agent you are renting from to be sure.',
        },
        {
            title: 'Will my current driver license, from outside the Virgin Islands, be accepted in St. Thomas?',
            content: 'Driver\'s licenses from other U.S. states and territories are valid for up to 90 days in St. Thomas.',
        },
        {
            title: 'What documentation do I need?',
            content: 'Just bring your driver\'s license and your credit card. If you are coming from outside the US, you need to pick up a temporary license at your rental outlet.',
        },
        {
            title: 'What is the minimum age for car rental in St. Thomas?',
            content: 'Agile Car Rentals in St. Thomas requires that you be at least 22-years-old to rent a car on the island.',
        },
        
        {
            title: 'Where do I pick up my rent a car in St. Thomas',
            content: 'Agile Car Rentals is situated near Cyril E King Airport. We also offer a free pick-up and drop-off service at your request.',
        },
        
        {
            title: 'Why should I book a LAST-MINUTE car rental with Agile?',
            content: 'Agile provides the latest hot rates daily to help you compare the hottest car rental offers in the US to an affordable car rental price in just a few minutes.',
        },
        
        {
            title: 'Which car rental companies are located at St. Thomas Airport?',
            content: 'Saint Thomas offers a variety of auto rentals, but if you want the most accommodating and best-priced car rental, it\'s Agile Car Rentals.',
        },
        {
            title: 'What is the cheapest rental car type?',
            content: 'Economy rent a car in St. Thomas are around 63% cheaper than other car types, on average.',
        },
        {
            title: 'What are the advantages of Renting a car?',
            content: 'As a visitor to Saint Thomas, there is so much to see with the advantage of a car. When you rent a car, it makes sightseeing and beach hopping a lot easier, rather than using limited public transport. From ancient castles to historic forts, renting a car gives you the absolute freedom to discover every part of Saint Thomas.',
        },
        {
            title: 'How much does an Economy Car Rental cost in Saint Thomas?',
            content: 'An Economy car rental in Saint Thomas cost $47 per day, on average.',
        },
        {
            title: 'Can I rent an automatic car in Saint Thomas?',
            content: 'Yes, automatic cars are available in most car-renting companies in Saint Thomas. Since cars with manual transmission are more common in many countries, you might have to pay an additional charge for renting an automatic car.',
        },
        {
            title: 'How much does it cost to rent a car for a week in Saint Thomas?',
            content: 'On average a rental car in Saint Thomas cost $540 per week ($78 per day)',
        },
        {
            title: 'What is a popular rental car company in Saint Thomas?',
            content: 'In Saint Thomas, cars are most frequently rented at Agile Car Rental (0.5 miles from city center)',
        },
        {
            title: 'What are the rules of the road in St. Thomas?',
            content: 'The number one rule to remember is "Drive on the Left"! Another to remember is, "It is prohibited by the Virgin Islands law to pass handicap, school and senior buses when they are loading and discharging passengers. There are seat belt laws, laws for child-restraint seats, DUI laws, right of way, rules of the road for cars, motorcycles, bicycles, and pedestrians. If you want to read through all the rules, see the Virgin Islands Drivers Manual.',
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

const BlackRect = (): ReactElement => {
    const styles = useStyles();

    return (
        <Grid container>
            <Paper className={styles.paper} elevation={0}>
                <Grid item xs={12} md={5}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        #Selling a 5Star service through Car Rentals!
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Our fleet ranges from small cars for a busy day in town to larger Jeeps able to traverse the hills of St. Thomas, which would make the perfect
                        vehicle for your travels today. Allow us to make your experience perfect.
                    </Typography>
                </Grid>
            </Paper>
            <Faq data={data} styles={styles} />
        </Grid>
        
    );
};

export default BlackRect;
