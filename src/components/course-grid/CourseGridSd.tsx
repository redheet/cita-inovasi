import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import CtaSection from "../home/CtaSection";
import CourseGridSecondary from "../Elements/Tabs/CourseGridSecondary";

const CourseGridSd = () => {
  return (
    <>
      <Breadcrumb title="Courses" subTitle="Courses" />
      <CourseGridSecondary />
      <CtaSection />
    </>
  );
};

export default CourseGridSd;
