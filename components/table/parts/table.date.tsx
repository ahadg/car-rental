import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { ReactElement,useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import { totlaCheckinTime } from '../../../helpers/dateUtils';
import formatPrice from '../../../helpers/priceFormate';
import { ICar, IDate } from '../../../interfaces/interfaces';
import { getCheckinFrom, getCheckinTo, getSingleCarSelector } from '../../../redux/selectors';
import { useStyles } from '../table.srtyles';
import { getFormatedNumber } from '../../../helpers/analitic';

const Date = (): ReactElement => {
    const styles = useStyles();
    const allstates : any = useSelector((state) => state);
    const {Packagesstatus} : any = useSelector((state) => state);

    // car
    const car: ICar = useSelector(getSingleCarSelector);

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);

    const {checkin} : any = useSelector((state) => state);
    let [theprice,settheprice] : any = useState(Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays * 7.50))
    useEffect(() => {
        let modprice = Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays * 7.50)
        Packagesstatus.packagesstatus.map((item) => {
            modprice = Number(modprice) + Number(item.price * allstates.checkin.time.totaldays)
        })
        console.log(modprice,modprice)
        settheprice((Number(modprice)).toFixed(2))
    },[allstates])

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head} colSpan={2}>
                            Checkin resume
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Start date:
                        </TableCell>
                        <TableCell>{`${dateFrom.month+1}.${dateFrom.day}.${dateFrom.year} ${getFormatedNumber(allstates.checkin?.time?.timefrom)}:${getFormatedNumber(allstates.checkin?.time?.timefromminutes)} ${allstates.checkin?.time?.ztimefrom}`}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            End date:
                        </TableCell>
                        <TableCell>{`${dateTo.month+1}.${dateTo.day}.${dateTo.year} ${getFormatedNumber(allstates.checkin?.time?.timeto)}:${getFormatedNumber(allstates.checkin?.time?.timetominutes)} ${allstates.checkin?.time?.ztimeto}`}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Total rent days:
                        </TableCell>
                        <TableCell>{`${checkin.time.totaldays}`}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Total cost:
                        </TableCell>
                        <TableCell>{`$${theprice}`}</TableCell>
                {/* <TableCell>{`$${formatPrice(checkin.time.totaldays * car.price * 24)}`}</TableCell> */}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Date;
