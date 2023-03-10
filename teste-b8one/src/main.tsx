import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://trainees-fourth-proof-igode.ondigitalocean.app/graphql",
  cache: new InMemoryCache({
    resultCaching: false,
  })
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ApolloProvider>
)
