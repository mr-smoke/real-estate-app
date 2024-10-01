import { useQuery } from "@apollo/client";
import { GET_HOUSES_RENT } from "../graphql/queries/house.query";

const Rent = () => {
  const { loading, error, data } = useQuery(GET_HOUSES_RENT);

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

export default Rent;
