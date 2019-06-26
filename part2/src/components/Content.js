import React from 'react';
import Part from './Part';

const Content = ({ courses }) => {
    return courses.map(course => (
        <div key={course.id}>
            <h2>{course.name}</h2>
            <div>
                <Part parts={course.parts} />
            </div>
            <div><b>Total exercises: {course.parts.reduce((a, b) =>{return a + b.exercises},0)}</b></div>
        </div>
    ));
}
export default Content;