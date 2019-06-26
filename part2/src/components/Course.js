import React from 'react';
import Header from './Header';
import Content from './Content';

// const Total = (props) => {

//     const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  
//     return (
//       <div><b>Total exercises: {total}</b></div>
//     );
// }

const Total = (props) => {
    console.log(props);
    const total = props.parts.reduce((a, b) =>{return a + b.exercises},0);
    console.log(total);
    return (
        <div><b>Total exercises: {total}</b></div>
    );
    
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    );
}

export default Course;
