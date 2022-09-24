import { FriendsList, Friend, IsOnline } from "./FriendList.styled"

const IsOnlineUser = {
    isOnline: 'isOnline'
    
}

export const FriendList = ({ friends }) => {
    return (
    <FriendsList>
    {friends.map(({ avatar, name, isOnline,id }) => (
        <Friend key = {id}>
            <IsOnline IsOnlineSelect={isOnline ? IsOnlineUser.isOnline : false }></IsOnline>
                <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
</Friend>
            ))
            }   
</FriendsList>
    )
}