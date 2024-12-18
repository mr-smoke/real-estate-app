import {
  MdBathtub,
  MdKingBed,
  MdLocationOn,
  MdMeetingRoom,
} from "react-icons/md";

const Card = ({ house }) => {
  return (
    <div className="card">
      <div className="card__image">
        {import.meta.env.VITE_NODE_ENV === "development" ? (
          <img src={`http://localhost:1337${house.Img?.url}`} alt="Card" />
        ) : (
          <img
            src={`https://real-estate-app-us29.onrender.com${house.Img?.url}`}
            alt="Card"
          />
        )}
        {house.categories && <span>{house.categories[0].Category}</span>}
      </div>
      <div className="card__content">
        <h3>{house.Neighbourhood}</h3>
        <p>{house.Street}</p>
        <div className="card__details">
          <span>
            <MdMeetingRoom size={20} />
            Rooms: {house.Rooms}
          </span>
          <span>
            <MdBathtub size={20} />
            Bathrooms: {house.Bathrooms}
          </span>
          <span>
            <MdKingBed size={20} />
            Bedrooms: {house.Bedrooms}
          </span>
          <span>
            <MdLocationOn size={20} />
            {house.location.Location}
          </span>
        </div>
        <div className="card__footer">
          <span>${house.Price}</span>
          <a href={`/house/${house.documentId}`}>
            <button>View</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
