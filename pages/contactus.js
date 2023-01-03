import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import * as Loader from '../components/loader/loader.actions';
import { useDispatch, useSelector } from 'react-redux';
import * as Warn from '../components/modal/modal.actions';
import * as Success from '../components/success/success.actions';
const contactus = () => {
    const [firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState('')
    const [email,setemail] = useState('')
    const [themessage,setthemessage] = useState('')
    const warn = 'Network error, please try again later';
    const success = 'Your contact us request has been sended to admin';
    const dispatch = useDispatch();
    const handleClickConfirm = () => {
        axios
            .post(process.env.NEXT_PUBLIC_ORIGIN + '/contactus', {firstname,lastname,email,themessage })
            .then(() => {
                dispatch(Loader.end());
                dispatch(Success.open(success));
            })
            .catch(error => {
                dispatch(Loader.end());
                dispatch(Warn.open(warn));
                console.log(error);
            });
    };
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                minHeight: '630px',
            }}
        >
            <Head>
                <title>Agile Car Rental | Contact Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                className="contact-us"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <div
                    className="left"
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'column' }}
                >
                    <div className="tag" style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '50px' }}>
                        Contact Us
                    </div>
                    <div className="desc" style={{ fontSize: '16px' }}>
                        Need to get in touch with us? Either fill out the from
                        <br /> with your inquiry or find the department email you'd
                        <br /> like to contact below
                        <br />
                        <br />
                        <br />Contact us at:
                        <br /><a href={`tel:+1340-626-9224`}>(340)626-9224</a> 
                        <br /> <a href={`tel:+1954-390-1560`}>(954)390-1560</a>
                        <br />
                        <br />Email us at: 
                        <br /><a href={`mailto:agilecarrental@gmail.com`}>@agilecarrental</a>
                    </div>
                </div>
                <div className="right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 2 }}>
                    <div className="block" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                        <div className="field" style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
                            <div className="lbl" style={{ marginBottom: '8px' }}>
                                First Name
                            </div>
                            <input
                                type="text"
                                className="txt"
                                style={{ padding: '10px 8px', width: '280px', fontSize: '16px' }}
                                onChange={(e) => setfirstname(e.target.value)}
                            />
                        </div>
                        <div className="field" style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
                            <div className="lbl" style={{ marginBottom: '8px' }}>
                                Last Name
                            </div>
                            <input
                                type="text"
                                className="txt"
                                style={{ padding: '10px 8px', width: '280px', fontSize: '16px' }}
                                onChange={(e) => setlastname(e.target.value)}
                            />
                        </div>
                        <div className="field" style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
                            <div className="lbl" style={{ marginBottom: '8px' }}>
                                Email
                            </div>
                            <input
                                type="email"
                                className="txt"
                                style={{ padding: '10px 8px', width: '280px', fontSize: '16px' }}
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>
                        <div className="field" style={{ display: 'flex', flexDirection: 'column', marginBottom: '12px' }}>
                            <div className="lbl" style={{ marginBottom: '8px' }}>
                                What can we help you with?
                            </div>
                            <textarea
                                type="text"
                                className="txt"
                                style={{ padding: '10px 8px', height: '100px', width: '280px', fontSize: '16px' }}
                                onChange={(e) => setthemessage(e.target.value)}
                            />
                        </div>
                        <div className="action" style={{ padding: '20px 0', display: 'flex' }}>
                            <button
                                onClick={handleClickConfirm}
                                style={{
                                    padding: '12px 22px',
                                    border: '1px solid #01bf71',
                                    backgroundColor: '#01bf71',
                                    color: '#fff',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contactus;
