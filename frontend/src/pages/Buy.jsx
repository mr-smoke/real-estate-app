import { useQuery } from "@apollo/client";
import { GET_HOUSES_BUY } from "../graphql/queries/house.query";
import Card from "../components/Card";

const Buy = () => {
  const { data, loading, error } = useQuery(GET_HOUSES_BUY);

  return (
    <main>
      <section className="cards-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
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

export default Buy;
