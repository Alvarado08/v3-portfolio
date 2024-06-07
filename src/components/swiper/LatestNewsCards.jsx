import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { LatestProject } from "../../utils/projects";

import "swiper/css";
import "swiper/css/effect-cards";

export default function LatestNewsCards() {
  return (
    <div className="pt-10">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-[300px] md:h-[500px]"
      >
        <SwiperSlide className="w-full h-full overflow-hidden rounded relative">
          <a
            href={LatestProject.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-full h-full object-cover"
              src={LatestProject.image}
              alt={LatestProject.title}
            />
          </a>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-black text-white rounded p-4 text-xl">
          Coming Soon...
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
