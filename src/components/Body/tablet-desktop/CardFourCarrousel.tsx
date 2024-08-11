// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Fragment } from "react/jsx-runtime";
import CarrouselItem from "./CardFourCarrouselItem";

interface Props {
  image: string;
  description: string;
  actionCall: string;
  title: string;
}

export default function CardFourCarrousel() {
  const ItemList = [
    {
      image: "/doctor.webp",
      title: "Health Insurance",
      description:
        "Get the Coverage You Need Today. Speak with an Agent to Learn about Our Plan Options Now. Our Health Insurance Agency Provides  You with Plans That Meet Your Needs. ",
      actionCall: "Compare plans",
    },
    {
      image: "/family-together.webp",
      title: "Life Insurance",
      description:
        "Life insurance allows you to save and build wealth over time while also protecting your family should be the worst happen.",
      actionCall: "Compare plans",
    },
    {
      image: "/medical-appointment.webp",
      title: "Medicare Supplement",
      description:
        "With Medicare supplements, you won't have medical cost surprises, which could wreck your budget. Medicare supplements can help protect your finances from high costs, which can destroy your nest egg.",
      actionCall: "Compare plans",
    },
    {
      image: "/man-signing.webp",
      title: "Medicare Advantage",
      description:
        "Medicare Advantage Plans cover all Original Medicare services, and some offer drug, vision, hearing, dental or wellness coverage",
      actionCall: "Compare plans",
    },
  ];

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
