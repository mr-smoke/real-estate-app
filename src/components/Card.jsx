import {
  MdBathtub,
  MdKingBed,
  MdLocationOn,
  MdMeetingRoom,
} from "react-icons/md";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">
        <img src="/building.jpg" alt="Card" />
        <span>Buy</span>
      </div>
      <div className="card__content">
        <h3>Title</h3>
        <p>content</p>
        <div className="card__details">
          <span>
            <MdMeetingRoom size={20} />
            Rooms: 9
          </span>
          <span>
            <MdBathtub size={20} />
            Bathrooms: 2
          </span>
          <span>
            <MdKingBed size={20} />
            Bedrooms: 3
          </span>
          <span>
            <MdLocationOn size={20} />
            NY
          </span>
        </div>
        <div className="card__footer">
          <span>$ Price</span>
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
