import React from "react";
import expoimage from "../assets/events/expoevent.jpg";
import expoimage2 from "../assets/events/expoevent2.jpg";

export default function World_Education_Expo_2023() {
  return (
    <>
      <div className="event-page">
        <h2>Introducing the World Education Expo 2023</h2>
        <img src={expoimage} alt="Expo Image" /><br />
        <p>
          Join us for the highly anticipated World Education Expo 2023, a
          remarkable event that brings together representatives from prestigious
          universities around the world. This extraordinary expo is designed to
          provide a platform for students, parents, and education enthusiasts to
          explore a world of educational opportunities and gain invaluable
          insights into the future of education, work, and the evolving job
          landscape.
        </p>

        <p>
          At this global gathering of academic visionaries, attendees will have
          the exclusive opportunity to engage with representatives from renowned
          universities in the UK, USA, Canada, and beyond. These esteemed
          representatives will share comprehensive information about the diverse
          programs offered by their institutions, the unique benefits they
          provide, and the exciting prospects that lie ahead for students in
          various fields.
        </p>

        <p>
          The World Education Expo 2023 aims to empower aspiring students and
          career enthusiasts by providing them with an in-depth understanding of
          the educational pathways available to them. Attendees will gain
          firsthand knowledge of the latest trends and innovations in education,
          ensuring they stay ahead of the curve and make informed decisions
          about their academic journeys.
        </p>

        <p>
          This event goes beyond the traditional educational fair format,
          fostering a dynamic environment where participants can engage in
          enlightening discussions, attend interactive workshops, and network
          with like-minded individuals. By bringing together the brightest minds
          in academia, the World Education Expo 2023 promises to be an immersive
          experience that opens doors to new possibilities.
        </p><br />

        <img src={expoimage2} alt="Expo Image" /><br />

        <h3>Event Schedule:</h3>
        <ul>
          <li>
            <b>Abuja:</b> July 4th, 2023 | Venue: Continental Hotel (Sheraton).
          </li>
          <li>
            <b>Port Harcourt:</b> July 6th, 2023 | Venue: Golden Tulip Hotel GRA.
          </li>
          <li>
            <b>Lagos:</b> July 8th, 2023 | Venue: Radisson Blu Hotel, GRA Ikeja.
          </li>
        </ul>

        <p>
          We invite students, parents, educators, and professionals to mark
          their calendars and join us at the World Education Expo 2023. Discover
          a world of educational excellence, gain valuable insights into the
          future of jobs and education, and embark on a transformative
          educational journey that will shape your future.
        </p>

        <p>
          Don't miss this exceptional opportunity to connect with leading
          universities, expand your horizons, and pave the way for a successful
          and fulfilling career. The World Education Expo 2023 is your gateway
          to a world of endless possibilities.
        </p>

        <p>
          For more information and to register for the event, visit our website
          or contact our event organizers. We look forward to welcoming you to
          this unparalleled educational extravaganza!
        </p>

        <button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScJMKUF_70pWILpqdfFQw0joY4oR75dyfjIm5zdol5Fanmp8A/viewform?pli=1" target="_blank">
                Register now
            </a>
        </button>
      </div>
    </>
  );
}
