import React from "react";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import courses_data from "@/data/courses-data";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "../home/CtaSection";
import CourseGridIconOne from "@/svg/course-grid-icon-one";
import CourseGridIconTwo from "@/svg/course-grid-icon-two";

const CourseListMain = () => {
  return (
    <>
      <Breadcrumb title="Courses" subTitle="Courses" />
      <section className="course__area pt-120 pb-120">
        <div className="container">
          <div className="course__tab-inner grey-bg-2 mb-50">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__tab-wrapper d-flex align-items-center">
                  <div className="course__tab-btn">
                    <ul className="nav nav-tabs" id="courseTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="grid-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#grid"
                          type="button"
                          role="tab"
                          aria-controls="grid"
                          aria-selected="true"
                        >
                          <CourseGridIconOne />
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link list active"
                          id="list-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#list"
                          type="button"
                          role="tab"
                          aria-controls="list"
                          aria-selected="false"
                        >
                          <CourseGridIconTwo />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="course__view">
                    <h4>Showing 1 - 9 of 84</h4>
                  </div>
                </div>
              </div>
              {/* <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="course__sort d-flex justify-content-sm-end">
                  <div className="course__sort-inner">
                    <select>
                      <option>Default</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                      <option>Option 6</option>
                    </select>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="course__tab-conent">
                <div className="tab-content" id="courseTabContent">
                  <div
                    className="tab-pane fade"
                    id="grid"
                    role="tabpanel"
                    aria-labelledby="grid-tab"
                  >
                    <div className="row">
                      {courses_data.slice(8, 17).map((item) => (
                        <div
                          key={item.id}
                          className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                        >
                          <div className="course__item white-bg mb-30 fix">
                            <div className="course__thumb w-img p-relative fix">
                              <Link href={`/course-details/${item.id}`}>
                                <Image
                                  src={item.image}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="image not found"
                                />
                              </Link>
                              <div className="course__tag">
                                <Link
                                  href={`/course-details/${item.id}`}
                                  className={
                                    item.categoryClass
                                      ? `${item.categoryClass}`
                                      : ""
                                  }
                                >
                                  {item.category}
                                </Link>
                              </div>
                            </div>
                            <div className="course__content">
                              <div className="course__meta d-flex align-items-center justify-content-between">
                                <div className="course__lesson">
                                  <span>
                                    <i className="far fa-book-alt"></i>
                                    {item.lesson} Lesson
                                  </span>
                                </div>
                                <div className="course__rating">
                                  <span>
                                    <i className="fas fa-star"></i>
                                    {item.ratingAve} ({item.ratingCount})
                                  </span>
                                </div>
                              </div>
                              <h3 className="course__title">
                                <Link href={`/course-details/${item.id}`}>
                                  {item.title}
                                </Link>
                              </h3>
                              <div className="course__teacher d-flex align-items-center">
                                <div className="course__teacher-thumb mr-15">
                                  <Image
                                    src={item.tutorImg}
                                    style={{ width: "auto", height: "auto" }}
                                    alt="image not found"
                                  />
                                </div>
                                <h6>
                                  <Link href="/instructor-details">
                                    {item.author}
                                  </Link>
                                </h6>
                              </div>
                            </div>
                            <div className="course__more d-flex justify-content-between align-items-center">
                              <div className="course__status">
                                <span
                                  className={
                                    item.priceClass ? `${item.priceClass}` : ""
                                  }
                                >
                                  {item.price === 0
                                    ? "FREE"
                                    : `$${item.price}.00`}
                                </span>
                                <span className="old-price">
                                  {item.oldPrice === 0
                                    ? " "
                                    : `$${item.oldPrice}.00`}
                                </span>
                              </div>
                              <div className="course__btn">
                                <Link
                                  href={`/course-details/${item.id}`}
                                  className="link-btn"
                                >
                                  Know Details
                                  <i className="far fa-arrow-right"></i>
                                  <i className="far fa-arrow-right"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="list"
                    role="tabpanel"
                    aria-labelledby="list-tab"
                  >
                    <div className="row">
                      {courses_data.slice(17, 23).map((item) => (
                        <div key={item.id} className="col-xxl-12">
                          <div className="course__item white-bg mb-30 fix">
                            <div className="row gx-0">
                              <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="course__thumb course__thumb-list w-img p-relative fix">
                                  <Link href={`/course-details/${item.id}`}>
                                    <Image
                                      src={item.image}
                                      style={{ width: "100%", height: "auto" }}
                                      alt="image not found"
                                    />
                                  </Link>
                                  <div className="course__tag">
                                    <Link
                                      href={`/course-details/${item.id}`}
                                      className={
                                        item.categoryClass
                                          ? `${item.categoryClass}`
                                          : ""
                                      }
                                    >
                                      {item.category}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="course__right">
                                  <div className="course__content course__content-3">
                                    <div className="course__meta d-flex align-items-center">
                                      <div className="course__lesson mr-20">
                                        <span>
                                          <i className="far fa-book-alt"></i>
                                          {item.lesson} Lesson
                                        </span>
                                      </div>
                                      <div className="course__rating">
                                        <span>
                                          <i className="fas fa-star"></i>
                                          {item.ratingAve} ({item.ratingCount})
                                        </span>
                                      </div>
                                    </div>
                                    <h3 className="course__title course__title-3">
                                      <Link href={`/course-details/${item.id}`}>
                                        {item.title}
                                      </Link>
                                    </h3>
                                    <div className="course__summary">
                                      <p>{item.desc}</p>
                                    </div>
                                    <div className="course__teacher d-flex align-items-center">
                                      <div className="course__teacher-thumb mr-15">
                                        <Image
                                          src={item.tutorImg}
                                          style={{
                                            width: "auto",
                                            height: "auto",
                                          }}
                                          alt="image not found"
                                        />
                                      </div>
                                      <h6>
                                        <Link href="/instructor-details">
                                          {item.author}
                                        </Link>
                                      </h6>
                                    </div>
                                  </div>
                                  <div className="course__more course__more-2 d-flex justify-content-between align-items-center">
                                    <div className="course__status">
                                      <span
                                        className={
                                          item.priceClass
                                            ? `${item.priceClass}`
                                            : ""
                                        }
                                      >
                                        {item.price === 0
                                          ? "FREE"
                                          : `$${item.price}.00`}
                                      </span>
                                      <span className="old-price">
                                        {item.oldPrice === 0
                                          ? " "
                                          : `$${item.oldPrice}.00`}
                                      </span>
                                    </div>
                                    <div className="course__btn">
                                      <Link
                                        href={`/course-details/${item.id}`}
                                        className="link-btn"
                                      >
                                        Know Details
                                        <i className="far fa-arrow-right"></i>
                                        <i className="far fa-arrow-right"></i>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
};

export default CourseListMain;
