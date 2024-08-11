// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { PlansListDesktop } from "../../../helpers/PlansListDesktop";

export default function Carousel() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1128: {
            slidesPerView: 5,
          },
        }}
      >
        {PlansListDesktop.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mb-5">
              <div className="flex flex-col rounded-md bg-white py-6">
                <div className="flex flex-col items-center gap-y-2 px-9 py-10" style={{boxShadow: "0 6px 15px 2px #bdcdfc"}}>
                  <img
                    src={slide.href}
                    alt="Logo of the image"
                    title="Sample Image"
                    draggable="false"
                    className={`mx-auto h-auto w-16`}
                    loading="eager"
                  />
                  <p className="mt-2 max-w-[100px] text-center text-lg font-bold text-[#2b2b47]">
                    {slide.title}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
