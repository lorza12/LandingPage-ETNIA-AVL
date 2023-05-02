import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import styles from "@/styles/Banner.module.css";
import Image from "next/image";
import img1 from "./assets/20221120_164048.jpg";
import img2 from "./assets/20221120_164145.jpg";
import img3 from "./assets/20221120_164211.jpg";
import img4 from "./assets/20221120_164047.jpg";
import img5 from "./assets/20221120_164212.jpg";
import img6 from "./assets/20221120_164100.jpg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay]);

function Banner() {
  return (
    <>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerContainer__banner}>
          <div className={styles.margen}>
            <div className={styles.redes}>
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
            </div>

            <div className={styles.vLine1}></div>
            <br />
            <p className={styles.p}>ETNIA</p>
            <br />
            <div className={styles.vLine3}></div>
          </div>

          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={2}
            centeredSlides
            style={{ height: "600px" }}
            className={styles.bannerContainer__banner__mySwiper}
          >
            <SwiperSlide
              key={1}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img1}
                alt="img logo"
                width={550}
                height={515}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={2}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img2}
                alt="img logo"
                width={550}
                height={515}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={3}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img3}
                alt="img logo"
                width={550}
                height={500}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={4}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img4}
                alt="img logo"
                width={550}
                height={500}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={5}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img5}
                alt="img logo"
                width={550}
                height={500}
                priority={true}
              />
            </SwiperSlide>
            <SwiperSlide
              key={6}
              className={styles.bannerContainer__banner__SwiperSlide}
            >
              <Image
                src={img6}
                alt="img logo"
                width={550}
                height={500}
                priority={true}
              />
            </SwiperSlide>
          </Swiper>
          <div className={styles.vLines2}></div>
        </div>
      </div>
    </>
  );
}

export default Banner;
