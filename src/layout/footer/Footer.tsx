import Link from "next/link";
import React from "react";
import FooterLogo from "../../../public/assets/img/logo/logo-2.png";
import Image from "next/image";
import CopyrightArea from "./copyright-area";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__area footer-bg">
          <div className="footer__top pt-190 pb-40">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <div className="footer__logo">
                        <Link href="/">
                          <Image
                            src={FooterLogo}
                            style={{ width: "auto", height: "auto" }}
                            alt="img not found"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="footer__widget-body">
                      <p>
                        Great lesson ideas and lesson plans for ESL teachers!
                        Educators can customize lesson plans to best.
                      </p>

                      <div className="footer__social">
                        <ul>
                          <li>
                            <Link href="https://www.facebook.com/">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link href="https://twitter.com/" className="tw">
                              <i className="fab fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="https://www.pinterest.com/"
                              className="pin"
                            >
                              <i className="fab fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 offset-xxl-1 col-xl-2 offset-xl-1 col-lg-3 offset-lg-0 col-md-2 offset-md-1 col-sm-5 offset-sm-1">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Company</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/about">About</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">Courses</Link>
                          </li>
                          <li>
                            <Link href="/event-details">Events</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Instructor</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Career</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Become a Teacher</Link>
                          </li>
                          <li>
                            <Link href="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 offset-lg-0 col-md-3 offset-md-1 col-sm-6">
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Platform</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__link">
                        <ul>
                          <li>
                            <Link href="/instructor">Browse Library</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Library</Link>
                          </li>
                          <li>
                            <Link href="/instructor">Partners</Link>
                          </li>
                          <li>
                            <Link href="/blog">News & Blogs</Link>
                          </li>
                          <li>
                            <Link href="/about">FAQs</Link>
                          </li>
                          <li>
                            <Link href="/course-grid">Tutorials</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget footer__pl-70 mb-50">
                    <div className="footer__widget-head mb-22">
                      <h3 className="footer__widget-title">Subscribe</h3>
                    </div>
                    <div className="footer__widget-body">
                      <div className="footer__subscribe">
                        <form action="#">
                          <div className="footer__subscribe-input mb-15">
                            <input
                              type="email"
                              placeholder="Your email address"
                            />
                            <button type="submit">
                              <i className="fas fa-arrow-right"></i>
                              <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </form>
                        <p>
                          Get the latest news and updates right at your inbox.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CopyrightArea />
        </div>
      </footer>
    </>
  );
};

export default Footer;
