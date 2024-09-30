import Card from "../../components/Card";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";

const Carousel = () => {
  return (
    <section className="carousel">
      <h2>Featured Properties</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="auto"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <div style={{ marginTop: "70px" }}></div>
      </Swiper>
    </section>
  );
};

export default Carousel;
