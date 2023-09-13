import React from 'react'
import classes from './AppLanding.module.css'
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import ALAboutus from './ALAboutus';

const AppLanding = () => {
  return (
    <div>
      <div className={classes.ALbackground} >
        <div className={classes.ALHWrapper}>
          <p className={classes.ALSHeading}>Shop smarter with ShopConnect </p>
          <p className={classes.ALSText}>Shopkeepers: ShopConnect empowers shopkeepers by offering tools to manage deliveries efficiently, track profits, and customize order delivery rates and locations. With real-time insights, they can optimize operations, enhance customer service, and expand their reach. Customers: ShopConnect offers customers a seamless shopping experience with safe and quick deliveries, a store locator for easy access to local shops, and direct communication with store owners. Secure payment options, user-friendly interface, and a rating system ensure convenience, trust, and satisfaction. It’s the go-to platform for hassle-free local shopping.</p>
          <Fab variant="extended" sx={{ ml: 2}} color='success'>
            <LoginIcon sx={{ mr: 1 }} />
            Login
          </Fab>
          <Fab variant="extended" sx={{ ml: 2}} color='primary'>
            <AddIcon  sx={{ mr: 1 }} />
            Order
          </Fab>

        </div>
      </div>
          {/* About Us Section */}
          <ALAboutus />
    </div>
  )
}

export default AppLanding
