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
                    <Typography className={styles.title} variant="h2" component="h1">
                        Agile Car Rentals
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Providing excellent service to the United States Virgin Islands through rental vehicles.
                    </Typography>
                </Grid>
            </Paper>

            <Grid className={styles.container} container spacing={matches ? 1 : 8}>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.title} variant="h4" component="h2">
                        We believe that Agile Car Rentals is about more than getting from A to B. It&apos;s about the journey itself. The
                        experiences you can have along the way and the cars you can explore in.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        Whether you want to visit the Islands main attractions or find those hidden gems only accessible by car. We offer not only 
                        the best cars, but the best experiences, we aim to please.
                    </Typography>
                    <Typography className={styles.subtitle} variant="subtitle2">
                        At Agile we consider your needs, providing a variety of vehicles. That&apos;s why we have a range of cars and van rentals
                        solutions available.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default Banner;
