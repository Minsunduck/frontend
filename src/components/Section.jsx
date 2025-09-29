import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Card from "./Card";

export default function Section({ title, items, p_v, m_v }) {
  return (
    <section className="bg-black py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-[32px] font-bold mb-6">{title}</h2>
        <Swiper modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            960: { slidesPerView: m_v },
            1024: {slidesPerView: p_v}
            }}>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((m) => (
              <SwiperSlide key={m.id}>
                <Card movie={m} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  )
}