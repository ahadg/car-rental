import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import jsonfile from 'jsonfile';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import loadJsonFile from 'load-json-file'
import data from '../../assets/orders.json';
const warn = 'Please, select a city in the search bar!';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            margin: 20,
            display: 'block',
            backgroundColor: '#233833',
            color: 'white',
            padding: 20,
        },
        subheader: {
            display: 'block',
            backgroundColor: '#1f4038',
            color: 'white',
            padding: 20,
        },
        link: {
            display: 'block',
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        button: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            fontWeight: 700,
        },
        ul: {
            backgroundColor: 'black',
        },
        subHeader: {
            margin: 50,
        },
        list: {
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            '& > *': {
                width: 300,
                wordBreak: 'break-word',
            },
        },
        btn: {
            marginBottom: theme.spacing(10),

            '& > *': {
                margin: theme.spacing(1),
            },
        },
        email: {
            background: '#ecf0f1',
            border: '#ccc 1px solid',
            borderBottom: '#ccc 2px solid',
            padding: 8,
            width: 250,
            color: '#AAAAAA',
            marginTop: 10,
            fontSize: 16,
            borderRadius: 4,
        },
        btn2: {
            float: 'left',
            background: '#3498db',
            width: '125px',
            paddingTop: '5px',
            paddingBottom: '5px',
            color: 'white',
            borderRadius: '4px',
            border: '#2980b9 1px solid',
            marginTop: 8,
        },
        flexdisplay: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        },
    }),
);

const Address = (): ReactElement => {
    const styles = useStyles();
    const dispatch = useDispatch();
    const router = useRouter();
    const [pass, setpass] = useState('');
    const [showhistory, setshowhistory] = useState(false);
    const [showerror, setshowerror] = useState(false);
    const handleonchange = () => {
        if (pass === 'numpy12@!') {
            setshowhistory(true);
            setshowerror(false);
        } else {
            setshowerror(true);
        }
    };
    console.log(data);
    return (
        <>
            <Head>
                <title>Admin Side </title>
            </Head>
            {!showhistory && (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div className={styles.flexdisplay}>
                        <input
                            onChange={e => setpass(e.target.value)}
                            type="password"
                            name="email"
                            value={pass}
                            className={styles.email}
                        />
                        <button onClick={() => handleonchange()} className={styles.btn2}>
                            Sign In
                        </button>
                        {showerror && <h4 style={{ color: 'red' }}> Password is incorrect </h4>}
                    </div>
                </div>
            )}
            {showhistory && (
                <div>
                    <header className={styles.header}>
                        <h2>Order History</h2>
                    </header>
                    <div className={styles.subHeader}>
                        <div className={styles.subheader}>
                            <ul className={styles.list}>
                                <li>ID</li>
                                <li>Full Name</li>
                                <li>Email</li>
                                <li>Phone</li>
                                <li>Place</li>
                                <li>Price Per hour</li>
                                <li>Rent time</li>
                                <li>TotalCost</li>
                                <li>Date</li>
                                <li>img</li>
                                <li>Title</li>
                                <li>Text</li>
                                <li>Extras</li>
                            </ul>
                        </div>
                        <div>
                            {data.map((item, index) => (
                                <ul className={styles.list}>
                                    <li>{data.length - index}</li>
                                    <li>
                                        {item.firstName} {item.lastName}
                                    </li>
                                    <li>{item.email}</li>
                                    <li>{item.phone}</li>
                                    <li>{item.place}</li>
                                    <li>{item.price}</li>
                                    <li>{item.total}</li>
                                    <li>{item.totalCost}</li>
                                    <li>
                                        {item.from ? item.from.day : ''}.{item.from ? item.from.month : ''}.
                                        {item.from ? item.from.year : ''} {item.from ? item.time?.timefrom : ''}:00 {item.time?.ztimefrom} --{' '}
                                        {item.to ? item.to.day : ''}.{item.from ? item.to.month : ''}.
                                        {item.from ? item.to.year : ''} {item.from ? item.time?.timeto : ''}:00 {item.time?.ztimeto}
                                    </li>
                                    <li>
                                        <img style={{ width: 100 }} src={`./${item.img}`} alt="Logo" />
                                    </li>
                                    <li>{item.title}</li>
                                    <li>{item.text}</li>
                                    <li>{
                                         item.extrapackages?.map((item) => `${item.heading}-`)
                                     }
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Address;
