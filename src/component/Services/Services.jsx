import React, { useState } from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Modal from "../Modal/Modal";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleReadMore = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides on tablets
          1024: { slidesPerView: 3 }, // Show 3 slides on desktops
        }}
        className="services-carousel"
      >
        {Services_Data.map((service, index) => (
          <SwiperSlide key={index}>
            <fieldset className="services-format">
              <legend className="services-image">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
              </legend>

              <p>{service.s_desc}</p>
              <div
                className="services-readmore"
                onClick={() => handleReadMore(service)}
              >
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </fieldset>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Modal Component */}
      {selectedService && (
        <Modal selectedService={selectedService} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Services;
