import React, { useState } from 'react';
import EditFriendForm from './EditFriendForm';

const Friend = ({friend}) => {
    const [edit, setEdit] = useState(false);

    const editFriend = () => {
        setEdit(!edit);
    }

    return(
        edit ? <EditFriendForm friend={friend} 
                               edit={editFriend}/> :
        <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
            <button onClick={editFriend}>Edit</button>
        </div>
    )
}

export default Friend;