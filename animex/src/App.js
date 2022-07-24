import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeListProvider from "./lib/AniListProvider";
import HomePage from "./pages/HomePage";

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <AnimeListProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </AnimeListProvider>
    </ApolloProvider>
  )
}

export default App;
