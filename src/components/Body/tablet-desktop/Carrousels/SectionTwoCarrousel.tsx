// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { PlansListDesktop } from "../../../../helpers/tablet-desktop/PlansDesktopSectionOne";

export default function SectionTwoCarrousel() {
  return (
    <div className={`w-full max-w-[1355px]`}>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={true}
        pagination={{ clickable: true, }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          1120: {
            slidesPerView: 4,
          },
          1281: {
            slidesPerView: 5
          }
        }}
      >
        {PlansListDesktop.map((slide, index) => (
          <SwiperSlide key={index} className="" zoom>
            <div className="flex justify-center mb-5">
              <div className="flex flex-col rounded-md bg-white py-6">
                <div className="flex flex-col items-center gap-y-2 px-16 py-10" style={{boxShadow: "4px 8px 10px 4px #bdcdfc"}}>
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
