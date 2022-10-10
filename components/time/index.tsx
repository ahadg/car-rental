import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import { IDate } from '../../interfaces/interfaces';
import marks from './time.marks';
import useStyles from './time.styles';

interface IProps {
    title: string;
    //date: IDate;
    track?: false | 'normal' | 'inverted';
    onChange(ztime: String, time: any): void;
    setztime(ztime: any): void;
    ztime: string;
    settime(ztime: number): void;
    time: number;
}

const Time = ({ title, track = 'normal', onChange, setztime, ztime, settime, time }: IProps): ReactElement => {
    const styles = useStyles();

    return (
        <Grid className={styles.container} item xs>
            <Typography className={styles.title} variant="h5" component="h3">
                {title}
                <div className={styles.time}>
                    <div onClick={() => setztime('AM')} className={ztime == 'AM' ? styles.timeblockactive : styles.timeblock}>
                        AM
                    </div>
                    <div onClick={() => setztime('PM')} className={ztime == 'PM' ? styles.timeblockactive : styles.timeblock}>
                        PM
                    </div>
                </div>
            </Typography>
            <Typography className={styles.title2} variant="h5" component="h3">
                <div className={styles.time2}>
                    <AccessTime style={{ fontSize: 30, marginRight: 6 }} />
                    <div>
                        {time ? time + ':00 ' : 'Please Choose time'}
                        {ztime}{' '}
                    </div>
                </div>
            </Typography>
            <Grid className={styles.slider} item xs>
                <Slider
                    style={{ fontSize: 8 }}
                    //defaultValue={time}
                    value={time}
                    onChange={(e, time: any) => {
                        settime(time);
                    }}
                    //getAriaValueText={(value: number): string => value + ':00'}
                    aria-labelledby="discrete-slider-custom"
                    valueLabelDisplay="off"
                    track={track}
                    step={1}
                    marks={marks}
                    min={1}
                    max={12}
                />
            </Grid>
        </Grid>
    );
};

export default Time;
