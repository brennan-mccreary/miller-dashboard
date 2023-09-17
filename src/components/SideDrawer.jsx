//Material Imports
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Grid } from '@mui/material';

//React Imports 
import { Link } from 'react-router-dom';
import * as React from 'react';

const drawerBleeding = 100;

const Root = styled('div')(() => ({
  height: '100%',
  backgroundColor: '#FF0000'
}));

const StyledBox = styled(Box)(() => ({
  backgroundColor: '#5c6273',
}));

const Puller = styled(Box)(() => ({
  width: 100,
  height: 7,
  backgroundColor: '#23395d',
  borderRadius: 3,
  position: 'absolute',
  top: 15,
  left: 'calc(50% - 50px)',
}));

const SideDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(30% - ${56}px)`,
            overflow: 'visible',
          },
        }}
      />
      

    {/* **Implements button for clicking on desktop to open drawer, disabled to implement touch screen capabilities.** */}
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> 
      
     
      <SwipeableDrawer
        
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -65,
            height: '65px',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}></Typography>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
            <Grid container>
                <Grid item md={3} sx={{ textAlign: 'center', height: '100%'}}> 
                    <Link to='/'>
                        <Button 
                            variant="contained" 
                            sx={{my: '10%', height: '150px', width: '85%', borderRadius: '20px', fontSize:'2rem', border: '3px solid', borderColor: '#4a4b4f', bgcolor: '#537ae6'}}
                            onClick={toggleDrawer(false)}
                        >
                            Panel 1
                        </Button>
                    </Link>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'center', height: '100%'}}> 
                    <Link to='/2'>
                        <Button 
                            variant="contained" 
                            sx={{my: '10%', height: '150px', width: '85%', borderRadius: '20px', fontSize:'2rem', border: '3px solid', borderColor: '#4a4b4f', bgcolor: '#537ae6'}}
                            onClick={toggleDrawer(false)}
                        >
                            Panel 2
                        </Button>
                    </Link>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'center', height: '100%'}}> 
                    <Link to='/3'>
                        <Button 
                            variant="contained" 
                            sx={{my: '10%', height: '150px', width: '85%', borderRadius: '20px', fontSize:'2rem', border: '3px solid', borderColor: '#4a4b4f', bgcolor: '#537ae6'}}
                            onClick={toggleDrawer(false)}
                        >
                            Panel 3
                        </Button>
                    </Link>
                </Grid>
                <Grid item md={3} sx={{ textAlign: 'center', height: '100%'}}> 
                    <Link to='/4'>
                        <Button 
                            variant="contained" 
                            sx={{my: '10%', height: '150px', width: '85%', borderRadius: '20px', fontSize:'2rem', border: '3px solid', borderColor: '#4a4b4f', bgcolor: '#537ae6'}}
                            onClick={toggleDrawer(false)}
                        >
                            Panel 4
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

export default SideDrawer;
