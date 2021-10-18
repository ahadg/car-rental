import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginBottom: theme.spacing(15),
        },
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
            //transition
            transition: 'transform 0.15s ease-in-out',
            //hover slight enlargement scale feature
            '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
        cardContent: {
            paddingBottom: 0,
        },
        cardBtn: {
            flexGrow: 2,
        },
        link: {
            textDecoration: 'none',
            color: theme.palette.primary.main,
        },
        button: {
            display: 'block',
            marginTop: 'auto',
            fontWeight: 700,
        },
    }),
);

export default useStyles;
