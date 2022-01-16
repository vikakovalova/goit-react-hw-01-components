import Container from './components/Container';
import Profile from '../src/components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendsList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <Container>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
