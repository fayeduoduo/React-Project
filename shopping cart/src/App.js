import CartContainer from './Components/CartContainer';
import { useGlobalContext } from './Components/Contexts/Context';
import Nav from './Components/Nav';


function App() {
  const {loading} = useGlobalContext()
  
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Nav />
      <CartContainer />
    </main>
  );
}

export default App;
