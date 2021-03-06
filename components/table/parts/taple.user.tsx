import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { IState } from '../../../redux/rootState';
import { useStyles } from '../table.srtyles';

interface IForm {
    firstName: string;
    lastName: string;
    email: string;
    phone : number;
}

const User = (): ReactElement => {
    const styles = useStyles();
    const { firstName, lastName, email, phone } = useSelector((state: IState): IForm => state.form);

    return (
        <TableContainer className={styles.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.head} colSpan={2}>
                            Your personal data
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            First name:
                        </TableCell>
                        <TableCell>{firstName}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Last name:
                        </TableCell>
                        <TableCell>{lastName}</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Email:
                        </TableCell>
                        <TableCell>{email}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={styles.side} component="th" scope="row">
                            Phone number:
                        </TableCell>
                        <TableCell>{phone}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default User;
