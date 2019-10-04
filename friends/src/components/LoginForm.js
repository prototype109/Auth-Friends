import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

const LoginForm = props => {
    const [credentials, setCredentials] = useState({});

    const handleInputChange = e => {
        setCredentials({...credentials, 
                        [e.target.name]: e.target.value});
    }

    const submitLoginCredentials = e => {
        e.preventDefault();
        props.loginAction(credentials);
    }

    return(
        <form onSubmit={submitLoginCredentials}>
            <input placeholder='Username' 
                   name='username' 
                   type='text'
                   value={credentials.username}
                   onChange={handleInputChange}/>
            <input placeholder='Password' 
                   name='password' 
                   type='password'
                   value={credentials.password}
                   onChange={handleInputChange}/>
            <button type='submit'>submit</button>
        </form>
    );
}

export default connect(null, {loginAction})(LoginForm);