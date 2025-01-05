import Link from "next/link";

const page = () => {
  return (
    <>
      <main>
        <section
          className="section position-relative"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner1.jpg)",
          }}
        >
          <div className="image-overlay" />
          <div
            className="r-container position-relative "
            style={{
              zIndex: "2",
            }}
          >
            <div className="d-flex flex-column gap-3">
              <h3 className="accent-color font-1 fw-semibold">الاقسام</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">الرئيسية</Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    الاقسام
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="r-container">
            <div className="d-flex flex-column gap-3 text-center">
              <h6 className="fw-semibold font-2 accent-color-1 ls-2">
                الاقسام
              </h6>
              <h3 className="accent-color font-2 fw-semibold">
                تصفح جميع الاقسام عندنا
              </h3>
              <div className="w-100 row row-cols-1 row-cols-lg-4 my-4">
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <a href="other-page.html">
                        <img
                          alt="attar-img"
                          className="img-fluid"
                          src="https://www.drahmedalattar.com/Assets/image/1.jpg"
                        />
                      </a>
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Backbone"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">عمود فقري</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/09.jpg"
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Joints"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">مفاصل</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/05 (2).jpg"
                        style={{
                          height: "275px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Shoulder"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">كتف</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/451816098_1001341021436433_5879373760614448331_n.jpg"
                        style={{
                          borderRadius: "8px",
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Elbow"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">كوع</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt=""
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/017.png"
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Hand"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">يد</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="Assets/image/019.png "
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Seniorfractures"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">كسور كبار</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/12.jpg"
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Pediatricfractures"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">كسور اطفال</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/23.jpg"
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Pelvis"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">حوض</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/24.jpg"
                        style={{
                          height: "270px",
                        }}
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/knee"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">ركبه</h5>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/452079461_1006423887594813_5979823813801771851_n.jpg"
                      />
                      <div className="team-overlay">
                        <div className="social-container justify-content-center">
                          <Link
                            className="social-item bg-accent-color-1"
                            href="/sections/Foot"
                          >
                            <i className="fa-brands fa-youtube" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="team-detail font-1">
                      <h5 className="m-0 font-2">قدم وكاحل</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
};

export default page;
