import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    logoLg:{
        display:"none",
        [theme.breakpoints.up("sm")]:{
            display: "block"
        }
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display: "none"
        }
    },
    // button:{
    //     ...theme.myButton
    // }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.logoLg}>
                        GBU ALL
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        GBU 
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
