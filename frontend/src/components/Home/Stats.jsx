const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__bg"></div>
      <h2>Help People To Find Their Home For More Than 20 Years</h2>
      <img src="./building3.jpg" alt="Building" />
      <div className="stats__content">
        <p>
          Search and find the best properties in the city with the best price.
          Only available in our website.
        </p>
        <div className="stats__content-item">
          <h3>10000+</h3>
          <p>Completed Houses</p>
        </div>
        <div className="stats__content-item">
          <h3>7000+</h3>
          <p>Solded Houses</p>
        </div>
        <div className="stats__content-item">
          <h3>15000+</h3>
          <p>Rented Houses</p>
        </div>
        <div className="stats__content-item">
          <h3>94.5%</h3>
          <p>Satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
