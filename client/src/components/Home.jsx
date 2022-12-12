import {React,useState} from 'react'
import { AppBar, Toolbar ,IconButton, Typography, Grid, Tabs,Tab,Box,Button, Drawer} from '@mui/material'
import MedicationIcon from '@mui/icons-material/Medication';
import { DrawerCom } from './DrawerCom';

const Home = () => {
    const [value, setValue] = useState(0)
    return (
      <AppBar position='static'>
          <Toolbar>
             <Grid container sx={{placeItems:"center"}}>
                 <Grid item xs={2}>
                     <Typography >
                         <MedicationIcon fontSize="large"/>
                         {/* <Typography size="h4">Sparsh Hospital</Typography> */}
                     </Typography>
                     
                 </Grid>
                 <Grid item xs={6}>
                     <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=>setValue(val)}>
                         <Tab label="Home"/>
                         <Tab label="Book Appointment"/>
                         <Tab label="Contact us"/>
                     </Tabs>
                 </Grid>
                 <Grid item xs={1}> </Grid>
                 <Grid xs={3}>
                     <Box display="flex">
                         <Button sx={{marginLeft: 'auto'}} variant="contained">
                             Login
                         </Button>
                         <Button sx={{marginLeft:2}} variant="contained">
                             Sign Up
                         </Button>
                     </Box>
                 </Grid>
             </Grid>

          </Toolbar>
      </AppBar>
    )
}

export default Home
