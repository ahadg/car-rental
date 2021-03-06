import { IDate,ITime } from '../../interfaces/interfaces';
import * as types from './checkin-date.types';

export const checkinFromDate = (fromDay: IDate): types.ActionTypes => ({
    type: types.CHECKIN_DATE_FROM,
    payload: fromDay,
});

export const checkinToDate = (toDay: IDate): types.ActionTypes => ({
    type: types.CHECKIN_DATE_TO,
    payload: toDay,
});

export const checkintime = (itime: ITime): types.ActionTypes => ({
    type: types.CHECKIN_TIME,
    payload: itime,
});

export const checkinDone = (done: boolean): types.ActionTypes => ({
    type: types.CHECKIN_DONE,
    payload: done,
});
