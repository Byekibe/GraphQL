import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App.jsx';
import './index.css';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          }
        },

        projects: {
          merge(existing, incoming) {
            return incoming
          }
        },
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:7000/graphql',
  cache
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
