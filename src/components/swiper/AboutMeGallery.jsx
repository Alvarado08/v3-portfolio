import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function AboutMeGallery() {
  return (
    <div className="pt-10">
      <Swiper
        className="w-full h-[300px] md:h-[500px] overflow-hidden rounded"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="/about-me/graduation.webp"
            alt="Jorge's graduation"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="w-full h-full overflow-hidden rounded"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="/about-me/ficha-jugador.webp"
                alt="Jorge's professional registration soccer card"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="/about-me/gol-heroes.webp"
                alt="Jorge's soccer goal"
              />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
        <SwiperSlide>
          <Swiper
            className="w-full h-full overflow-hidden rounded"
            direction={"vertical"}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="/about-me/cat-photo.webp"
                alt="Cat photograph"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="/about-me/pet-cats.webp"
                alt="Jorge's cats"
              />
            </SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
