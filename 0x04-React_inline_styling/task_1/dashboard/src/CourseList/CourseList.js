import React from 'react';
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0" style={css(courseList.table)}>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
        listCourses.length == 0 ?
          <CourseListRow isHeader={false} textFirstCell='No course available yet'/>
        : null
        }
        {
          listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
        }
      </tbody>
    </table>
  );
}

const courseList = StyleSheet.create({
  table: {
    display: "table",
    width: "90%",
    border: "1px solid gray",
    margin:"2rem auto 0 auto",
    borderCollapse: "collapse",
  }


})

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propType = {
  listCourses: PropType.arrayOf(CourseShape)
};

export default CourseList;