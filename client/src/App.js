import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Navbar />
        <div className="display-2"><h1> Wrong page!</h1>
        {/* <Routes> */}
          <Route 
          path="/" 
          element={SearchBooks} />
          <Route 
          path="/saved" 
          element={SavedBooks} />
          {/* </Routes> */}
          </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
