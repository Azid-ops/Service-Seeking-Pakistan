//Importing React
import React from 'react';

//Importing Aux
import Aux from '../../../Auxiliary/Auxiliary';

//Importing Nav
import Nav from '../../../Ui/Navbar/Nav';

//Importing Css
import classes from './ServiceSeeker.css';

const ServiceSeeker = () => {
    return(
        <Aux>
            <Nav 
                first={"Forgot Password"}
                second={"Trouble Logging In"}
                third={"Sign In"}
                fourth={"About Us"}
            />
            <div className={classes.outerDiv}>
                <h1 className={classes.signup}>SignUp</h1>
            </div>
        </Aux>
    )
}

export default ServiceSeeker;