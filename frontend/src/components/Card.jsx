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
        <img src="/building.jpg" alt="Card" />
        <span>{house.categories[0].Category}</span>
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
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
