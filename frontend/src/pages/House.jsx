import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_HOUSE } from "../graphql/queries/house.query";
import {
  MdBathtub,
  MdKingBed,
  MdLocationOn,
  MdMeetingRoom,
} from "react-icons/md";
import Loader from "../components/Loader";

const House = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(GET_HOUSE, {
    variables: { documentId: id },
  });

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;
  if (data.house == null)
    return (
      <p style={{ textAlign: "center", fontSize: "2rem" }}>No data found.</p>
    );

  const { house } = data;

  return (
    <main>
      <section className="house">
        <img
          src={`http://localhost:1337${house.Img?.url}`}
          alt={house.Neighbourhood}
        />
        <h1>{house.Neighbourhood}</h1>
        <p className="house__details">
          <MdMeetingRoom size={30} />
          Rooms: {house.Rooms}
        </p>
        <p className="house__details">
          <MdBathtub size={30} />
          Bathrooms: {house.Bathrooms}
        </p>
        <p className="house__details">
          <MdKingBed size={30} />
          Bedrooms: {house.Bedrooms}
        </p>
        <p className="house__details">
          <MdLocationOn size={30} />
          Location: {house.location.Location}
        </p>
        <p className="house__price">${house.Price}</p>
      </section>
    </main>
  );
};

export default House;
