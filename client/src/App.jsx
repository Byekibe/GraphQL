import { ApolloClient } from '@apollo/client';
import Header from './components/Header.jsx';
import Clients from './components/Clients.jsx'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <div className="container">
          <Clients />
      </div>
    </>
  )
}

export default App;
