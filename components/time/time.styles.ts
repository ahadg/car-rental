import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(20),
            '@media (max-width: 1200px)': {
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(10),
            },
        },
        slider: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
        },
        title: {
            marginBottom: theme.spacing(4),
            fontWeight: 600,
            display : 'flex',
            flexDirection : 'row'
        },
        title2: {
            marginBottom: theme.spacing(4),
            fontWeight: 600,
            fontSize : 20,
            display : 'flex',
            width : '100%',
            flexDirection : 'row',
            justifyContent : 'center',
            alignItems : 'center',
        },
        time2 :{
            display : 'flex',
            alignItems : 'center',
            marginLeft : 20,
            fontSize : 30, 
            backgroundColor : '#009688',
            color : 'white',
            padding : 10
        },
        time :{
            display : 'flex',
            marginLeft : 20,
            fontSize : 20
        },
        timeblockactive : {
            backgroundColor : '#009688',
            color : 'white',
            textAlign : 'center',
            justifyContent : 'center',
            width : 35,
            height : 30,
            padding : 2,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            margin : '0 6px',
            cursor :'pointer'
        },
        timeblock : {
            textAlign : 'center',
            justifyContent : 'center',
            width : 35,
            height : 30,
            padding : 2,
            boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            margin : '0 6px',
            cursor :'pointer'
        }
    }),
);

export default useStyles;
