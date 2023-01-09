import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { totlaCheckinTime } from '../../helpers/dateUtils';
import formatPrice from '../../helpers/priceFormate';
import { ICar, IDate } from '../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo, getSingleCarSelector } from '../../redux/selectors';
import useStyles from './single-car.styles';
import { getFormatedNumber } from '../../helpers/analitic';

const SingleCar = (): ReactElement => {
    const styles = useStyles();
    // car
    const car: ICar = useSelector(getSingleCarSelector);
    //console.log(car)
    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);
    const {checkin} : any = useSelector((state) => state);

    console.log("checkin",checkin)

    return (
        <>
            <Typography className={styles.title} variant="h5" component="h3">
                Short Description
            </Typography>

            <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                    <CardMedia className={styles.media} image={'../' + car.img} title={car.title} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography className={styles.bold} variant="body2" gutterBottom>
                        {`Total Rental Days: ${checkin.time.totaldays} days`}
                    </Typography>
                    <Typography className={styles.bold} variant="body2" gutterBottom>
                        Total Price:
                        <span className={styles.price}>{` $${formatPrice(checkin.time.totaldays * car.price * 24)} `}</span>
                        {/* {`- $${car.price}.00/hour`} */}
                    </Typography>

                    <Typography className={styles.subtitle} color="primary" variant="h6" component="h4">
                        {car.title}
                    </Typography>
                    <Typography className={styles.text} variant="body2" color="textSecondary" component="p">
                        {car.text}
                    </Typography>

                    <Typography className={styles.date} variant="body2" color="textSecondary" component="p">
                        {`Start date: ${dateFrom.month+1}/${dateFrom.day}/${dateFrom.year} ${getFormatedNumber(checkin.time?.timefrom)}:${getFormatedNumber(checkin.time?.timefromminutes)} ${checkin?.time?.ztimefrom}`}
                    </Typography>
                    <Typography className={styles.date} variant="body2" color="textSecondary" component="p">
                        {`End date: ${dateTo.month+1}/${dateTo.day}/${dateTo.year} ${getFormatedNumber(checkin.time?.timeto)}:${getFormatedNumber(checkin.time?.timetominutes)} ${checkin?.time?.ztimeto}`}
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SingleCar;
