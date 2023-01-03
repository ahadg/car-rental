import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import React, { ReactElement } from 'react';

import { useStyles } from './banner.styles';

const Banner = (): ReactElement => {
    const styles = useStyles();
    const matches = useMediaQuery('(max-width:550px)');

    return (
        <>
            <Paper className={styles.paper} elevation={0}>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.title} variant="h1" component="h1">
                    Tips for Car Rentals in Saint Thomas

                        <br />
                    </Typography>
                    <Typography className={styles.subtitle} variant="body1">
                        <ul>
                            <li><p>Located in the Caribbean Sea chain of the United States Virgin Islands, St. Thomas is a beautiful tropical destination for travelers with a taste for adventure. Renting a car in St. Thomas is one of the best ways to see the whole island, at your own pace. Charlotte Amalie, Saint Thomas has some of the district's top attractions since St. Thomas is home to several natural bays and historical sites, including Magens Bay, Brewers Bay, and Fort Christian. With Cyril E King Airport being an extremely hilly seven miles from Magen's Bay, a rental car from Agile is ideal for the territory. Securing a rental car from Agile Car Rentals is the way to go if you want to tour Saint Thomas or Saint John.</p></li>
                           <h1>St. Thomas USVI Airport Car Rental Company</h1>
                            <li><p>Finding the right economy rent a car to navigate the Island of St. Thomas, from Cyril E King Airport to the local beaches, resorts, and your Airbnb is essential in Charlotte Amalie. Agile Car Rental has the best deals in St. Thomas. Of all the St. Thomas car rental companies, you want a team that is agile enough to work with you and accommodate to your specific needs. That’s where Agile Car Rentals steps in. We work around your schedule and let you enjoy the places that you want to see without having to worry about bringing your car back to the airport or hotel. </p></li>
                            <li><p>While we encourage you to enjoy all that St. Thomas has to offer, please be mindful of traffic laws. When driving your car rental in the Virgin Islands, observe the laws in place. Charlotte Amalie, Christiansted, Frederiksted, and Coral Bay all follow the same traffic laws that  should be adhered to avoid accidents or  trouble with the police. For instance, when you spot a school, see a senior crossing the road, or notice a handicapped bus stopped to pick up and drop off passengers, you should not overtake it. Driving a car rental can get you almost anywhere on the island, but breaking the traffic laws might stop you from enjoying your rental car experience.</p></li>
                        </ul>
                    </Typography>
                </Grid>
            </Paper>

            <Grid className={styles.container} container spacing={matches ? 1 : 8}>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        Enjoy the Virgin Islands, with a vehicle rental service that cares about you.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Our customers no longer struggle with the hassle of Rental Pickups. At Agile, we take that effort to make
                        your vacation effortless.
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Save up to 10% when rentals are longer than 3 days. Book Below!
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Banner;
