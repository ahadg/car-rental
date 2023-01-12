import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isCorrectEnd, isCorrectStart,gettotalhours } from '../../helpers/dateUtils';
import { ICheckin, IDate } from '../../interfaces/interfaces';
import { IState } from '../../redux/rootState';
import { getCheckinFrom, getCheckinTo } from '../../redux/selectors';
import { open } from '../modal/modal.actions';
import SingleCar from '../single-car';
import { setRentStep } from '../stepper/stepper.actions';
import { formActions } from './checkin-form.actions';
import * as form from './checkin-form.form';
import useStyles from './checkin-form.styles';
import { checkintime } from '../checkin-date/checkin-date.actions';

const CheckinForm = (): ReactElement => {
    const dispatch = useDispatch();
    const router = useRouter();
    const styles = useStyles();

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);

    // form
    const value = useSelector((state: IState): ICheckin => state.form);
    // total days
    const {checkin} : any = useSelector((state) => state);
    const formik = useFormik({
        initialValues: value,
        validationSchema: form.userSchema,
        onSubmit: values => {
            if(!(Number(checkin.time.totaldays) > 0)){
                     dispatch(open(form.warn.day));
              return;
            }
            
            const DateFrom = {...checkin.from ,time: checkin.time.ztimefrom == "AM" ? checkin.time.timefrom : checkin.time.timefrom + 12}
            const DateTo = {...checkin.to ,time : checkin.time.ztimeto == "AM" ? checkin.time.timeto : checkin.time.timeto + 12}
            //console.log(checkin)
            console.log('dates',DateFrom,DateTo)
            console.log(isCorrectEnd(DateFrom,DateTo,24))
            if (!isCorrectStart(DateFrom, 2)) {
                dispatch(open(form.warn.start));
                return;
            }
            // if (!isCorrectEnd(DateFrom,DateTo,24)) {
            //      dispatch(open(form.warn.end));
            //      return;
            //  }
            //console.log(values)
             // form data
             dispatch(formActions(values));

            const totalhours = gettotalhours(DateFrom,DateTo)
            console.log('total-hours',totalhours)
            dispatch(checkintime({  ...checkin.time,totalhours }));
             
            // stepper
            dispatch(setRentStep(1));

            // push history
           router.push('/address/' + router.query.car);
        },
    });

    return (
        <Grid className={styles.container} container spacing={5}>
            <Grid className={styles.root} item xs={12} md={4}>
                <Typography className={styles.title} variant="h5" component="h3">
                    Personal Information
                </Typography>

                <form onSubmit={formik.handleSubmit} noValidate autoComplete="off">
                    <TextField
                        className={styles.input}
                        id="firstName"
                        name="firstName"
                        error={formik.touched.firstName && !!formik.errors.firstName}
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        label={formik.touched.firstName && !!formik.errors.firstName ? formik.errors.firstName : 'First name'}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        className={styles.input}
                        id="lastName"
                        name="lastName"
                        error={formik.touched.lastName && !!formik.errors.lastName}
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        label={formik.touched.lastName && !!formik.errors.lastName ? formik.errors.lastName : 'Last name'}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        className={styles.input}
                        id="email"
                        name="email"
                        error={formik.touched.email && !!formik.errors.email}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        label={formik.touched.email && !!formik.errors.email ? formik.errors.email : 'Email'}
                        variant="outlined"
                        fullWidth
                    />

                    <TextField
                        className={styles.input}
                        id="phone"
                        name="phone"
                        error={formik.touched.phone && !!formik.errors.phone}
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        label={formik.touched.email && !!formik.errors.email ? formik.errors.email : 'Phone number'}
                        variant="outlined"
                        fullWidth
                    />

                    <Button variant="contained" color="primary" size="large" type="submit">
                        Next step
                    </Button>
                </form>
            </Grid>

            <Grid className={styles.root} item xs={12} md={8}>
                <SingleCar />
            </Grid>
        </Grid>
    );
};

export default CheckinForm;
