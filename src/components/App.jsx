import Profile from './Profile.js';
import user from './user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
    </div>
  );
};
