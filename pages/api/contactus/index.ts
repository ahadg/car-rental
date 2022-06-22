import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// const CLIENT_ID = '118265115840-mi3l894gdnv6a9rme975tjkt5l9oql08.apps.googleusercontent.com'
// const CLIENT_SECRET = 'GFb1BFyHBeA0mnS_q2P1q1W1'
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN = '1//04dzdRa2Wz6DZCgYIARAAGAQSNwF-L9IrwLdnKqRspWeLcMXExknTQGCvLd6vm9Kkm_S0eYbGfCP_dm07qAqWOpuY9nTRdgJQJiE'

const CLIENT_ID = '964542480942-svo8rucmirdu351eee04odm6etd7j815.apps.googleusercontent.com';
const CLIENT_SECRET = 'sNa1JgYFU60vT7LxnUAKYpeQ';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//047JqZVsaQmo7CgYIARAAGAQSNwF-L9IrjxYtnY7tXHc17YosbsglU-l9pQkWCyQ7VbccOAxg0l0KzJU320ZBqRdtp5KyC9q-RpQ';

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { firstname, lastname,  email, themessage } = req.body;
    console.log(req.body)

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
    const sendMail = async () => {
        try {
            const accessToken = await oAuth2Client.getAccessToken();
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                auth: {
                    type: 'OAuth2',
                    user: 'agilecarrental@gmail.com',
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken,
                },
                tls:{
                    rejectUnauthorized:false
                }
            });
         

            

            const message = {
                from: 'Agile Car Rental <agilecarrental@gmail.com>',
                to: 'agilecarrental@gmail.com',
                bcc: 'Agile Car Rental <agilecarrental@gmail.com>',
                subject: `Contact us request from ${firstname} ${lastname}`,
                html: `
                <style>
                    .car-rent-container{font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background-color:#f1f1f1;font-size:10px}
                    .car-rent-wrp{padding:4em 2em}.car-rent-container h2{font-size:2.4em;margin-bottom:1em}.car-rent-container h2 a{text-decoration:none;color:#4747c0}
                    .car-rent-container h2 a:hover{text-decoration:underline;color:#2121eb}.car-rent-container h2, .car-rent-container h3, .car-rent-container h4 a:hover{margin-top: 0}
                    .car-rent-container img{display:block;width:100%;height:15em;border-radius:0.5em;-o-object-fit:cover;object-fit:cover}
                    .car-rent-general{margin-top:2em;padding:1em 1.5em 4em;border-radius:0.5em;background-color:#fff}.car-rent-general h3{margin-bottom:1em;font-size:2em}
                    .car-rent-general h4{margin-bottom:1em;font-size:1.4em;color:#f36f22}.car-rent-general table{font-size:0.6em;text-align:left;border-collapse:collapse}
                    .car-rent-general table td,.car-rent-general table th{padding:1em;border:none}.car-rent-general table th{width:10em}
                    .car-rent-general tr:nth-of-type(odd){background-color:#f1f1f1}@media (min-width:768px){.car-rent-container{font-size:20px}.car-rent-wrp{width:80%;margin:0 auto}
                    .car-rent-container img{height:25em}}@media (min-width:964px){.car-rent-container h2{font-size:2.5em;}.car-rent-general{padding:4em}}
                    @media (min-width:1400px){.car-rent-container{font-size:25px}.car-rent-container h2{font-size:3em}.car-rent-wrp{width:70%}}
                </style>
                <div class="car-rent-container">
                    <div class="car-rent-wrp">
                        <h3>Request from ${firstname} ${lastname}</h3>
                        <div class="car-rent-general">
                            <h4>Contactus Description:</h4>
                            <table style="width: 100%;">
                                <tr>
                                    <th>First name:</th>
                                    <td>${firstname}</td>
                                </tr>
                                <tr>
                                    <th>Last name:</th>
                                    <td>${lastname}</td>
                                </tr>
                                <tr>
                                    <th>User Email:</th>
                                    <td>${email}</td>
                                </tr>
                                <tr>
                                    <th>Contact us reason:</th>
                                    <td>${themessage}</td>
                                </tr>
                                
                            </table>
                        </div>
                    </div>
                </div>
            `,
            };

            transporter.sendMail(message, async (error, info) => {
                if (error) {
                    console.log('Error while sending email',error);
                    await res.status(500).json({ message: `Error occurred`, error });
                } else {
                    console.log('Email sent: ' + info.response);
                    await res.status(200).json(req);
                }
            });
        } catch (error) {
            console.log(error);
        }
    };
    sendMail();
}
