import { AppWrap,AppItems } from "./App.styled";
import { Profile } from "./Profile/Profile"
import user from './Profile/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from './FriendList/friends.json'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <AppWrap>
      <AppItems>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes= {user.stats.likes}
        />
        <Statistics
          title="Upload stats"
          stats={data}
        />
        <FriendList
        friends={friends}/>
        </AppItems>
        <TransactionHistory
            items={transactions} />
        
    </AppWrap>
    
  );
};
