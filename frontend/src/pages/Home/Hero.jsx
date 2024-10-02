import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("10000");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/houses", { state: { location, price } });
  };

  return (
    <section className="hero">
      <div className="hero__img"></div>
      <div className="hero__content">
        <div className="hero__content-inner">
          <h1>Easy Way to Find Your Dream House</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero__content-search">
            <input
              type="text"
              placeholder="Enter a location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="100000">&lt; $10,000</option>
              <option value="200000">&lt; $20,000</option>
              <option value="300000">&lt; $30,000</option>
              <option value="400000">&lt; $40,000</option>
              <option value="500000">&lt; $50,000</option>
            </select>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
        <img src="./building.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
