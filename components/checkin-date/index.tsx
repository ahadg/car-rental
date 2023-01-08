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

const CheckinDate = () => {
    const styles = useStyles();
    const matches = useMediaQuery('(max-width:1200px)');

    // date objects
    const dispatch = useDispatch();
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const { checkin }: any = useSelector(state => state);
    const [muiDateValue,setmuiDateValue] = useState({})
    const [muiPickupTimeValue,setPickupTimeValue] = useState()
    const [muiReturnValue,setReturnTimeValue] = useState()
    

    console.log('muiDateValue', muiDateValue,{muiPickupTimeValue,muiReturnValue});

    // calendar handlers
    const handleChangeFrom = (date: Date): void => {
        const customDateObj = createCustomDateObj(date);
        // {
        //     "date": "2023-02-17T16:00:00.000Z",
        //     "customDateObj": {
        //         "year": 2023,
        //         "month": 1,
        //         "day": 17,
        //         "time": 21
        //     }
        // }
        console.log("handleChangeFrom",{date,customDateObj})
        dispatch(checkinFromDate(customDateObj));
    };

    const handleChangeTo = (date: Date): void => {
        dispatch(checkinToDate(createCustomDateObj(date)));
        console.log("handleChangeFrom",{date,customDateObj : createCustomDateObj(date)})
    };

    const [calendopen, setcalendopen] = useState(false);

    useEffect(() => {
      if(muiDateValue) {
        if(muiDateValue?.[0]?.['$d'])  {
            handleChangeFrom(muiDateValue?.[0]?.['$d']) 
        }
        console.log(muiDateValue?.[0]?.['$d'],muiDateValue?.[1]?.['$d'])
        if(muiDateValue?.[1]?.['$d']) {
            handleChangeTo(muiDateValue?.[1]?.['$d']) 
        }
        // handleChangeTo(muiDateValue[1]?.$d)
      }
    },[muiDateValue])


    const [ztimefrom, setztimefrom] = useState(checkin.time.ztimefrom);
    const [timefrom, settimefrom] = useState(checkin.time.timefrom || 1);
    const [timefromminutes, settimefromminutes] = useState(checkin.time.timefromminutes || 1);

    const [ztimeto, setztimeto] = useState(checkin.time.ztimeto);
    const [timeto, settimeto] = useState(checkin.time.timeto || 1);
    const [timetominutes, settimetominutes] = useState(checkin.time.timetominutes || 1);

    // time handlers
    const handleChangeTimeFrom = (time: any): void => {
        console.log("time",time)
     
        setztimefrom(time?.$H > 12 ? "PM" : 'AM');
        settimefrom(time?.$H > 12 ? time?.$H - 12 : time?.$H);
        settimefromminutes(time?.$m || 0)
    };

    const handleChangeTimeTo = (time: any): void => {
        console.log("time",time)
        setztimeto(time?.$H > 12 ? "PM" : 'AM');
        settimeto(time?.$H > 12 ? time?.$H - 12 : time?.$H);
        settimetominutes(time?.$m || 0)
        // setztimeto(ztime);
        // settimeto(time);
    };

    const [disablecode, setdiablescode] = useState(true);

    console.log("ztime__",{ztimefrom,timefrom,ztimeto,timeto})

    useEffect(() => {
        let from = new Date(
            new Date(createNativeDateObj(dateFrom)).setHours(ztimefrom ? (ztimefrom == 'PM' ? timefrom + 12 : timefrom) : 0),
        ).getTime();
        let to = new Date(
            new Date(createNativeDateObj(dateTo)).setHours(ztimeto ? (ztimeto == 'PM' ? timeto + 12 : timeto) : 0),
        ).getTime();
        const diffTime = Math.abs(from - to);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        dispatch(checkintime({ ...checkin.time, totaldays: diffDays, ztimefrom, timefrom, ztimeto, timeto,timefromminutes,timetominutes }));
        console.log('dateeee3', {
            totaldays: diffDays, ztimefrom, timefrom, ztimeto, timeto
        });
    }, [dateFrom, dateTo, ztimeto, timeto, ztimefrom, timefrom,timefromminutes,timefromminutes]);

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
        </MuiPickersUtilsProvider>
            <Typography className={styles.title} variant="h5" component="h3">
                Select Data & Time
            </Typography>
            <div className="date-time-picker-mui">
                <div className="calender-side">
                    <BasicDateRangePicker setcalendopen={setcalendopen} calendopen={calendopen} setmuiDateValue={setmuiDateValue} />
                </div>
                <div className="time-side">
                    <BasicTimePicker text={'Pick-up Time'} setValuefunc={handleChangeTimeFrom} />
                    {/* <span style={{ marginLeft: '16px', marginRight: '16px' }}>to</span> */}
                    <BasicTimePicker text={'ReturnTime'} setValuefunc={handleChangeTimeTo}/>
                </div>
            </div>
        </>
    );
};

export default CheckinDate;
