import { useQuery } from "@apollo/client";
import { GET_HOUSES_RENT } from "../graphql/queries/house.query";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Rent = () => {
  const { loading, error, data } = useQuery(GET_HOUSES_RENT);

  return (
    <main>
      <section className="cards-container">
        {loading && <Loader />}
        {error && <p>Error: {error.message}</p>}
        {data?.houses.length === 0 && (
          <p style={{ textAlign: "center", fontSize: "2rem" }}>
            No houses found.
          </p>
        )}
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