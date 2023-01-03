import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
    link: {
        display: 'block',
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(2),
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
    packageitem : {
        margin : '15px 0',
        width : '300px'
       
    },
    flexwidth : {
        display : 'flex',
        flexWrap : 'wrap',
        width : '100%'
    },
    container : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'column'
    },
    row : {
        display : 'flex',
        flexWrap : 'wrap'
    },
    theimg : {
        width : 150,
        height : 100
    },
    heading : {
        color : '#005b96',
        fontSize : '20px',
        fontWeight : 'bold',
    },
    heading3 : {
        fontSize : '16px',
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
    tag : {
      marginTop : '10px'
    },
    tagline : {
        display : 'flex',
        backgroundColor : '#f5b642',
        height : '40px',
        alignItems : 'center',
        fontSize :'12px',
        maxWidth : '340px',
        paddingLeft : 10,
        position : 'relative',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 92% 100%, 0% 100%)',
        '@media (max-width: 780px)' : {
            fontSize : 16,
            maxWidth : '240px',
              }
    },
    subtagline : {
        paddingLeft : 4,
        fontSize : 20,
        '@media (max-width: 780px)' : {
            fontSize : 16,
        }
    },
    headlinerow : {
        display : 'flex',
        flexWrap : 'wrap',
        width : '100%',
        padding : 10,
        borderTop : '0.5px solid #b3b3b3'
    },
    tagarrow : {
        //position : 'absolute',
        width : 8,
        height : 8,
        backgroundColor : '#de9000',
        top : 12,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 52%)',
    },
    star : {
        //position : 'absolute',
        marginTop : 2
    },
    liteheading : {
        fontSize : 20,
        fontWeight : 'bold',
        color : '#005b96',
     },
    litetitle : {
        fontSize : 20,
        fontWeight : 'normal'
     },
    litedate : {
       fontSize : 22,
       fontWeight : 'bold'
    },
    leftnest : {
        padding : '0px 40px 0px 0',
        width : 480,
        //borderRight : '0.5px solid #b3b3b3',
        margin : '20px 20px 20px 5px',
        '@media (max-width: 780px)' : {
            margin : '10px 10px 10px 5px',
            borderRight : '0px solid #b3b3b3',
            width : 300,
        }
    },
    extras : {
        fontWeight : 'bold',
        //fontSize : 12,
        '@media (max-width: 780px)' : {
            fontSize : 14,

        }
    },
    
    btn: {
        marginBottom: theme.spacing(10),

        '& > *': {
            margin: theme.spacing(1),
        },
    },
    continuebtn : {
        borderRadius : 'none',
        fontWeight : 'bold',
        color : 'white',
        padding : '15px 30px',
        '@media (max-width: 780px)' : {
            fontSize : 14,
            padding : '5px 10px',
        }
    },
    ratestyle : {
        marginTop : '32px',
        padding : 30,
        borderLeft : '0.5px solid #b3b3b3',
        '@media (max-width: 780px)' : {
            padding : 10,
            borderLeft : '0px solid #b3b3b3'
        }
    },
    freeextras : {
        paddingTop : 30,
        borderTop : '0.5px solid #b3b3b3',
        display : 'flex',
        justifyContent : 'flex-end',
        '@media (max-width: 780px)' : {
            paddingTop : 15,
            borderLeft : '0px solid #b3b3b3',
            justifyContent : 'center',
        }
    },
    leftnest2 : {
        //padding : 40,
        padding : '40px 40px 40px 0',
        width : 480,
        //borderRight : '0.5px solid #b3b3b3',
        margin : '20px 20px 20px 5px',
        '@media (max-width: 780px)' : {
            padding : '20px 20px 20px 0',
            margin : '10px 10px 10px 5px',
        }
    },
    cartitle : {
        fontSize : 24,
        fontWeight : 'bold'
    },
    liteheading2 : {
        flex : 1,
        fontSize : 20,
        fontWeight : 'bold',
        color : '#005b96'
    },
    tickimg : {
        width : 30,
        height : 30
    },
    tickdesc : {
        color : '#1aab21',
        fontSize : 20,
        fontWeight : 'bold'
    },
    tickstyle : {
        color : '#1aab21',
        fontSize : 20,
        fontWeight : 'bold'
    },
    needmargin : {
        marginLeft : '3%',
        '@media (max-width: 780px)' : {
            marginLeft : '0%',
            //width : 200,
        }
    },
    responsivepara : {
        fontSize : 20,
        //width : 20,
        '@media (max-width: 780px)' : {
        fontSize : 16,
        //width : 200,
          }
        
    }
}),
);

export default useStyles;