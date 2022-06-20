import { IDate,ITime } from '../../interfaces/interfaces';

export const CHECKIN_DATE_FROM = 'CHECKIN_DATE_FROM';
export const CHECKIN_DATE_TO = 'CHECKIN_DATE_TO';
export const CHECKIN_TIME = 'CHECKIN_TIME';
export const CHECKIN_DONE = 'CHECKIN_DONE';

interface ICheckinDateFrom {
    type: typeof CHECKIN_DATE_FROM;
    payload: IDate;
}
interface ICheckinDateTo {
    type: typeof CHECKIN_DATE_TO;
    payload: IDate;
}
interface ICHECKIN_TIME {
    type: typeof CHECKIN_TIME;
    payload: ITime;
}
interface ICheckinDone {
    type: typeof CHECKIN_DONE;
    payload: boolean;
}

export type ActionTypes = ICheckinDateFrom | ICheckinDateTo | ICheckinDone | ICHECKIN_TIME;
