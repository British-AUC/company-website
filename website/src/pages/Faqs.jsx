import React from "react"
import Question from "../components/Question";
import faqdata from "../data/faqs"

export default function Faqs(){
    const questions = faqdata.map(item => <Question key={item.id} {...item} />)

    return (
        <>
            <section className="section-sixteen">
                <h2>Frequently Asked Questions</h2>
                <div className="section-sixteen-sub">
                    {questions}
                </div>
            </section>
        </>
    )
}