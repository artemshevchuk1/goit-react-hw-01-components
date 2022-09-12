import css from 'components/Profile/Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.statsFollowers}>Followers</span>
          <span className={css.statsFollowers}>{statsFollowers}</span>
        </li>
        <li>
          <span className={css.statsViews}>Views</span>
          <span className={css.statsFollowers}>{statsViews}</span>
        </li>
        <li>
          <span className={css.statsLikes}>Likes</span>
          <span className={css.statsFollowers}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsFollower: PropTypes.number,
  statsViews: PropTypes.number,
  statsLikes: PropTypes.number,
};