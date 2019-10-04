import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFriendAction } from '../actions';

const AddFriendForm = props => {
    const [friend, setFriend] = useState({});

    const handleInputChange = e => {
        setFriend({...friend, 
                        [e.target.name]: e.target.value});
    }

    function submitFriend(e){
        e.preventDefault();
        props.addFriendAction(friend);
    }

    return(
        <form onSubmit={submitFriend}>
            <input placeholder='Name' 
                   name='name' 
                   type='text'
                   value={friend.name}
                   onChange={handleInputChange}/>
            <input placeholder='Age' 
                   name='age' 
                   type='text'
                   value={friend.age}
                   onChange={handleInputChange}/>
            <input placeholder='Email' 
                   name='email' 
                   type='email'
                   value={friend.email}
                   onChange={handleInputChange}/>
            <button type='submit'>submit</button>
        </form>
    );
}

export default connect(null, {addFriendAction})(AddFriendForm);