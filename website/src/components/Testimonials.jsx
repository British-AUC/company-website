import React, { useEffect, useState } from "react";
import testimonials from "../data/testimonials.js"; // Path to your testimonials.js file
import leftchevron from "../assets/testimonials/left_chevron.svg";
import rightchevron from "../assets/testimonials/right_chevron.svg";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds (adjust the interval duration as needed)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-sub-container">
      <img className="arrow" src={leftchevron} onClick={prevSlide} />
        <div className="testimonial-container-left">
          <img src={testimonials[currentSlide].image} alt="Testifier" />
        </div>
        <div className="testimonial-container-right">
          <p className="message">{testimonials[currentSlide].message}</p>
          <div className="details">
            <img src={testimonials[currentSlide].icon} alt="Social Icon" />
            <b className="name">{testimonials[currentSlide].name}</b>
          </div>
          <p className="university">{testimonials[currentSlide].university}</p>
        </div>
        <img className="arrow" src={rightchevron} onClick={nextSlide} />
      </div>

      <div className="testimonial-nav">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`nav-bubble ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
