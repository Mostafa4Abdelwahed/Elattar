"use client"
import Logo from "@/assets/logo-dark.png"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const url = usePathname();
  console.log({url});
  
  return (
    <>
      <section
        className="sticky-top bg-accent-color-1"
        style={{ direction: "rtl", zIndex: "999 !important" }}
      >
        <div className="r-container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="logo-container">
                <Link href="/">
                  {" "}
                  <Image
                    src={Logo}
                    alt="logo"
                    className="img-fluid"
                    style={{ maxWidth: 55 }}
                  />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fa-solid fa-bars-staggered" />
              </button>
              <div
                className="collapse p-lg-0 px-2 py-3 navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/" && "active"}`}
                      aria-current="page"
                      href="/"
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/about" && "active"}`}
                      href="/about"
                    >
                      عنا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/services" && "active"}`}
                      href="/services"
                    >
                      خدماتنا
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/appointment" && "active"}`}
                      href="/appointment"
                    >
                      احجز موعد
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/sections" && "active"}`}
                      href="/sections"
                    >
                      الاقسام
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/blog" && "active"}`}
                      href="/blog"
                    >
                      المدونة
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${url === "/contactUs" && "active"}`}
                      href="/contactUs"
                    >
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
                <div>
                  <div
                    className="d-flex flex-row align-items-center gap-3 text-white"
                    style={{ direction: "ltr" }}
                  >
                    <span className="fs-2">
                      <i className="fa-solid fa-phone" />
                    </span>
                    <div className="d-flex flex-column">
                      <span className="font-2">اتصل بنا</span>
                      <span>
                        <a
                          href="tel:+201556555816"
                          style={{ textDecoration: "none", color: "inherit" }}
                          className="phone-link"
                        >
                          +201556555816
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
