import { createStyles, makeStyles, Theme,responsiveFontSizes,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Collapsible from 'react-collapsible';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import 'rc-checkbox/assets/index.css';
import { GiCheckMark} from 'react-icons/gi'
import { createCustomDateObj, createNativeDateObj } from '../../helpers/dateUtils';
import moment from 'moment'
import Star from './star'
import { setRentStep } from '../../components/stepper/stepper.actions';
import { Button } from '@material-ui/core';
import {equipment,protection} from '../../components/packages/packages.helper'
import {useStyles} from './packages.styles'
import { IPlace } from '../../components/places/places.types';
import { IState } from '../../redux/rootState';
import MyStepper from '../../components/stepper';
import { getFormatedNumber } from '../../helpers/analitic';

const Packages = (props): ReactElement => {
    const dispatch = useDispatch();
    const styles = useStyles();
    console.log(props);
    const router = useRouter();
    console.log(router.query);
    const {Packagesstatus} : any = useSelector((state) => state);
    const allstates : any = useSelector((state) => state);
    const {cars} : any = useSelector((state) => state);
    const location: IPlace = useSelector((state: IState): IPlace => state.place);
    const updatestatus = (val) => {
       dispatch({type : 'UPDATE_STATUS',payload:val})
    }


    const handleClickNext = (): void => {
        const nextStep = () => {
            router.push('/confirm/' + 1);
            dispatch(setRentStep(3));
        };
        nextStep()
        //place ? nextStep() : dispatch(open(warn));
    };
    const handleClickBack = (): void => {
        router.push('/address/1');
    };

    let theme = createMuiTheme()
    let thetheme = responsiveFontSizes(theme)
    let [theprice,settheprice] : any = useState(Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays * 7.50))
    useEffect(() => {
        dispatch(setRentStep(2));
        let modprice = Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays * 7.50)
        Packagesstatus.packagesstatus.map((item) => {
            modprice = Number(modprice) + Number(item.price * allstates.checkin.time.totaldays)
        })
        console.log(modprice,modprice)
        settheprice((Number(modprice)).toFixed(2))
    },[allstates])

    console.log('native',allstates.checkin.from)
    console.log('native',createNativeDateObj(allstates.checkin.from))
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <>
            <Head>
                <title>Additional Packages</title>
            </Head>

            <main style={{margin : '4%'}}>
                <Grid container className={styles.row}>
                <MyStepper />
                    {
                        //left side
                    }
                <Grid xl={7} md={7} xs={12}>
                  <div className={styles.flexwidth}>
                    <Grid className={styles.leftnest}>
                        <div className={styles.liteheading}>Pick-Up</div>
                        <div className={styles.litetitle}>{location?.description} </div>
                        <div className={styles.litedate}>{`${strArray[new Date(createNativeDateObj(allstates.checkin.from)).getMonth()]} ${allstates.checkin.from.day} ${new Date(createNativeDateObj(allstates.checkin.from)).getFullYear()}`}, {getFormatedNumber(allstates.checkin?.time?.timefrom)}:{getFormatedNumber(allstates.checkin?.time?.timefromminutes)} {allstates.checkin?.time?.ztimefrom}</div>
                    </Grid>
                    <Grid  className={styles.leftnest2}>
                        <div className={styles.liteheading}>Return</div>
                        <div className={styles.litetitle}>{location?.description} </div>
                        <div className={styles.litedate}>{`${strArray[new Date(createNativeDateObj(allstates.checkin.to)).getMonth()]} ${allstates.checkin.to.day} ${new Date(createNativeDateObj(allstates.checkin.to)).getFullYear()}`}, {getFormatedNumber(allstates.checkin?.time?.timeto)}:{getFormatedNumber(allstates.checkin?.time?.timetominutes)} {allstates.checkin?.time?.ztimeto}</div>
                    </Grid>
                   </div>
                    <div className={styles.headlinerow}>
                        <img 
                        className={styles.theimg}
                        src={'../' + cars.single.value.img} alt="Logo" />
                        <div className={styles.needmargin}>
                            <div className={styles.cartitle}>{cars.single.value?.title} </div>
                            {/* <div className={styles.litetitle}>{cars.single.value?.text}</div> */}
                        </div>
                    </div>

                </Grid>
                <Grid xl={5} md={5} xs={12}>
                    {
                        // right side
                    }
                    <div className={styles.ratestyle}>
                        <div style={{display : 'flex'}}>
                            <div style={{flex : 1}}>
                            <ThemeProvider theme={thetheme}>
                                <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                                    Base Rate
                                </Typography>
                           </ThemeProvider>
                            </div>
                            <ThemeProvider theme={thetheme}>
                                <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                                {`$${allstates.checkin.time.totaldays * allstates.cars.single.value.price * 24} `}
                                </Typography>
                            </ThemeProvider>
                        </div>

                        <div style={{display : 'flex',padding : '10px 0px'}}>
                        <div style={{flex : 1}}>
                            <ThemeProvider theme={thetheme}>
                            <Typography variant="h6" component="h6" style={{fontWeight : 'bold', color : '#005b96'}} >
                            <Collapsible trigger="Taxes & Fees"  >
                            <p style={{fontSize:'10px', fontWeight: 'normal', color : 'black'}}>Motor Vehicle Surcharge ($3.75/day)/Vehicle License Fee($3.75/day)</p>
                            </Collapsible >
                            </Typography>
                           </ThemeProvider>
                        </div>
                        <ThemeProvider theme={thetheme}>
                            <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                            ${allstates.checkin.time.totaldays * 7.50}
                            </Typography>
                        </ThemeProvider>
                        </div>
                        {Packagesstatus.packagesstatus.map((item) => <div style={{display : 'flex',padding : '10px 0px'}}>
                        <div style={{flex : 1}}>
                            <ThemeProvider theme={thetheme}>
                                <Typography variant="h6" component="h6" style={{fontWeight : 'bold',color : '#005b96'}}>
                                  {item.heading}
                                </Typography>
                           </ThemeProvider>
                        </div>
                        <ThemeProvider theme={thetheme}>
                            <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                            {item.price != 0 && '$'}{item.price == 0 ? '' : item.price * allstates.checkin.time.totaldays}
                            </Typography>
                        </ThemeProvider>
                        </div>)
                        }
                        
                        <div style={{display : 'flex',paddingBottom : 30}}>
                            <div style={{flex : 1}}>
                                <ThemeProvider theme={thetheme}>
                                    <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                                      Estimated Total
                                    </Typography>
                                </ThemeProvider>
                            </div>
                            <ThemeProvider theme={thetheme}>
                                <Typography variant="h6" component="h6" style={{fontWeight : 'bold'}}>
                                {  `$${theprice}
                                `}
                                </Typography>
                            </ThemeProvider>
                        </div>

                        <div className={styles.freeextras}>
                          <div>
                            <div style={{display : 'flex',alignItems : 'center'}}>
                            <img 
                            className={styles.tickimg}
                            src={'../' + 'check.png'} alt="Logo" />
                            <div className={styles.tickdesc}>
                                Unlimited Mileage
                            </div>
                            </div>
                            <div style={{display : 'flex',alignItems : 'center'}}>
                            <img 
                            className={styles.tickimg}
                            src={'../' + 'check.png'} alt="Logo" />
                            <div className={styles.tickdesc}>
                                0$ Due Today
                            </div>
                            </div>
                            <div style={{display : 'flex',alignItems : 'center'}}>
                            <img 
                            className={styles.tickimg}
                            src={'../' + 'check.png'} alt="Logo" />
                            <div className={styles.tickdesc}>
                                Free Cancellation
                            </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </Grid>
                </Grid>
                
                    {
                        // extra
                    }
                    <div style={{display : 'flex',justifyContent : 'space-between',alignItems : 'center',padding : '20px 30px',borderTop : '0.5px solid #b3b3b3',borderBottom : '0.5px solid #b3b3b3'}}>
                    <ThemeProvider theme={thetheme}>
                        <Typography variant="h4" component="h4" className={styles.extras}>
                            Recommended Extras
                        </Typography>
                        </ThemeProvider>
                        <ThemeProvider theme={thetheme}>
                        <Button 
                        onClick={() => handleClickNext()}
                        style={{backgroundColor : '#005b96',fontWeight : 'bold'}}>
                        <Typography variant="h6" component="h6" className={styles.continuebtn}>
                             Continue
                        </Typography>
                        </Button>
                        </ThemeProvider>
                    </div>
                    <div style={{marginTop : '4%'}}>
                        <div className={styles.heading}>
                        <ThemeProvider theme={thetheme}>
                        <Typography variant="h4" component="h4" style={{fontWeight : 'bold'}}>
                            Protections & Coverage
                        </Typography>
                        </ThemeProvider>
                            </div>
                                <div className={styles.tag}>
                                    <div className={styles.tagline}>
                                    <div className={styles.star}>
                                    <Star /> 
                                    </div>
                                    <div className={styles.subtagline}>RECOMENDED FOR YOU</div>
                                    </div>
                                    <div className={styles.tagarrow}></div>
                        </div>
                    </div>
                    {
                        protection.map((item) => <div style={{padding : '30px 0px',borderBottom : '0.5px solid #b3b3b3',display : 'flex',flexWrap : 'wrap'}}>
                        <div style={{flex : 1,minWidth : 300}}>
                            <ThemeProvider theme={thetheme}>
                            <Typography variant="h4" component="h3" style={{margin : '6px 0px'}}>
                               {item.heading}
                            </Typography>
                            </ThemeProvider>
                            <ThemeProvider theme={thetheme}>
                            <div className={styles.responsivepara}>
                               {item.title}
                            </div>
                            </ThemeProvider>
                        </div>  
                             
                        <div 
                        onClick={() => updatestatus({heading : item.heading,title : item.title,price : item.price,payment : item.payment})}
                        className={styles.checkbox}>
                            <label style={{padding : '15px 40px 15px 10px',marginLeft : 4,display : 'flex',alignItems : 'center',}}>
                            <div>
                                <div style={{backgroundColor : 'white',width : 27,height : 28,position : 'relative',border : '1px solid #828282'}}>
                                <div style={{position : 'absolute'}}>
                                {(Packagesstatus.packagesstatus.some(el => el.heading == item.heading)) && <GiCheckMark style={{fontSize : 20,margin : '0 8 0 2',color : '#828282'}}/>}
                                </div>
                                </div>
                            </div>
                            <Typography variant="h5" component="h3" style={{marginLeft : 4,marginBottom : 2}}>
                              ${item.price}/{item.payment}
                            </Typography>
                            </label>
                        </div>
                    </div>)
                    }


                    <div style={{marginTop : '4%'}}>
                        <div className={styles.heading}>
                        <ThemeProvider theme={thetheme}>
                        <Typography variant="h4" component="h4" style={{fontWeight : 'bold'}}>
                            Equipment & Services 
                        </Typography>
                        </ThemeProvider>
                            </div>
                    </div>
                    {
                        equipment.map((item) => <div style={{padding : '30px 0px',borderBottom : '0.5px solid #b3b3b3',display : 'flex',flexWrap : 'wrap'}}>
                        <div style={{flex : 1,minWidth : 300}}>
                            <ThemeProvider theme={thetheme}>
                            <Typography variant="h4" component="h3" style={{margin : '6px 0px'}}>
                               {item.heading}
                            </Typography>
                            </ThemeProvider>
                            <ThemeProvider theme={thetheme}>
                            <div className={styles.responsivepara}>
                               {item.title}
                            </div>
                            </ThemeProvider>
                        </div>  
                             
                        <div
                        onClick={() => updatestatus({heading : item.heading,title : item.title,price : item.price,payment : item.payment})}
                        className={styles.checkbox}>
                            <label style={{padding : '15px 40px 15px 10px',marginLeft : 4,display : 'flex',alignItems : 'center',}}>
                            <div>
                                <div style={{backgroundColor : 'white',width : 27,height : 28,position : 'relative',border : '1px solid #828282'}}>
                                <div style={{position : 'absolute'}}>
                                {(Packagesstatus.packagesstatus.some(el => el.heading == item.heading)) && <GiCheckMark style={{fontSize : 20,margin : '0 8 0 2',color : '#828282'}}/>}
                                </div>
                                </div>
                            </div>
                            <Typography variant="h5" component="h3" style={{marginLeft : 4,marginBottom : 2}}>
                              ${item.price}/{item.payment}
                            </Typography>
                            </label>
                        </div>
                    </div>)

                    }



                    <div className={styles.btn}>
                        <Button onClick={handleClickBack} variant="contained">
                            Prev step
                        </Button>
                        <Button onClick={handleClickNext} variant="contained" color="primary">
                            Next step
                        </Button>
                    </div>

            </main>
        </>
    );
};


export default Packages;
