import 'date-fns';

import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React, { ReactElement, useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createCustomDateObj, createNativeDateObj,gettotalhours } from '../../helpers/dateUtils';
import { IDate } from '../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo } from '../../redux/selectors';
import Calendar from '../calendar';
import Time from '../time';
import { checkinFromDate, checkinToDate,checkintime } from './checkin-date.actions';
import useStyles from './checkin-date.styles';

const CheckinDate = (): ReactElement => {
    const styles = useStyles();
    const matches = useMediaQuery('(max-width:1200px)');

    // date objects
    const dispatch = useDispatch();
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const {checkin} : any = useSelector((state) => state);
    
    // calendar handlers
    const handleChangeFrom = (date: Date): void => {
        const customDateObj = createCustomDateObj(date);
        dispatch(checkinFromDate(customDateObj));
    };

    const handleChangeTo = (date: Date): void => {
        dispatch(checkinToDate(createCustomDateObj(date)));
    };

    // useEffect(() => {
    //     console.log('dates',dateFrom,dateTo)
    //     let date = new Date()
    //     date.setDate(date.getDate() + 1)
    //     dispatch(checkinToDate(createCustomDateObj(date)));
    // },[])

    useEffect(() => {
       let from = new Date(createNativeDateObj(dateFrom)).getTime()
       let to = new Date(createNativeDateObj(dateTo)).getTime()
       console.log(from,to)
       const diffTime = Math.abs(from - to);
       const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
       console.log('old checkin', checkin.time)
       dispatch(checkintime({  ...checkin.time,totaldays : diffDays }));
    },[dateFrom,dateTo])

    // time handlers
    const handleChangeTimeFrom = (ztime : any,time : any): void => {
        // const customDateObj = { ...dateFrom, time };
        // dispatch(checkinFromDate(customDateObj));
        dispatch(checkintime({  ...checkin.time,ztimefrom : ztime,timefrom : time }));
    };

    const handleChangeTimeTo = (ztime : any,time : any): void => {
    //    const customDateObj = { ...dateTo, time };
    //    dispatch(checkinToDate(customDateObj));
        dispatch(checkintime({  ...checkin.time,ztimeto : ztime,timeto : time }));
    };

    const [ztimefrom,setztimefrom] = useState(checkin.time.ztimefrom)
    const [timefrom,settimefrom] = useState(checkin.time.timefrom)

    const [ztimeto,setztimeto] = useState(checkin.time.ztimeto)
    const [timeto,settimeto] = useState(checkin.time.timeto)

    useEffect(() => {
        handleChangeTimeFrom(ztimefrom,timefrom)
    },[ztimefrom,timefrom])

    useEffect(() => {
        handleChangeTimeTo(ztimeto,timeto)
    },[ztimeto,timeto])


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container spacing={matches ? 1 : 10}>
                <Grid className={styles.container} item xs={12} md={6}>
                    <Typography className={styles.title} variant="h5" component="h3">
                        From:
                    </Typography>
                    <Typography className={styles.text} variant="body1">
                        Select time of vehicle pick-up.
                    </Typography>
                    <Calendar date={createNativeDateObj(dateFrom)} start={2} onChange={handleChangeFrom} />
                    <Time title="Pick-up Time:" 
                       //date={dateFrom} 
                       track="inverted"
                       setztime={setztimefrom}
                       ztime={ztimefrom}
                       time={timefrom}
                       settime={settimefrom}
                       onChange={handleChangeTimeFrom} />
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
                    title="Drop-off Time:" onChange={handleChangeTimeTo} />
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    );
};

export default CheckinDate;
