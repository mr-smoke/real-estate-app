import Card from "../../components/Card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { useQuery } from "@apollo/client";
import { GET_HOUSES } from "../../graphql/queries/house.query";

const Carousel = () => {
  const { loading, error, data } = useQuery(GET_HOUSES);
  return (
    <section className="carousel">
      <h2>Featured Properties</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data?.houses.map((house) => (
          <SwiperSlide key={house.id}>
            <Card house={house} />
          </SwiperSlide>
        ))}
        <div style={{ marginTop: "70px" }}></div>
      </Swiper>
    </section>
  );
};

export default Carousel;
