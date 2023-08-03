//React Imports
import { Link, Route, Routes } from 'react-router-dom';

//Material UI Imports
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';


const Landing = (props) => {
    // const classes = useStyles();

    return(
        <div>
        {/* <Grid 
            container
        >
            <Grid item xs={12} sm={4} md={3}>
                <Paper>
                    1
                </Paper>
            </Grid>
            <Grid item md={3}>
                <Paper>
                    2
                </Paper>
            </Grid>
            <Grid item md={3}>
                <Paper>
                    3
                </Paper>
            </Grid>
            <Grid item md={3}>
                <Paper>
                    4
                </Paper>
            </Grid>
        </Grid>


        <Container>
            <Typography
                variant='h4'
                component='h2'
                gutterBottom
                color='textSecondary'
            >
                    Typography Test
            </Typography>

            <Button
                variant='contained'
                color='primary'
            >
                Button Test
            </Button>
        </Container> */}
            
            <div className='landing-wrapper'>
                <div className="landing-btn-wrapper">
                    <Link to='/dashboard'><button className='landing-btn'>Calendar</button></Link>
                    <Link to='/kamishibai'><button className='landing-btn'>Placeholder</button></Link>
                    <Link to='/andon'><button className='landing-btn'>Bills</button></Link>
                    <Link to='/input'><button className='landing-btn'>Placeholder</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;