import Link from "next/link";

const page = () => {
  return (
    <>
      <main>
        <section
          className="section position-relative"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner.jpg)",
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
              <h3 className="accent-color font-1 fw-semibold">عنا</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">الرئيسية</Link>
                  </li>
                  <li aria-current="page" className="breadcrumb-item active">
                    عنا
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="r-container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="position-relative ps-5">
                  <img
                    alt="logo"
                    className="img-fluid rounded-4"
                    src="https://www.drahmedalattar.com/Assets/image/01.jpg"
                  />
                  <div className="position-absolute top-0 start-0 bg-accent-color rounded-4 p-4 text-white text-center mt-5">
                    <h3 className="font-1 fw-semibold m-0">
                      15
                      <sup
                        className="fw-normal"
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        عام
                      </sup>
                    </h3>
                    <span className="font-1">سنوات من الخبرة</span>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-1 h-100 justify-content-center px-3">
                  <h4 className="fw-semibold font-2 accent-color-1 ls-2 text-end">
                    ماذا عن الاستاذ الدكتور احمد العطار
                  </h4>
                  <h3 className="accent-color font-2 fw-semibold text-end">
                    دكتور احمد العطار استشاري جراحة العظام
                  </h3>
                  <p
                    className="font-2 fw-bold text-end dot-before mb-0"
                    style={{
                      direction: "rtl",
                    }}
                  >
                    دكتوراه القصر العيني
                  </p>
                  <p
                    className="font-2 fw-bold text-end dot-before mb-0"
                    style={{
                      direction: "rtl",
                    }}
                  >
                    زميل الكليه الملكيه البريطانيه
                  </p>
                  <p
                    className="font-2 fw-bold text-end dot-before mb-0"
                    style={{
                      direction: "rtl",
                    }}
                  >
                    مدرب بالزماله المصريه
                  </p>
                  <p
                    className="font-2 fw-bold text-end dot-before mb-0"
                    style={{
                      direction: "rtl",
                    }}
                  >
                    رئيس قسم العظام مستشفى الاحرار التعليمي
                  </p>
                  <p
                    className="font-2 fw-bold text-end dot-before"
                    style={{
                      direction: "rtl",
                    }}
                  >
                    رئيس قسم العظام مستشفى المبره للتامين الصحي{" "}
                  </p>
                  <div
                    className="rounded-3 bg-color-2 p-4 shadow border-start border-3 mb-3"
                    style={{
                      borderColor: "var(--accent-color-1)",
                    }}
                  >
                    <p className="fst-italic font-1 text-end">
                      “نحن نسعى دائمًا لتحقيق التميز في الرعاية الصحية من خلال
                      الالتزام بأعلى معايير الجودة والخدمة.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section position-relative bg-attach-fixed"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner3.jpg)",
          }}
        >
          <div className="image-overlay-2" />
          <div
            className="r-container position-relative mb-5"
            style={{
              zIndex: "2",
            }}
          >
            <div
              className="w-100 row row-cols-1 row-cols-lg-4 text-center text-white"
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="col mb-3">
                <div className="d-flex flex-column">
                  <h3>
                    <i className="fa-solid fa-users" />
                  </h3>
                  <h3 className="font-1 fw-semibold m-0">
                    1,200
                    <sup className="fw-normal">+</sup>
                  </h3>
                  <span className="font-1">Happy Patients</span>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column">
                  <h3>
                    <i className="fa-solid fa-award" />
                  </h3>
                  <h3 className="font-1 fw-semibold m-0">
                    15
                    <sup className="fw-normal">Th</sup>
                  </h3>
                  <span className="font-1">Years of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="pb-5 position-relative"
          style={{
            direction: "rtl",
            marginTop: "-100px",
          }}
        >
          <div className="r-container">
            <div className="rounded-3 bg-color-2 p-5">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-3">
                    <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                      لماذا نختارنا؟
                    </h6>
                    <h3 className="accent-color font-1 fw-semibold">
                      العديد من الحلول تحت سقف واحد
                    </h3>
                    <p
                      className="font-2 fw-light mx-auto my-0"
                      style={{
                        maxWidth: "912px",
                      }}
                    >
                      معيشتك مع عائلتك هي أولويتنا، والعناية بصحتك وصحة عائلتك
                      هي مهمتنا. يوفر أطباؤنا مجموعة واسعة من الخدمات الطبية
                      لمرضانا
                    </p>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" />
                        معالج محترف معتمد
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" />
                        علاج عالي الجودة وأفضل المعدات
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" />
                        طاقم عمل ودود ومتعاون
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" />
                        أسعار معقولة وشفاء مضمون
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <img
                    alt="attar-logo"
                    className="rounded-3 img-fluid"
                    src="https://www.drahmedalattar.com/Assets/image/1.jpg"
                  />
                  <div
                    className="d-flex flex-column gap-3 mt-3"
                    style={{
                      direction: "ltr",
                    }}
                  >
                    <div
                      className="r-progress w-100"
                    >
                      <span className="accent-color font-2">الخبرة</span>
                      <div className="progress-container">
                        <div className="r-progress-bar percentage-label">
                          <div className="progress-value" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="r-progress w-100"
                    >
                      <span className="accent-color font-2">
                        التقويم العصبي
                      </span>
                      <div className="progress-container">
                        <div className="r-progress-bar percentage-label">
                          <div className="progress-value" />
                        </div>
                      </div>
                    </div>
                    <div
                      className="r-progress w-100"
                    >
                      <span className="accent-color font-2">
                        العلاج الطبيعي
                      </span>
                      <div className="progress-container">
                        <div className="r-progress-bar percentage-label">
                          <div className="progress-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                تعرف على الاقسام
              </h3>
              <p
                className="font-2 fw-light mx-auto my-0"
                style={{
                  maxWidth: "912px",
                }}
              >
                معيشتك مع عائلتك هي أولويتنا، والعناية بصحتك وصحة عائلتك هي
                مهمتنا. يوفر أطباؤنا مجموعة واسعة من الخدمات الطبية لمرضانا
              </p>
              <div className="w-100 row row-cols-1 row-cols-lg-4 my-4">
                <div className="col mb-3">
                  <div className="team-container">
                    <div className="team-image">
                      <img
                        alt="attar-logo"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/2.jpg"
                      />
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
                        alt="attar-logo"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/3.jpg"
                        style={{
                          height: "260px",
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
                        alt="attar-logo"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/4.jpg"
                        style={{
                          height: "260px",
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
                        alt="attar-logo"
                        className="img-fluid"
                        src="https://www.drahmedalattar.com/Assets/image/patient-experiencing-elbow-issues.jpg"
                        style={{
                          borderRadius: "8px",
                          height: "260px",
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
              </div>
              <div className="d-flex justify-content-center">
                <Link
                  className="btn button font-1 ls-2 fw-semibold fs-7 py-3 px-4"
                  href="/sections"
                >
                  عرض باقي الاقسام
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section position-relative bg-attach-fixed"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner3.jpg)",
          }}
        >
          <div className="image-overlay-2" />
          <div
            className="r-container position-relative"
            style={{
              zIndex: "2",
            }}
          >
            <div className="d-flex flex-column gap-3 text-white text-center align-items-center">
              <h3
                className="font-1 fw-semibold"
                style={{
                  fontSize: "48px",
                }}
              >
                هل تشعر بشيء خاطئ في عظامك؟
              </h3>
              <p
                className="font-2 fw-light mx-auto"
                style={{
                  maxWidth: "912px",
                }}
              >
                معيشتك مع عائلتك هي أولويتنا، والعناية بصحتك وصحة عائلتك هي
                مهمتنا. يوفر أطباؤنا مجموعة واسعة من الخدمات الطبية لمرضانا
              </p>
              <Link
                className="btn button font-1 ls-2 fw-semibold fs-7 py-3 px-4"
                href="/contactUs"
              >
                استشارة مجانية
              </Link>
            </div>
          </div>
        </section>
      </main>
      ;
    </>
  );
};

export default page;
