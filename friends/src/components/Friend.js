import React from 'react';

const Friend = ({friend}) => {
    return(
        <div>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h2>{friend.email}</h2>
        </div>
    )
}

export default Friend;