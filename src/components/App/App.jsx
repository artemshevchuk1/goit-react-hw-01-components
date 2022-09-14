import { ProfileCard } from 'components/Profile/Profile';
import user from 'Data/user.json';
import { StatisticsCard } from 'components/Statistics/Statistics';
import data from 'Data/data.json';
import { FriendListCard } from 'components/FriendList/FriendList';
import friends from 'Data/friends.json';
import { TransactionHistoryTable } from 'components/TransactionHistory/TransactionHistory';
import transactions from 'Data/transactions.json';

import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />

      <StatisticsCard title="Upload stats" stats={data} />

      <FriendListCard friends={friends} />

      <TransactionHistoryTable items={transactions} />
    </Container>
  );
};
