import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRout = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={
                props => {
                    if(localStorage.getItem('token'))
                        <Component {...props} />
                    else
                        <Redirect to='/' />
                }
            }
        />
    )
}

export default PrivateRout;