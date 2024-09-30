const Hero = () => {
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
            <input type="text" placeholder="Enter a location" />
            <select name="price" id="price">
              <option value="100000">100,000</option>
              <option value="200000">200,000</option>
              <option value="300000">300,000</option>
              <option value="400000">400,000</option>
              <option value="500000">500,000</option>
            </select>
            <button>Search</button>
          </div>
        </div>
        <img src="./building.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
