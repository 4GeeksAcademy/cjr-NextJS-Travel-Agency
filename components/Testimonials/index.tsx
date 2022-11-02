import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, EffectCreative, Navigation, Pagination, Scrollbar } from 'swiper';

import 'swiper/css';

const Items = [
  {
    id: '1',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-1.jpg',
    author: 'Mike taylor',
    role: 'Lahore, Pakistan',
  },
  {
    id: '2',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-2.jpg',
    author: 'Taylor Swift',
    role: 'Lahore, Pakistan',
  },
  {
    id: '3',
    desc: 'On the Windows talking pasture yet its express parties use. Sure last upon he same as knew next',
    image: 'user-3.jpg',
    author: 'Mia Khalifa',
    role: 'Lahore, Pakistan',
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef();

  const handleSlide = (idx: number) => () => {
    {
      // @ts-ignore
      return idx !== activeSlide && swiperRef?.current?.slideTo(idx);
    }
  };

  const handleSlideNext = useCallback(() => {
    // @ts-ignore
    if (activeSlide < Items.length) swiperRef?.current.slideNext();
  }, [swiperRef, activeSlide]);

  const handleSlidePrev = useCallback(() => {
    // @ts-ignore
    if (activeSlide > 0) swiperRef?.current.slidePrev();
  }, [swiperRef, activeSlide]);

  return (
    <div className="mb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="flex">
          <div className="w-6/12 pl-8 pr-20">
            <div className="mb-16 flex flex-col">
              <h3 className="mb-2 text-lg uppercase text-gray-500">Testimonials</h3>
              <h3 className="mb-10 font-serif text-5xl leading-snug text-gray-900">What people say about Us.</h3>
              <ul className="flex gap-x-6">
                {Items.map((item, idx) => (
                  <li
                    key={item.id}
                    className={classNames('h-2 w-2 cursor-pointer rounded-full', {
                      'bg-gray-800': activeSlide === idx,
                      'bg-gray-300': activeSlide !== idx,
                    })}
                    onClick={handleSlide(idx)}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative flex w-6/12 items-center justify-center">
            <div className="absolute -inset-10 -top-20">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCreative]}
                spaceBetween={50}
                slidesPerView={1}
                effect="creative"
                creativeEffect={{
                  prev: {
                    translate: [60, 70, 0],
                  },
                  next: {
                    translate: ['-100%', '-100%', 0],
                  },
                }}
                simulateTouch={false}
                onSlideChange={(slide) => setActiveSlide(slide.realIndex)}
                onSwiper={(swiper) => {
                  // @ts-ignore
                  swiperRef.current = swiper;
                }}
              >
                {Items.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-32 pt-20 pb-48">
                      <div className="relative">
                        <div className="relative z-20 rounded-xl bg-white p-6 shadow-great">
                          <span className="absolute top-0 left-0 mr-3 h-12 w-12 flex-none -translate-x-1/2 -translate-y-1/2 transform overflow-hidden rounded-full">
                            <Image
                              layout="responsive"
                              className="object-cover"
                              width="100%"
                              height="100%"
                              src={`/images/${item.image}`}
                            />
                          </span>
                          <p className="mb-8 text-gray-500">{item.desc}</p>
                          <h6 className="text-lg text-gray-900">{item.author}</h6>
                          <h6 className="text-sm text-gray-500">{item.role}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex w-1/12 items-center justify-center">
            <div className="flex flex-col">
              <button
                onClick={handleSlidePrev}
                className={classNames({
                  'text-gray-300': activeSlide === 0,
                  'text-gray-800': activeSlide !== 0,
                })}
              >
                <span className="material-icons mr-2">keyboard_arrow_up</span>
              </button>
              <button
                onClick={handleSlideNext}
                className={classNames({
                  'text-gray-300': activeSlide === Items.length - 1,
                  'text-gray-800': activeSlide !== Items.length - 1,
                })}
              >
                <span className="material-icons mr-2">keyboard_arrow_down</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}