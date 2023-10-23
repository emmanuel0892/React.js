import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({course}) => {

    const courses = course

    return (
        <div>
            <Header title={courses.name} />
            <Content content={courses.parts} />
        </div>
    )
}

export default Course