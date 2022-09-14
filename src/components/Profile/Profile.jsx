import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsFollowers,
  StatsViews,
  StatsLikes,
  StatsItem,
} from './Profile.styled';

export const ProfileCard = ({
  username,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <Profile>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <StatsFollowers>Followers</StatsFollowers>
          <StatsFollowers>{statsFollowers}</StatsFollowers>
        </StatsItem>
        <StatsItem>
          <StatsViews>Views</StatsViews>
          <StatsFollowers>{statsViews}</StatsFollowers>
        </StatsItem>
        <StatsItem>
          <StatsLikes>Likes</StatsLikes>
          <StatsFollowers>{statsLikes}</StatsFollowers>
        </StatsItem>
      </Stats>
    </Profile>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsFollower: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};
