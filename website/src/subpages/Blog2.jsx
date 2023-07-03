import React from "react";
import { Link } from "react-router-dom";
import link from "../assets/link_black.svg";
import twitter from "../assets/twitter_black.svg";
import facebook from "../assets/facebook_black.svg";
import linkedin from "../assets/linkedin_black.svg";
import email from "../assets/email_black.svg";
import flyer2 from "../assets/blog/flyer2.webp";

export default function BlogTwo() {
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  }

  return (
    <section className="blog-page">
      <div className="left">
        <div className="tags-container">
          <span>Study in Canada</span>
          <span>July 3, 2023</span>
          <span>Juliet D.</span>
          <span>5min Read</span>
        </div>
        <div className="social-icons-2">
          <a
            href="#"
            onClick={() =>
              copyToClipboard("www.britishauc.com/blog/uk-dependant-visa-ban")
            }
          >
            <img src={link} alt="Link" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://www.britishauc.com//blog/canada-postgraduate-work-visa-extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.britishauc.com//blog/canada-postgraduate-work-visa-extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.britishauc.com//blog/canada-postgraduate-work-visa-extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:?subject=Check%20out%20this%20blog%20post&body=I%20found%20this%20interesting%20blog%20post%20and%20thought%20you%20might%20like%20it:%20https://www.britishauc.com//blog/canada-postgraduate-work-visa-extension">
            <img src={email} alt="Email" />
          </a>
        </div>
        <h2>
          Canada's Postgraduate Work Visa Extension: Supporting Your Study and
          Relocation Goals.
        </h2>
        <img src={flyer2} alt="Padlock on UK Flag" className="cover-image" />

        <p>
          Are you an ambitious student with dreams of studying abroad and
          exploring new horizons? Look no further than Canada, a country
          renowned for its world-class education system and welcoming
          environment for international students. And now, Canada has offered an
          exciting opportunity to extend postgraduates' stay and pursue their
          dreams even further with the 18-month work visa extension. In this
          article, we will delve into the benefits of this program and how it
          can support your study and relocation dreams. Whether you're already
          in Canada or considering it as your future destination, read on to
          discover the possibilities that await you.
        </p>

        <b>1. Work and Study in Harmony:</b>
        <p>
          In contrast to{" "}
          <a href="https://erudera.com/resources/best-countries-to-work-and-study-for-international-students/">
            some countries that prohibit international students from working
            while they are studying
          </a>
          , Canada continues to be one of the top countries that allows students
          to study and work. During the academic year, international students
          are allowed to work up to 20 hours per week on or off campus, and
          during breaks, they can work full-time. With this flexibility, you can
          not only obtain important work experience but also finance your
          schooling and daily living costs. You can achieve a balance between
          academic pursuits and experiential learning by juggling work and
          study, which will improve your entire educational experience. The
          recent extension of the postgraduate work period by 18 months only
          demonstrates that Canada won't be stopping anytime soon in welcoming
          more immigrants into their nation as they aim to welcome about{" "}
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/supplementary-immigration-levels-2023-2025.html">
            500,000 permanent residents in 2025.
          </a>
        </p>

        <b>2. Support for Spouses and Partners:</b>
        <p>
          <a href="https://www.newswire.ca/news-releases/canada-is-reuniting-loved-ones-through-new-immigration-measures-899762853.html">
            Canada understands the importance of keeping families together
          </a>{" "}
          during the pursuit of education. If you are an international student
          holding a valid study permit, your spouse or common-law partner can
          also benefit from the work visa extension. They can obtain a work
          permit, which grants them the freedom to work in Canada without the
          need for a{" "}
          <a href="https://www.cic.gc.ca/english/helpcentre/answer.asp?qnum=163">
            Labour Market Impact Assessment (LMIA)
          </a>
          . This provision not only strengthens your family's financial
          stability but also provides your partner with valuable Canadian work
          experience, enhancing their career prospects as well.
        </p>

        <b>3. Increase Your Work Experience and Close Skill Gaps:</b>
        <p>
          As an opportune postgraduate in Canada, it will only be profitable for
          you if you use this extension as a period to better up your skills.
          Canada is aware of the vital contributions that international
          graduates have made to the country's workforce and economy. The
          18-month work visa extension gives you the opportunity to increase
          your work experience, cover{" "}
          <a href="https://ca.indeed.com/career-advice/finding-a-job/skills-in-demand-in-canada?psafe_param=1&aceid=&gclid=CjwKCAjwhdWkBhBZEiwA1ibLmGnqV1eEn92L0AQ4Gj7lORjq8ZFHPshvm-rFCbEjONEB07xVYBM4LhoCgUUQAvD_BwE&gclsrc=aw.ds">
            skill gaps in high-demand industries
          </a>{" "}
          , and improve your professional abilities. This extension offers the
          best platform for you to advance your career and improve your
          marketability in Canada and abroad, whether you're polishing your
          expertise in technology, healthcare, engineering, agriculture, or
          other disciplines.
        </p>

        <b>4. A Pathway to Permanent Residence:</b>
        <p>
          Canada recognizes the contributions made by foreign students and
          provides a number of immigration programs to aid in their quest for
          permanent residence. You can switch from being an international
          student to a permanent resident by using the{" "}
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/economic-classes/experience.html">
            {" "}
            Canadian Experience Class (CEC)
          </a>{" "}
          and provincial nominee programs. You can more efficiently complete the
          requirements for these programs by taking advantage of the 18-month
          work visa extension. Your application will be strengthened by your job
          history in Canada, which, when combined with your educational
          background, will boost your prospects of becoming a permanent resident
          of this lovely nation.
        </p>

        <b>5. Expand Your Horizons:</b>
        <p>
          A plethora of opportunities outside the classroom is made possible by
          the work visa extension. Working in Canada will provide you the chance
          to experience the dynamic local culture firsthand, meet people from
          all walks of life, and gain a better understanding of Canadian
          society. It's an opportunity to improve your language abilities,
          expand your professional network, and gain knowledge of the Canadian
          workplace. These experiences will not only help you grow personally
          but also improve your future professional opportunities, whether in
          Canada or internationally.
        </p>

        <b>Conclusion:</b>
        <p>
          Canada's 18-month work visa extension is a game-changer for all
          current and future international students in Nigeria when it comes to
          pursuing your relocation and education goals. Your chances of getting
          permanent residency are improved, your spouse or partner has
          opportunities, and you can work while you're in school. This inviting
          and professional addition demonstrates Canada's dedication to making
          international students and their families feel at home.
        </p>

        <p>
          Take advantage of Canada's outstanding educational possibilities, rich
          cultural experiences, and welcoming environment. Utilize the 18-month
          extension of your work visa to build your networks, obtain significant
          work experience, and secure a better future for yourself. Take that
          leap of faith and start this life-changing journey because Canada is
          prepared to help you realize your ambitions of studying and relocating
          here. We wish you every success and fulfillment in your academic
          endeavors and a new chapter in Canadian life.
        </p>

        <p>
          For the most recent information on work permit eligibility, visit the{" "}
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/news.html">
            IRCC newsroom website
          </a>
          . And if you want to take advantage of this chance but don't want to
          deal with the hassle of applying, Britishauc's free application and
          visa services will take care of everything. Dive in and speak with our
          expert advisors.
        </p>

        <p>
          In light of this, why not{" "}
          <Link to="/contact" target="_blank">
            contact us
          </Link>
          , and get your university and visa applications started for free.
        </p>
      </div>
      <div className="right">
        <div className="social-icons">
          <a
            href="#"
            onClick={() =>
              copyToClipboard("www.britishauc.com/blog/uk-dependant-visa-ban")
            }
          >
            <img src={link} alt="Link" />
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://www.britishauc.com/blog/uk-dependant-visa-ban"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://www.britishauc.com/blog/uk-dependant-visa-ban"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.britishauc.com/blog/uk-dependant-visa-ban"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="mailto:?subject=Check%20out%20this%20blog%20post&body=I%20found%20this%20interesting%20blog%20post%20and%20thought%20you%20might%20like%20it:%20https://www.britishauc.com/blog/uk-dependant-visa-ban">
            <img src={email} alt="Email" />
          </a>
        </div>
      </div>
    </section>
  );
}
