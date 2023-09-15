'use client';
import Image from 'next/image';
import React from 'react';
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
const MyCarousel = () => {
  const images = [
    {
      original: "/men.png",
      thumbnail: "/men.png",
    },
    {
      original: "kid.png",
      thumbnail: "kid.png",
    },
    {
      original: "/menshoes.png",
      thumbnail: "/menshoes.png",
    },
];
  return (
    <div className=''>
      {/* <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={true}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
        showArrows={true}
        useKeyboardArrows={true}
      >
        <Image width={100} quality={100} height={0} style={{height:"350px"}} src="/men.png"/>
        <Image width={100} quality={100} height={0} style={{height:"350px"}} src="/kid.png"/>
        <Image width={100} quality={100} height={0} style={{height:"350px"}} src="/menshoes.png"/>
        <Image width={100} quality={100} height={0} style={{height:"350px"}} src="/cash.png"/>
      </Carousel> */}
      <ImageGallery
        items={images}
        showFullscreenButton={true}
        showPlayButton={false}
        autoPlay={true}
        showIndex={true}
        showBullets={true}
        showNav={true}
        style={{ width: "664px" }}
      />
    </div>

  );
}
export default MyCarousel;