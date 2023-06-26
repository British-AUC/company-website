import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";
import eventschedule from "../assets/BRITISH_AUC_SPORTS_STUDY_EXPO_2023.pdf";

export default function SportsStudyTourForm2023() {
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xppbmy",
        "template_6rwk2rw",
        form.current,
        "BSB0y4T-XoICax0xO"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          alert("Congrats! Your form has been submitted.");
          navigate("/");
        },
        (error) => {
          setIsError(true);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="event-page">
        <h1>BRITISH AUC SPORT & STUDY EXPO 2023</h1>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-container" id="top">
            <h3>DELEGATES REGISTRATION FORM</h3>
            <p id="text">
              Register to be a part of our study tour. We will cover 50 Schools
              in 2 cities across Nigeria.
            </p>
            <p id="text">
              The cities to be covered are Abuja and Lagos.
            </p>
            <p id="text">
              <span style={{ fontWeight: "bold" }}>Date:</span> 12th, 14th and 15th September 2023.
            </p>
            <p id="text">
              For more information about the event. Kindly download our{" "}
              <a href={eventschedule} target="_blank" download>
                event schedule
              </a>
            </p>
          </div>

          {/* Form inputs */}
          <div className="input-container">
            <p>First Name:</p>
            <input
              type="text"
              name="from_firstname"
              placeholder="First Name*"
              required
            />
          </div>

          <div className="input-container">
            <p>Last Name:</p>
            <input
              type="text"
              name="from_lastname"
              placeholder="Last Name*"
              required
            />
          </div>

          <div className="input-container">
            <p>Institution:</p>
            <input
              type="text"
              name="from_institution"
              placeholder="Your Institution"
              required
            />
          </div>

          <div className="input-container">
            <p>Email Address:</p>
            <input
              type="email"
              name="from_email"
              placeholder="Email Address*"
              required
            />
          </div>

          <div className="input-container">
            <p>Phone Number:</p>
            <input
              type="tel"
              name="from_telephone"
              placeholder="Phone Number*"
              required
            />
          </div>

          <div className="input-container">
            <p>Locations to attend:</p>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" name="from_locations" value="Abuja" />
                Abuja
              </label>
              <label>
                <input type="checkbox" name="from_locations" value="Lagos" />
                Lagos
              </label>
            </div>
          </div>

          <button className="button-1" type="submit">
            Submit
          </button>

          {isSubmitted && (
            <p style={{ color: "green" }}>Form submitted successfully!</p>
          )}

          {isError && (
            <p style={{ color: "red" }}>
              An error occurred. Check your network connection or try again
              later.
            </p>
          )}
        </form>
      </div>
    </>
  );
}
