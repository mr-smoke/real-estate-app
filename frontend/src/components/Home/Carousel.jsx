import Card from "../../components/Card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { useQuery } from "@apollo/client";
import { GET_HOUSES } from "../../graphql/queries/house.query";
import Loader from "../Loader";

const Carousel = () => {
  const { loading, error, data } = useQuery(GET_HOUSES);

  return (
    <section className="carousel">
      <h2>Reach Your House In Few Simple Clicks</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        {loading && <Loader />}
        {error && <p>Error: ${error.message}</p>}
        {data?.houses.map((house) => (
          <SwiperSlide key={house.documentId}>
            <Card house={house} />
          </SwiperSlide>
        ))}
        <div style={{ marginTop: "70px" }}></div>
      </Swiper>
    </section>
  );
};

export default Carousel;
