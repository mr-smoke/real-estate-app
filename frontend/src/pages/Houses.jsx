import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { GET_HOUSES_BY_SEARCH } from "../graphql/queries/house.query";
import Card from "../components/Card";

const Houses = () => {
  const house = useLocation();
  const { location, price } = house.state || {};

  const { loading, error, data } = useQuery(GET_HOUSES_BY_SEARCH, {
    variables: { location: location, price: Number(price) },
  });

  return (
    <main>
      <section className="cards-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data?.houses.length === 0 && <p>No houses found.</p>}
        {data && (
          <ul>
            {data.houses.map((house, index) => (
              <Card key={index} house={house} />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default Houses;
