import { Swiper, SwiperSlide } from "swiper/react";
import { Prompt } from "next/font/google";
import styles from "@/styles/Banner.module.css";
import Link from "next/link";
import Image from "next/image";
import img1 from "./assets/20221120_164048.jpg";
import img2 from "./assets/20221120_164145.jpg";
import img3 from "./assets/20221120_164211.jpg";
import img4 from "./assets/20221120_164047.jpg";
import img5 from "./assets/20221120_164212.jpg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import "swiper/css";
import "swiper/css/pagination";

import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
});

function Banner() {
  return (
    <>
      <div className={styles.headercontainer}>
        <div className={styles.headercontainer__banner}>
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination]}
            className={styles.headercontainer__banner__mySwiper}
          >
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img1} alt="img logo" width={750} height={700} />
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img2} alt="img logo" width={750} height={700} />
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img3} alt="img logo" width={750} height={700} />
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img4} alt="img logo" width={750} height={700} />
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img5} alt="img logo" width={750} height={700} />
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              Slide 6
            </SwiperSlide>
            <SwiperSlide
              className={styles.headercontainer__banner__SwiperSlide}
            >
              Slide 7
            </SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Banner;
