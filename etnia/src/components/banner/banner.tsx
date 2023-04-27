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
import img6 from "./assets/20221120_164100.jpg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Pagination, EffectCoverflow } from "swiper";

// SwiperCore.use([Navigation, Pagination, Autoplay]);

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
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            // effect={"coverflow"}
            // grabCursor={true}
            // centeredSlides={true}
            // slidesPerView={3}
            // spaceBetween={30}
            // coverflowEffect={{
            //   rotate: 50,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 2,
            //   slideShadows: true,
            // }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Pagination]}
            // className={"mySwiper"}
          >
            <SwiperSlide
              key={1}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img1} alt="img logo" width={600} height={550} />
            </SwiperSlide>
            <SwiperSlide
              key={2}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img2} alt="img logo" width={600} height={550} />
            </SwiperSlide>
            <SwiperSlide
              key={3}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img3} alt="img logo" width={600} height={550} />
            </SwiperSlide>
            <SwiperSlide
              key={4}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img4} alt="img logo" width={600} height={550} />
            </SwiperSlide>
            <SwiperSlide
              key={5}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img5} alt="img logo" width={600} height={550} />
            </SwiperSlide>
            <SwiperSlide
              key={6}
              // className={styles.headercontainer__banner__SwiperSlide}
            >
              <Image src={img6} alt="img logo" width={600} height={550} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Banner;
