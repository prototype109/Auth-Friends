import React,{ useState } from 'react';

const LoginForm = () => {
    const [credentials, setCredentials] = useState({});

    const handleInputChange = e => {
        setCredentials({...credentials, 
                        [e.target.name]: e.target.value});
    }

    const submitLoginCredentials = e => {
        e.preventDefault();
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

export default LoginForm;