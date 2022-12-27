import { useParams, Navigate } from "react-router-dom";

import CourseTextArea from "../components/Course/CourseTextArea";
import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";
import CourseBreadCrumb from "../components/Course/CourseBreadCrumb";

import coursesData from "../data/_Courses";

function Course() {
  const routeParams = useParams();

  // Check if routeParams is valid by checking slug in coursesData if not redirect to 404
  const course = coursesData.find((course) => course.slug === routeParams.course);
  if (!course) {
    return <Navigate replace to="/404" />;
  }

  return (
    <div>
      <CoreBar />
      <CourseBreadCrumb course={course} phase={routeParams.phase} />
      <CourseTextArea course={course} phase={routeParams.phase}/>
      <CoreFooter />
    </div>
  )
}
export default Course;
