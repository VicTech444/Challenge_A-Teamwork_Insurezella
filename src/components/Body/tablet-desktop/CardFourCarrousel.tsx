// components/Carousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
      <div className="w-full lg:hidden">
        <Swiper
          spaceBetween={50}
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
              <div className="mb-8 flex justify-center px-20">
                <div className="flex max-w-[380px] flex-col bg-white">
                  <div className="flex justify-center">
                    <img
                      className="mx-auto flex aspect-video object-cover"
                      src={`${slide.image}`}
                      alt="Card Image"
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 p-4 md:p-5">
                    <div className="relative flex gap-x-6">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {slide.title}
                      </h3>
                    </div>
                    <p className="mb-2 mt-1 text-[#9598ab]">
                      {slide.description}
                    </p>
                    <p className="flex items-center gap-x-3 font-bold text-[#4e78f4]">
                      {slide.actionCall}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden grid-cols-2 grid-rows-2 lg:grid">
        {ItemList.map((slide, index) => (
          <div className="mb-8 flex justify-center px-20" key={index}>
            <div className="flex max-w-[380px] flex-col bg-white">
              <div className="flex justify-center">
                <img
                  className="mx-auto flex aspect-video object-cover"
                  src={`${slide.image}`}
                  alt="Card Image"
                />
              </div>
              <div className="flex flex-col gap-y-2 p-4 md:p-5 h-60">
                <div className="relative flex gap-x-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {slide.title}
                  </h3>
                </div>
                <p className="mb-2 mt-1 flex self-end text-[#9598ab]">
                  {slide.description}
                </p>

                <div className="flex justify-self-end items-end my-auto">
                  <p className="flex items-center gap-x-3 font-bold text-[#4e78f4]">
                    {slide.actionCall}{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M16.15 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.15L13.3 8.15q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L19.3 11.3q.15.15.213.325t.062.375t-.062.375t-.213.325l-4.575 4.575q-.3.3-.712.288t-.713-.313q-.275-.3-.288-.7t.288-.7z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
