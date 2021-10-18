import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';

import useStyles from './black-rect.styles';

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
                        Our fleet ranges from small cars for a busy day in town to larger Jeeps able to traverse the St. Thomas, St. John and St. Croix roads, which would make the perfect
                        accompaniment for the family today.
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    );
};

export default BlackRect;
