import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function World_Education_Expo_2023() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    institution: "",
    email: "",
    telephone: "",
    locations: [],
  });

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      const updatedLocations = [...formData.locations];
      if (checked) {
        updatedLocations.push(value);
      } else {
        const index = updatedLocations.indexOf(value);
        if (index !== -1) {
          updatedLocations.splice(index, 1);
        }
      }
      setFormData((prevState) => ({
        ...prevState,
        locations: updatedLocations,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  async function submitFormData(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_ms2fofk",
          template_id: "template_yzc64mj",
          user_id: "MLH1eO9nBHifSCH03",
          template_params: {
            from_firstname: formData.firstName,
            from_lastname: formData.lastName,
            from_institution: formData.institution,
            from_email: formData.email,
            from_telephone: formData.telephone,
            from_locations: formData.locations.join(", "),
          },
        }
      );

      if (response.status === 200) {
        alert("Congrats! The form has been submitted. We will reach out to you with more details as soon as possible.")
        navigate("/");
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      alert("Failed to send email. Please try again later.");
    }
  }

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
        <form onSubmit={submitFormData}>
          <div className="input-container">
            <p>First Name:</p>
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <p>Last Name:</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <p>Institution:</p>
            <input
              type="text"
              name="institution"
              placeholder="Your Institution"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <p>Email Address:</p>
            <input
              type="email"
              name="email"
              placeholder="Email Address*"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <p>Phone Number:</p>
            <input
              type="tel"
              name="telephone"
              placeholder="Phone Number*"
              value={formData.telephone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-container">
            <p>Locations to attend:</p>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Abuja"
                  checked={formData.locations.includes("Abuja")}
                  onChange={handleChange}
                />
                Abuja
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Lagos"
                  checked={formData.locations.includes("Lagos")}
                  onChange={handleChange}
                />
                Lagos
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Ibadan"
                  checked={formData.locations.includes("Ibadan")}
                  onChange={handleChange}
                />
                Ibadan
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Benin"
                  checked={formData.locations.includes("Benin")}
                  onChange={handleChange}
                />
                Benin
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Kano"
                  checked={formData.locations.includes("Kano")}
                  onChange={handleChange}
                />
                Kano
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Enugu"
                  checked={formData.locations.includes("Enugu")}
                  onChange={handleChange}
                />
                Enugu
              </label>
              <label>
                <input
                  type="checkbox"
                  name="locations"
                  value="Uyo"
                  checked={formData.locations.includes("Uyo")}
                  onChange={handleChange}
                />
                Uyo
              </label>
            </div>
          </div>

          <button className="button-1" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
