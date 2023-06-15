import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useNavigate } from "react-router-dom";

export default function World_Education_Expo_2023() {
  const form = useRef();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ms2fofk",
        "template_h2wtf0v",
        form.current,
        "MLH1eO9nBHifSCH03"
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
        <h1>World Education Expo 2023</h1>
        <h3>DELEGATES REGISTRATION FORM</h3>
        <p className="text">
          Register to be a part of our study tour. We will cover 64 Schools in 7
          cities across Nigeria.
        </p>
        <ul>
          <li>Abuja: July 4th, 2023 | Venue: Continental Hotel (Sheraton)</li>
          <li>Port Harcourt: July 6th, 2023 | Venue: Golden Tulip Hotel GRA</li>
          <li>Lagos: July 8th, 2023 | Venue: Radisson Blu Hotel, GRA Ikeja</li>
        </ul>
        <form ref={form} onSubmit={sendEmail}>
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
              <label>
                <input type="checkbox" name="from_locations" value="Ibadan" />
                Ibadan
              </label>
              <label>
                <input type="checkbox" name="from_locations" value="Benin" />
                Benin
              </label>
              <label>
                <input type="checkbox" name="from_locations" value="Kano" />
                Kano
              </label>
              <label>
                <input type="checkbox" name="from_locations" value="Enugu" />
                Enugu
              </label>
              <label>
                <input type="checkbox" name="from_locations" value="Uyo" />
                Uyo
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
