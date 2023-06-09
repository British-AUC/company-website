import React from "react"
import Event from "../components/Event"
import eventsdata from "../data/events"

export default function Events(){
    const eventscard = eventsdata.map(item => <Event key={item.id} {...item} />)

    return (
        <>
        {/* SECTION THIRTEEN */}
            <section className="section-thirteen">
                <h2>Upcoming Events</h2>
                {eventscard}
            </section>
        </>
    )
}