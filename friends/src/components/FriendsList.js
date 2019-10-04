import React from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';

const FriendsList = props => {
    return(
        <div>
            {props.friends.map(friend => {
                return <Friend key={friend.id} 
                               friend={friend}/>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friends: state.friendsList
    }
}

export default connect(mapStateToProps, {})(FriendsList)