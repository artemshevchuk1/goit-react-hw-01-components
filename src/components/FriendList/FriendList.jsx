import PropTypes from 'prop-types';
import {
  FriendList,
  FriendItem,
  Avatar,
  Status,
  Name,
} from './FriendList.styled';

export const FriendListCard = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendItem key={friend.id}>
          <Status status={friend.isOnline}> </Status>
          <Avatar src={friend.avatar} alt="User avatar" />
          <Name>{friend.name}</Name>
        </FriendItem>
      ))}
    </FriendList>
  );
};

FriendListCard.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
