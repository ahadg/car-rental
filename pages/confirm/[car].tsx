import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import AssistantPhotoIcon from '@material-ui/icons/AssistantPhoto';
import RoomIcon from '@material-ui/icons/Room';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement,useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { date } from 'yup';
import { responsiveFontSizes,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import * as Loader from '../../components/loader/loader.actions';
import * as Warn from '../../components/modal/modal.actions';
import * as Actions from '../../components/single-car/single-car.actions';
import MyStepper from '../../components/stepper';
import * as Success from '../../components/success/success.actions';
import FinalTable from '../../components/table';
import ToHomeLink from '../../components/to-home-link';
import { totlaCheckinTime } from '../../helpers/dateUtils';
import formatPrice from '../../helpers/priceFormate';
import { ICar, IDate } from '../../interfaces/interfaces';
import { initialState, IState } from '../../redux/rootState';
import { getCheckinFrom, getCheckinTo, getSingleCarSelector } from '../../redux/selectors';
import { initializeStore } from '../../redux/store';
import 'rc-checkbox/assets/index.css';
import { GiCheckMark} from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { setRentStep } from '../../components/stepper/stepper.actions';
import Modal from 'react-modal';
import { open } from '../../components/modal/modal.actions';
Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


interface IForm {
    firstName: string;
    lastName: string;
    email: string;
}


export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        link: {
            display: 'block',
            marginRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        acceptbtn : {
            display: 'flex',
            alignItems: 'center',
            justifyContent : 'center',
            marginTop: 'auto',
            fontWeight: 700,
            width : '100%',
            backgroundColor : 'black',
            color : 'white',
            height : 100,
            fontSize : 20,
            cursor : 'pointer'
        },
        closebtn : {
            position :'absolute',
            right : 5,
            color : 'white',
            fontSize : 22,
            top : 5,
            backgroundColor : 'black',
            border : 'none',
            borderRadius : 8,
            display : 'flex',
            alignItems : 'center'
         },
        button: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 'auto',
            fontWeight: 700,
        },
        responsivepara : {
            fontSize : 20,
            //width : 20,
            '@media (max-width: 780px)' : {
            fontSize : 16,
            //width : 200,
              }   
        },
        checkbox : {
            display : 'flex',
            flexDirection : 'row',
            backgroundColor : '#005b96',
            color : 'white',
            //height : '30px',
            alignItems : 'center',
            fontSize :'15px',
            height : '70px',
            width : '300px',
            //maxWidth : '120px'
            '@media (max-width: 780px)' : {
                //fontSize : 16,
                //width : 200,
                //width : '200%',
            },
            '@media (max-width: 480px)' : {
                //fontSize : 16,
                //width : 200,
                width : '100%',
            }
        },
        tlink : {
            textDecoration : 'none',
            color : 'orange',
            cursor : 'pointer'
        },
        btn: {
            marginBottom: theme.spacing(10),

            '& > *': {
                margin: theme.spacing(1),
            },
        },
        weight: {
           fontWeight : 'bold'
        },
    }),
);


const warn = 'Network error, please try again later';
const success = 'Hooray! The booking was successful. A confirmation has been sent to your email!';

const Confirm = (): ReactElement => {
    const dispatch = useDispatch();
    const styles = useStyles();
    const router = useRouter();
    const allstates : any = useSelector((state) => state);
    const {Packagesstatus} : any = useSelector((state) => state);
    const [checked,setchecked] = useState(false)

    let theme = createMuiTheme()
    let thetheme = responsiveFontSizes(theme)

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
    setIsOpen(true);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
    }

    function closeModal() {
    setIsOpen(false);
    }

    const handlecheck = () => {
       if(checked){
           setchecked(false)
       }
       else {
       openModal()
       }
    }

    // car
    const car: ICar = useSelector(getSingleCarSelector);
    //export const getCarsListSelector = (state: IState): ICar[] => state.cars.list.value;
    const date  = useSelector((state : IState) => state.checkin);
    // form
    const form = useSelector((state: IState): IForm => state.form);

    //
     const place = useSelector((state: IState) => state.place);

    // date/time
    const dateFrom: IDate = useSelector(getCheckinFrom);
    const dateTo: IDate = useSelector(getCheckinTo);
    const total: number = totlaCheckinTime(dateFrom, dateTo);
    const totalCost: string = formatPrice(total * car.price);

    // stepper
    const activeStep = useSelector((state: IState): number => state.activeStep);

    // push history
    // !activeStep && router.push('/rent/' + router.query.car);

    const handleClickBack = (): void => {
        router.push('/packages');
    };

    useEffect(() => {
        dispatch(setRentStep(3));
    },[])


    const handleClickConfirm = () => {
        if(!checked){
          return dispatch(open('Please accept term & conditions'))
        }
        //let modprice = Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays *7.50)
        let modprice = Number(allstates.checkin?.time?.totaldays * allstates.cars.single?.value?.price * 24 + allstates.checkin?.time?.totaldays * 7.50)
        Packagesstatus.packagesstatus.map((item) => {
            modprice = Number(modprice) + Number(item.price * allstates.checkin.time.totaldays)
        })
        console.log(modprice,modprice)
        //settheprice((Number(modprice)).toFixed(2))
        dispatch(Loader.start());
        console.log({...form, ...car, total, totalCost,"totalprice" : (Number(modprice)).toFixed(2), extrapackages :  Packagesstatus.packagesstatus })
        axios
            .post(process.env.NEXT_PUBLIC_ORIGIN + '/confirm', { ...form, ...car, total ,time : allstates.checkin?.time,totalcost : modprice,extrapackages :  Packagesstatus.packagesstatus  ,totalprice :  (Number(modprice)).toFixed(2), totalCost : Number(modprice).toFixed(2),...date,...place })
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
        <div className="select-comp" id="select-comp">
            <Head>
                <title>Confirmation | Car rent application</title>
            </Head>
            
            <header>
                <Container maxWidth="lg">
                    <ToHomeLink>
                        <>
                            <Link href={'/rent/' + router.query.car}>
                                <a className={styles.link}>
                                    <Chip label="checking data" icon={<AlarmOnIcon />} clickable />
                                </a>
                            </Link>
                            <Link href={'/address/' + router.query.car}>
                                <a className={styles.link}>
                                    <Chip label="select location" icon={<RoomIcon />} clickable />
                                </a>
                            </Link>
                            <Link href={'/packages'}>
                                <a className={styles.link}>
                                    <Chip label="select packages" icon={<AddShoppingCartIcon />} clickable />
                                </a>
                            </Link>
                            <div className={styles.link}>
                                <Chip label="almost done" color="primary" icon={<AssistantPhotoIcon />} />
                            </div>
                        </>
                    </ToHomeLink>

                    <MyStepper />
                </Container>
            </header>

            <main>
                <Container maxWidth="lg">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
        <button 
        style={{
           position :'absolute',
           right : 5,
           color : 'white',
           fontSize : 22,
           top : 5,
           backgroundColor : 'black',
           border : 'none',
           borderRadius : 8,
           display : 'flex',
           alignItems : 'center'
        }}
        onClick={closeModal}><AiOutlineClose /></button>
        <ThemeProvider theme={thetheme}>
            <Typography variant="h4" component="h4" style={{fontWeight : 'bold'}}>
                Terms and Conditions
            </Typography>
            <Typography variant="h6" component="h6" style={{maxWidth : 500, padding : '15px 0'}}>
                Our Terms and conditions has been updated. 
                <span onClick={() => {window.open('/termsandconditions', '_blank')}} className={styles.tlink}>Read it here</span>
            </Typography>
            <Typography variant="h6" component="h6" style={{maxWidth : 500,padding : '15px 0'}}>
                Please, kindly accept the terms and conditions to continue.
            </Typography>
        </ThemeProvider>
        <button 
        className={styles.acceptbtn}
        onClick={() => {
            setchecked(true)
            closeModal()
        }}>Yes, I accept the terms & conditions</button>
      </Modal>

                    <FinalTable />


                    <div style={{padding : '30px 0px',borderBottom : '0.5px solid #b3b3b3',display : 'flex',flexWrap : 'wrap'}}>
                             
                        <div>
                            <label style={{padding : '15px 40px 15px 10px',marginLeft : 4,display : 'flex',alignItems : 'center',}}>
                            <div  onClick={() => handlecheck()}>
                                <div style={{backgroundColor : 'white',width : 27,height : 28,position : 'relative',border : '1px solid #828282'}}>
                                <div style={{position : 'absolute'}}>
                                {checked && <GiCheckMark style={{fontSize : 20,margin : '2 10 0 2',color : '#828282'}}/>}
                                </div>
                                </div>
                            </div>
                            <Typography 
                            variant="h5" component="h3" style={{marginLeft : 4,marginBottom : 2, }}>
                              I have read and accept the <span onClick={() => {window.open('/termsandconditions', '_blank')}} className={styles.tlink}>Terms & conditions</span>
                            </Typography>
                            </label>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <Button onClick={handleClickBack} variant="contained">
                            Prev step
                        </Button>
                        <Button onClick={handleClickConfirm} variant="contained" color="primary">
                            Confirm
                        </Button>
                    </div>
                </Container>
            </main>
        </div>
    );
};


// export const getServerSideProps: GetServerSideProps = async context => {
//     // store
//      const reduxStore = initializeStore(initialState);
//      const { dispatch } = reduxStore;

//      dispatch(Actions.start(true));

//     // fetch
//     try {
//         const car: ICar = await (await axios.get(process.env.NEXT_PUBLIC_ORIGIN + '/cars/' + context.params.car)).data;
//         dispatch(Actions.success(car));
//     } catch {
//         dispatch(Actions.error('Server error'));
//     }

//      return { props: { state: reduxStore.getState() } };
// };

export default Confirm;
