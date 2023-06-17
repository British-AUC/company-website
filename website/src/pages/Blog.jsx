import React from "react"
import BlogCard from "../components/BlogCard"
import blogcarddata from "../data/blogcard"

export default function Blog(){
    const blogcards = blogcarddata.map(item => <BlogCard key={item.id} {...item} />) 

    return (
        <>
        {/* SECTION FOURTEEN */}
            <section className="section-fourteen">
                <h2>Latest Posts</h2>
                <div className="section-fourteen-sub">
                    {blogcards}
                </div>
            </section>
        </>
    )
}