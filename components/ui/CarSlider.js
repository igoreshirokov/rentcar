import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import { useState, useEffect } from 'react'
import MediaQuery from 'react-responsive'

SwiperCore.use([Pagination])

export const CarSlider = ({ images }) => {

    images = JSON.parse(images)
    const [slider, setSlider] = useState(null)
    const [activeSlide, setActiveSlide] = useState(0)
    return (
        <div className="car-slider">
            <Swiper
                className="slider"
                onSwiper={setSlider}
                pagination={true}
                slidesPerView={'auto'}
                centeredSlides
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                        pagination: false
                    }
                }}
                onActiveIndexChange={() => setActiveSlide(slider.activeIndex)}
            >
                {images.map(image => {
                    return (
                        <SwiperSlide key={image} className="car-slide">
                            <img src={image} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <MediaQuery minWidth={576}>
                <div className="car-slider__thumbs">
                    {slider && images.map((img, index) => {
                        if (index == activeSlide) {
                            return
                        }
                        return (
                            <div key={img} onClick={() => slider.slideTo(index)} className="car-slider__thumb">
                                <img src={img} />
                            </div>
                        )
                    })}
                </div>
            </MediaQuery>


        </div>

    )
}