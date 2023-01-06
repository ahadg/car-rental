import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCustomDateObj, createNativeDateObj, gettotalhours } from '../../helpers/dateUtils';
import { IDate } from '../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo } from '../../redux/selectors';
import Calendar from '../calendar';
import Time from '../time';
import { checkinFromDate, checkinToDate, checkintime } from './checkin-date.actions';
import useStyles from './checkin-date.styles';
import BasicDateRangePicker from './MuiDateRangePicker';
import BasicTimePicker from './MuiTimePicker';
// import './calender.css';

const CheckinDate = (): ReactElement => {
    const styles = useStyles();
    const matches = useMediaQuery('(max-width:1200px)');

    // date objects
    const dispatch = useDispatch();
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const { checkin }: any = useSelector(state => state);

    console.log('dateeee', { dateFrom, dateTo });

    // calendar handlers
    const handleChangeFrom = (date: Date): void => {
        const customDateObj = createCustomDateObj(date);
        dispatch(checkinFromDate(customDateObj));
    };

    const handleChangeTo = (date: Date): void => {
        dispatch(checkinToDate(createCustomDateObj(date)));
    };

    const [calendopen, setcalendopen] = useState(false);

    // useEffect(() => {
    //     console.log('dates',dateFrom,dateTo)
    //     let date = new Date()
    //     date.setDate(date.getDate() + 1)
    //     dispatch(checkinToDate(createCustomDateObj(date)));
    // },[])

    const [ztimefrom, setztimefrom] = useState(checkin.time.ztimefrom);
    const [timefrom, settimefrom] = useState(checkin.time.timefrom);

    const [ztimeto, setztimeto] = useState(checkin.time.ztimeto);
    const [timeto, settimeto] = useState(checkin.time.timeto);

    // time handlers
    const handleChangeTimeFrom = (ztime: any, time: any): void => {
        setztimefrom(ztime);
        settimefrom(time);
    };

    const handleChangeTimeTo = (ztime: any, time: any): void => {
        setztimeto(ztime);
        settimeto(time);
    };

    const [disablecode, setdiablescode] = useState(true);

    useEffect(() => {
        console.log('dateeee3', {
            dateFromTimee: ztimefrom ? (ztimefrom == 'PM' ? timefrom + 12 : timefrom) : 0,
            dateToTimee: ztimeto ? (ztimeto == 'PM' ? timeto + 12 : timeto) : 0,
        });
        let from = new Date(
            new Date(createNativeDateObj(dateFrom)).setHours(ztimefrom ? (ztimefrom == 'PM' ? timefrom + 12 : timefrom) : 0),
        ).getTime();
        let to = new Date(
            new Date(createNativeDateObj(dateTo)).setHours(ztimeto ? (ztimeto == 'PM' ? timeto + 12 : timeto) : 0),
        ).getTime();
        const diffTime = Math.abs(from - to);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        dispatch(checkintime({ ...checkin.time, totaldays: diffDays, ztimefrom, timefrom, ztimeto, timeto }));
    }, [dateFrom, dateTo, ztimeto, timeto, ztimefrom, timefrom]);

    useEffect(() => {
        if (!disablecode) {
            handleChangeTimeFrom(ztimefrom, timefrom);
        }
    }, [ztimefrom, timefrom]);

    useEffect(() => {
        if (!disablecode) {
            handleChangeTimeTo(ztimeto, timeto);
        }
    }, [ztimeto, timeto]);

    useEffect(() => {
        // var date = new Date();
        // var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
        // var am_pm = date.getHours() >= 12 ? "PM" : "AM";
        // console.log("am_pm",am_pm,hours)
        // handleChangeTimeFrom(am_pm,hours)

        function addHours(numOfHours, date = new Date()) {
            date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

            return date;
        }
        const result = addHours(2);

        var hours2 = new Date(result).getHours() > 12 ? new Date(result).getHours() - 12 : new Date(result).getHours();
        var am_pm2 = new Date(result).getHours() >= 12 ? 'PM' : 'AM';
        handleChangeTimeFrom(am_pm2, hours2);
        setdiablescode(false);
    }, []);

    // setTimeout(() => {
    //     // css-9yjdhh-MuiDialogContent-root
    //     let el = document.querySelector('.MuiDialogContent-root div:nth-child(1) div:nth-child(1)');

    //     console.log("the_el",el)
    //     if(el) {
    //         el.innerHTML = '<div style="position: absolute; pointer-events: none; color: rgba(130, 130, 130, 0.62); z-index: 100000; width: 100%; text-align: center; bottom: 50%; right: 0px; letter-spacing: 5px; font-size: 24px;"></div>'
    //     }

    // }, 5000);
    useEffect(() => {
        setTimeout(() => {
            let el = document.querySelector('.MuiDialogContent-root div:nth-child(1) div:nth-child(1)');

            console.log('the_el', el);
            if (el) {
                el.innerHTML =
                    '<div style="position: absolute; pointer-events: none; color: rgba(130, 130, 130, 0.62); z-index: 100000; width: 100%; text-align: center; bottom: 50%; right: 0px; letter-spacing: 5px; font-size: 24px;"></div>';
            }

            let el2 = document.querySelector('.MuiPaper-root div:nth-child(1) div:nth-child(1)');
            //MuiPaper-root

            console.log('the_el', el);
            if (el2) {
                el2.innerHTML =
                    '<div style="position: absolute; pointer-events: none; color: rgba(130, 130, 130, 0.62); z-index: 100000; width: 100%; text-align: center; bottom: 50%; right: 0px; letter-spacing: 5px; font-size: 24px;"></div>';
            }
        }, 100);
    }, [calendopen]);
    //el.innerHTML = ''

    return (
        <>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={matches ? 1 : 10}>
                <Grid className={styles.container} item xs={12} md={6}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        From:
                    </Typography>
                    <Typography className={styles.text} variant="body1">
                        Select time of vehicle pick-up.
                    </Typography>
                    <Calendar date={createNativeDateObj(dateFrom)} start={2} onChange={handleChangeFrom} />
                    <Time
                        title="Pick-up Time:"
                        //date={dateFrom}
                        track="inverted"
                        setztime={setztimefrom}
                        ztime={ztimefrom}
                        time={timefrom}
                        settime={settimefrom}
                        onChange={handleChangeTimeFrom}
                    />
                </Grid>

                <Grid className={styles.container} item xs={12} md={6}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        To:
                    </Typography>
                    <Typography className={styles.text} variant="body1">
                        Please select time 24hours from pick-up.
                    </Typography>
                    <Calendar date={createNativeDateObj(dateTo)} start={6} onChange={handleChangeTo} />
                    <Time
                        setztime={setztimeto}
                        ztime={ztimeto}
                        time={timeto}
                        settime={settimeto}
                        title="Drop-off Time:"
                        onChange={handleChangeTimeTo}
                    />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider> */}
            <Typography className={styles.title} variant="h5" component="h3">
                Select Data & Time
            </Typography>
            <BasicDateRangePicker setcalendopen={setcalendopen} calendopen={calendopen} />
            <BasicTimePicker text={'Pick-up Time'} />
            <span style={{ marginLeft: '16px', marginRight: '16px' }}>to</span>
            <BasicTimePicker text={'ReturnTime'} />
        </>
    );
};

export default CheckinDate;
