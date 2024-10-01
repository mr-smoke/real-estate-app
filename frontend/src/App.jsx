import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
