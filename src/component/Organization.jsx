import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import gaya dasar Swiper
import "swiper/css/pagination"; // Import gaya untuk pagination (opsional)
import "swiper/css/navigation"; // Import gaya untuk navigasi (opsional)
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import wisuda from "../assets/img/wisuda.jpg";
import b3 from "../assets/img/1.jpeg";

const Organization = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="bg-gray-800 p-6 pt-24">
      <p className="text-white text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">ORGANIZATION</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto mt-6">
        <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
          <h3 className="text-2xl font-bold">Departemen Kerohanian - HIMATIK</h3>
          <p className="text-sm mt-2">2021</p>
          <p className="text-sm mt-2 text-justify">Responsible for producing weekly lecture video content, managing necessary equipment, and coordinating with the team to conduct on-site video shoots at the speakers&apos; locations.</p>
        </motion.div>

        <motion.div className="bg-gray-700 p-6 rounded-lg shadow-lg text-white" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
          <h3 className="text-2xl font-bold">Komunitas Android</h3>
          <p className="text-sm mt-2">2019</p>
          <p className="text-sm mt-2 text-justify">Participated in weekly community activities to learn and develop Android-based applications using the Java programming language and Android Studio tools.</p>
        </motion.div>
      </div>

      {/* Image Slider */}
      <motion.div className="mt-12 flex justify-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
        <div className="w-full max-w-4xl bg-gray-700 p-6 rounded-lg shadow-lg">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 10500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-full max-w-4xl mx-auto"
          >
            <SwiperSlide>
              <div className="relative w-full h-[550px]">
                <img src={wisuda} alt="Image 1" className="absolute top-0 left-0 w-full h-full rounded-lg object-cover" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-[400px]">
                <img src={b3} alt="Image 2" className="absolute top-0 left-0 w-full h-full rounded-lg object-cover" />
              </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default Organization;
