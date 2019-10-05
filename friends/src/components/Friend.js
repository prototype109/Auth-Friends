import React, { useState } from 'react';
import EditFriendForm from './EditFriendForm';
import { connect } from 'react-redux';
import { deleteFriendAction } from '../actions';

const Friend = ({friend, deleteFriendAction}) => {
    const [edit, setEdit] = useState(false);

    const editFriend = () => {
        setEdit(!edit);
    }

    const deleteFriend = () => {
        deleteFriendAction(friend);
    }

    return(
        edit ? <EditFriendForm friend={friend} 
                               edit={editFriend}/> :
        <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
            <button onClick={editFriend}>Edit</button>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}

export default connect(null, {deleteFriendAction})(Friend);