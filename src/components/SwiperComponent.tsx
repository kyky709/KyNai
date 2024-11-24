import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation={true}
      pagination={{ clickable: true }}
      className="my-10"
    >
      <SwiperSlide>
        <div className="relative h-96">
          <Image
            src="/hiver.jpg"
            alt="Collection Hiver"
            fill
            style={{ objectFit: 'cover' }}
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
            Collection Hiver
          </h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-96">
          <Image
            src="/printemps.jpg"
            alt="Nouveautés Printemps"
            fill
            style={{ objectFit: 'cover' }}
          />
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white">
            Nouveautés Printemps
          </h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;