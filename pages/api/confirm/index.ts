import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// const CLIENT_ID = '118265115840-mi3l894gdnv6a9rme975tjkt5l9oql08.apps.googleusercontent.com'
// const CLIENT_SECRET = 'GFb1BFyHBeA0mnS_q2P1q1W1'
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN = '1//04dzdRa2Wz6DZCgYIARAAGAQSNwF-L9IrwLdnKqRspWeLcMXExknTQGCvLd6vm9Kkm_S0eYbGfCP_dm07qAqWOpuY9nTRdgJQJiE'

const CLIENT_ID = '964542480942-svo8rucmirdu351eee04odm6etd7j815.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04keckb5C8G7DCgYIARAAGAQSNwF-L9IriSCRlOrzhAKOhAv3S7y4KychhNu6v3ZRbvZDaFYj7o0fVokvFDUhYBMEP75S4rptUF0';

export default async function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { firstName, lastName, img, email, title, text, price, total,time, totalcost, from, to, phone, description,extrapackages, totaldays,totalprice } = req.body;
    // console.log( firstName, lastName, img, email, title, text, price, total, totalCost,date)
    console.log('date', req.body);
    fs.readFile('./assets/orders.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log('err', err);
        } else {
            try {
                const parsedjson = JSON.parse(jsonString);
                parsedjson.unshift({
                    firstName,
                    lastName,
                    img,
                    email,
                    phone,
                    title,
                    text,
                    price,
                    total,
                    totalcost,
                    from,
                    to,
                    place: description,
                    extrapackages,
                    time,
                    totaldays,
                });
                fs.writeFile('./assets/orders.json', JSON.stringify(parsedjson, null, 2), err => {
                    console.log(err);
                });
            } catch (error) {
                console.log(error);
            }
        }
    });
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
                to: email,
                bcc: 'Agile Car Rental <agilecarrental@gmail.com>',
                subject: `Rent a car "${title}" | Hello! ${firstName} ${lastName}`,
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
                        <h3>Hello! ${firstName} ${lastName}</h3>
                        <h2>
                            You have successfully booked a car with
                            <a href="https://agilecarrental.com" target="_blank" rel="noopener noreferrer">
                                Agile Car Rental   
                            </a>
                            &#127881; &#128663; &#128640;
                        </h2>
                        <img src="https://${req.headers.host}/${img}" alt="Reserved Vehicle" />
                        <div class="car-rent-general">
                            <h3>This message confirms your booking</h3>
                            <h4>Reservation Description:</h4>
                            <table style="width: 100%;">
                                <tr>
                                    <th>Car type:</th>
                                    <td>${title}</td>
                                </tr>
                                <tr>
                                    <th>Car Description:</th>
                                    <td>${text}</td>
                                </tr>
                                <tr>
                                    <th>Date:</th>
                                    <td>${from.month+1}.${from.day}.${from.year} ${time?.timefrom}:00 ${time?.ztimefrom} -- ${to.month+1}.${to.day}.${to.year}  ${time?.timeto}:00 ${time?.ztimeto}</td>
                                </tr>
                                <tr>
                                    <th>Price per Day:</th>
                                    <td>$${price * 24}</td>
                                </tr>
                                <tr>
                                    <th>Total Rent Days:</th>
                                    <td>${time.totaldays} days</td>
                                </tr>
                                <tr>
                                    <th>Packages :</th>
                                    ${extrapackages.map((item) => {
                                        return `<td>${item.heading} : $${item.price} * ${time.totaldays} days = $${item.price * time.totaldays}</td>`
                                    })}
                                </tr>
                               
                                <tr>
                                    <th>Total cost :</th>
                                    ${totalprice}
                                </tr>
                                
                            </table>
                            <p>Thank you for booking with AGILE! You've already taken the first steps to an enjoyable vehicle experience. We will contact you @ ${email}-${phone} 24hrs to your reservation.</p>
                            <p>We'll have a representative reach out via call or email for your driver's license and proof of insurance completing your reservation. </p>
                        </div>
                    </div>
                </div>
            `,
            };

            transporter.sendMail(message, async (error, info) => {
                if (error) {
                    console.log('Error while sending email',error);
                    await res.status(200).json(req);
                } else {
                    console.log('Email sent: ' + info.response);
                    await res.status(200).json(req);
                }
            });
        } catch (error) {
            console.log(error);
            await res.status(200).json(req);
        }
    };
    sendMail();
}
