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
                    <Typography className={styles.title} variant="h2" component="h2">
                        Allow AGILE to Help
                        <br/>
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        <ul>
                            <li>Avoid delays with our Free Airport Pickup.</li>
                            <li>Take advantage of Unlimited Miles and Free Roadside Assistance.</li>
                            <li>Never be caught helpless with our 24HR Service.</li>
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
                        Our customers no longer struggle with the hassle of Rental Pickups. At Agile, we take that effort to make your vacation effortless.
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
