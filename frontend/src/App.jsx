import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import House from "./pages/House";
import Houses from "./pages/Houses";

const client = new ApolloClient({
  uri:
    import.meta.env.VITE_NODE_ENV === "development"
      ? "http://localhost:4000/graphql"
      : "/graphql",
  cache: new InMemoryCache(),
});

console.log(import.meta.env.VITE_NODE_ENV);

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/house/:id" element={<House />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default App;
