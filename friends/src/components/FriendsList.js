import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { getFriendsAction } from '../actions';

const FriendsList = props => {

    useEffect(() => {
        props.getFriendsAction();
    }, [props])

    return(
        props.loading ? <h1>Loading Friends</h1> :
        <div>
            {props.friends.map(friend => (
                 <Friend key={friend.id} 
                        friend={friend}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        friends: state.friendsList,
        loading: state.isLoading
    }
}

export default connect(mapStateToProps, {getFriendsAction})(FriendsList)