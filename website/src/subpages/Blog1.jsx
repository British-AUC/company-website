import React from "react";
import { Link } from "react-router-dom";
import link from "../assets/link_black.svg";
import twitter from "../assets/twitter_black.svg";
import facebook from "../assets/facebook_black.svg";
import linkedin from "../assets/linkedin_black.svg";
import email from "../assets/email_black.svg";
import ukpadlock from "../assets/ukpadlock.webp";

export default function BlogOne() {
    function copyToClipboard(text) {
        // Create a temporary input element
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);

        // Select the input field and copy the text
        input.select();
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(input);

        alert('Link copied to clipboard!');
    }


    return (
        <section className="blog-page">
            <div className="left">
                <div className="tags-container">
                    <span>Study in UK</span>
                    <span>June 22, 2023</span>
                    <span>Juliet D.</span>
                    <span>3min Read</span>
                </div>
                <div className="social-icons-2">
                    <a href="#" id="copy-link" onclick="copyToClipboard('www.britishauc.com/blog/uk-dependant-visa-ban')">
                        <img src={link} alt="Link" />
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="mailto:?subject=Check%20out%20this%20blog%20post&body=I%20found%20this%20interesting%20blog%20post%20and%20thought%20you%20might%20like%20it:%20https://www.britishauc.com/blog/uk-dependant-visa-ban">
                        <img src={email} alt="Email" />
                    </a>
                </div>
                <h2>
                    Navigating the UK's Dependent Visa Ban: What Nigerian Students Need to Know
                </h2>
                <img src={ukpadlock} alt="Padlock on UK Flag" className="cover-image" />
                <p>
                    Since the Home Secretary, Suella Braverman, announced the ban on
                    dependent visas for people traveling to the UK for their master's
                    program on May 23, 2023, it is no longer news that the prohibition will
                    take effect in January 2024. This revelation has so far elicited a wide
                    range of responses in both the online and offline arenas.
                </p>
                <p>
                    Remember that this is not an attempt to put an end to your desire to
                    study in the UK, as there are still major advantages the UK offers
                    international students.
                </p>
                <p>
                    In this article, I will explain why these policies were enacted, What to
                    expect regarding these policies, as well as how it affects both
                    international students and prospective international students.
                </p>
                <b>Let's look at the policy's justification first:</b>
                <p>
                    As part of its initiatives to lower{" "}
                    <a
                        href="https://dictionary.cambridge.org/dictionary/english/net-immigration"
                        target="_blank"
                    >
                        net immigration
                    </a>{" "}
                    and the overall number of immigrants entering the country, the UK
                    government announced a prohibition on dependent visas for overseas
                    students. The decision was made due to worries about the record-breaking
                    rate of immigration and its possible effects on housing, employment, and
                    society at large.
                </p>
                <p>
                    The administration wants to reduce net migration overall and tighten the
                    profile of immigrants entering the UK. A 750% increase in the number of
                    dependents of international students has occurred since 2019, and the
                    government anticipates that by prohibiting dependent visas for foreign
                    students, net migration will be significantly reduced.
                </p>
                <p>
                    The goal of the policy, which is regarded as the single biggest
                    tightening step the government has ever taken, is to protect public
                    services while bolstering the economy by continuing to welcome the most
                    bright and intelligent students to the UK.
                </p>
                <p>
                    <b>
                        Secondly, international graduate students will not be able to go from
                        the study route to the skill worker route until they have finished
                        their studies.
                    </b>{" "}
                    The reason is that a large number of students were reported to have
                    entered the UK on study visas with the intention of working rather than
                    enrolling in classes. The UK apparently saw an increase in students
                    using their degrees as a back door to land a job, as reported by{" "}
                    <a
                        href="https://economictimes.indiatimes.com/headlines.cms"
                        target="_blank"
                    >
                        India's Economic Times.
                    </a>
                </p>
                <p>
                    <b>
                        Thirdly, the UK government will also assess the maintenance budget or
                        proof of funding for dependent students.
                    </b>{" "}
                    For the student to be eligible to study in London, they must have at
                    least{" "}
                    <a href="https://www.gov.uk/student-visa/mo" target="_blanl">
                        £1,334
                    </a>{" "}
                    for nine months in a row, as well as £845 for any dependent they plan to
                    bring with them to the UK. However, the latest declaration promises to
                    review this, as it is also the government policy to restrict or prevent
                    excessive immigration from their country for the time being. Please be
                    aware that only PhD students will benefit from this, as they are the
                    only ones who are permitted to bring their dependents by January 2024.
                </p>
                <p>
                    <b>On the bright side</b>,{" "}
                    <a
                        href="https://monitor.icef.com/2023/05/uk-to-block-dependants-from-accompanying-international-students-as-of-january-2024/"
                        target="_blank"
                    >
                        students in postgraduate research-focused programs
                    </a>{" "}
                    won't be restricted by these policies, so as long as you are a master's
                    or PhD research-based student, you will still be allowed to bring your
                    dependents to the UK, since it won't make sense to leave your family
                    behind for a long time. This is a fantastic opportunity to grab onto, as
                    it will not only support your study dreams but also benefit both you and
                    the rest of your family.
                </p>
                <p>
                    Secondly, the regular undergraduate and graduate routes will not be
                    affected by these immigration limits because qualifying students will
                    still be able to stay in the UK for two to three years under the terms
                    of these routes. As implied by the policy's name, only master's students
                    who want to bring their families to the UK for a one-year study period
                    are affected. Students will still be allowed to submit applications for
                    admission to the UK as usual.
                </p>
                <p>
                    So ensure you don't give up on your dreams of studying in the UK or get
                    cumbered with unratified rumors, as the UK remains one of the top-notch
                    educational locations in the world.
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
                    <a href="#" id="copy-link" onclick="copyToClipboard('www.britishauc.com/blog/uk-dependant-visa-ban')">
                        <img src={link} alt="Link" />
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.britishauc.com/blog/uk-dependant-visa-ban" target="_blank" rel="noopener noreferrer">
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
