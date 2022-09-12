import { Profile } from 'components/Profile/Profile';
import user from 'components/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'components/data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'components/friends.json';
import {TransactionHistory} from 'components/TransactionHistory/TransactionHistory'
import transactions from 'components/transactions.json'
export const App = () => {
  return (
    <div
      style={{
        height: '100px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'block',
      }}
    >
      <div>
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

      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div>
      <FriendList friends={friends} />
      </div>

      <div>
      <TransactionHistory items={transactions} />
      </div>
    </div>
  );
};
