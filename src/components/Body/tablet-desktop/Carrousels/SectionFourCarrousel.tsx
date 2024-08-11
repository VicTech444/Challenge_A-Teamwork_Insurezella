// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CarrouselItem from "./SectionFourCarrouselItem";
import { ItemList } from "../../../../helpers/tablet-desktop/ItemListSectionFour";

export default function CardFourCarrousel() {

 
  return (
    <>
      <section className="w-full lg:hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={2}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
            },
          }}
        >
          {ItemList.map((slide, index) => (
            <SwiperSlide key={index}>
              <CarrouselItem {...slide} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="hidden grid-cols-2 grid-rows-2 lg:grid">
        {ItemList.map((slide, index) => (
          <CarrouselItem {...slide} index={index} />
        ))}
      </section>
    </>
  );
}
