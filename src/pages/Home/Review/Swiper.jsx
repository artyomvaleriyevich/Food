import React from 'react';
import { Swiper, SwiperSlide, Freemode } from "swiper/react";
import { Pagination, Navigation} from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


import userLogo from '../images/review/user_logo.png'



const Swipe = () => {
    return (
        <>
           <div className="container">
              <div className="swipe">
                  <Swiper
                      slidesPerView={3}
                      spaceBetween={10}
                      hashNavigation={{
                       watchState: true,
                         }}
                      pagination={{
                       dynamicBullets: true,
                        }}
                        navigation={true}
                         modules={[Pagination, Navigation]}
                          className="mySwiper"
                  >
                      <SwiperSlide>
                         <div className="swipe">
                             <p className="swiper__top">“</p>
                             <p className="swiper__info">Я вынуждена использовать в работе вспомогательные компоненты, воздействовать на организм изнутри. Мне важен результат, а результат зависит от используемых мною средств - поэтому я выбираю 4FOOD company</p>
                             <div className="swiper__user">
                                 <p className="swiper__user-name">Амира Х.</p>
                                 <p className="swiper__user-job">Врач-подолог</p>
                                 <img src={userLogo} alt="" className="swiper__user-img"/>
                             </div>
                         </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <p className="swiper__top">“</p>
                          <p className="swiper__info">Я очень люблю бег и спорт, но не всегда на всё хватает сил, поэтому я использую БАДы, чтобы держать себя в форме. Продукция 4FOOD company меня полностью устраивает.</p>
                          <div className="swiper__user">
                              <p className="swiper__user-name">Мария Х.</p>
                              <p className="swiper__user-job">Спортсменка</p>
                              <img src={userLogo} alt="" className="swiper__user-img"/>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <p className="swiper__top">“</p>
                          <p className="swiper__info">Я всегда стремился вести здоровый образ жизни, но было сложно отказаться от вредных привычек и привить себе правильное питание. БАДы 4FOOD company помогли мне пройти тяжелый период адаптации к новой жизни. Я всем доволен!</p>
                          <div className="swiper__user">
                              <p className="swiper__user-name">Максим Д.</p>
                              <p className="swiper__user-job">Клиент</p>
                              <img src={userLogo} alt="" className="swiper__user-img"/>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <p className="swiper__top">“</p>
                          <p className="swiper__info">Я вынуждена использовать в работе вспомогательные компоненты, воздействовать на организм изнутри. Мне важен результат, а результат зависит от используемых мною средств - поэтому я выбираю 4FOOD company</p>
                          <div className="swiper__user">
                              <p className="swiper__user-name">Амира Х.</p>
                              <p className="swiper__user-job">Врач-подолог</p>
                              <img src={userLogo} alt="" className="swiper__user-img"/>
                          </div>
                      </SwiperSlide>

                      <SwiperSlide>
                          <p className="swiper__top">“</p>
                          <p className="swiper__info">Я вынуждена использовать в работе вспомогательные компоненты, воздействовать на организм изнутри. Мне важен результат, а результат зависит от используемых мною средств - поэтому я выбираю 4FOOD company</p>
                          <div className="swiper__user">
                              <p className="swiper__user-name">Амира Х.</p>
                              <p className="swiper__user-job">Врач-подолог</p>
                              <img src={userLogo} alt="" className="swiper__user-img"/>
                          </div>
                      </SwiperSlide>

                  </Swiper>
              </div>


           </div>
        </>
    );
};

export default Swipe;