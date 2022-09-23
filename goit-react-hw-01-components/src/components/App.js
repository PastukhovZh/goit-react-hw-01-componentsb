import { Profile } from "./Profile/Profile"
import user from './Profile/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from './Statistics/data.json'


export const App = () => {
  return (
    <div>
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
    </div>
  );
};
