import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editFriendAction } from '../actions';

const EditFriendForm = (props) => {
    const [formData, setFormData] = useState(props.friend)
    
    const handleInputChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const submitFriendEdit = e => {
        e.preventDefault();
        props.editFriendAction(formData);
        props.edit();
    }

    return(
        <form onSubmit={submitFriendEdit}>
            <input type='text' 
                   name='name'
                   value={formData.name}
                   onChange={handleInputChange} />
            <input type='text' 
                   name='age'
                   value={formData.age}
                   onChange={handleInputChange} />
            <input type='email' 
                   name='email'
                   value={formData.email}
                   onChange={handleInputChange} />
            <button type='submit'>submit</button>
        </form>
    );
}

export default 
connect(null, {editFriendAction})(EditFriendForm);