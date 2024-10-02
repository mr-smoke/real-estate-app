import { MdArrowRightAlt } from "react-icons/md";

const Featured = () => {
  return (
    <section className="featured">
      <img src="./building2.jpg" alt="Featured" />
      <h2> Buying, Selling, Renting a Home and More</h2>
      <div className="featured__content">
        <div className="featured__content-item">
          <h3>Find Your Dream Home</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">
            Read More <MdArrowRightAlt size={20} />
          </a>
        </div>
        <div className="featured__content-item">
          <h3>Modern Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">
            Read More <MdArrowRightAlt size={20} />
          </a>
        </div>
        <div className="featured__content-item">
          <h3>Best Price Guarantee</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#">
            Read More <MdArrowRightAlt size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Featured;
