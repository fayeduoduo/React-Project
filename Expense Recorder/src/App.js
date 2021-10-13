import './Styles/App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense'
import History from './Components/History';
import AddTransaction from './Components/AddTransaction';
import GlobalProvider from './Contexts/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
