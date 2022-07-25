import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import AnimeListProvider from "./lib/AniListProvider";
import PageWithHeader from "./pages/PageWithHeader";

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <AnimeListProvider>
        <BrowserRouter>
          <PageWithHeader />
        </BrowserRouter>
      </AnimeListProvider>
    </ApolloProvider>
  )
}

export default App;
