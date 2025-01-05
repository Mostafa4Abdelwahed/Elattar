import Link from "next/link"

const page = () => {
  return (
    <>
    <main>
  <section
    className="section position-relative"
    style={{
      backgroundImage:
        "url(https://www.drahmedalattar.com/Assets/image/banner.jpg)",
    }}>
    <div className="image-overlay" />
    <div
      className="r-container position-relative "
      style={{
        zIndex: "2",
      }}>
      <div className="d-flex flex-column gap-3">
        <h3 className="accent-color font-1 fw-semibold">تواصل معنا</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">الرئيسية</Link>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              تواصل معنا
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <section
    className="section"
    style={{
      direction: "rtl",
    }}>
    <div className="r-container">
      <div className="row row-cols-1 row-cols-lg-2 w-100">
        <div className="col">
          <div className="d-flex flex-column gap-2">
            <h6 className="fw-semibold font-1 accent-color-1 ls-2 text-end">
              تواصل معنا
            </h6>
            <h3 className="accent-color font-2 fw-semibold">ابقى على تواصل</h3>
            <p
              className="font-2 fw-light"
              style={{
                direction: "rtl",
              }}>
              تواصل معنا اليوم للحصول على استشارة مع دكتور متخصص في مشاكل عظامك.
              نحن هنا لمساعدتك في فهم تحليلاتك الطبية، وتقديم أفضل النصائح
              لتحسين صحتك العامة والعافية.
            </p>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3 accent-color">
                  <span className="fs-2">
                    <i className="fa-solid fa-phone" />
                  </span>
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-2">التليفون</h5>
                    <small
                      style={{
                        direction: "ltr",
                      }}>
                      <span>
                        <a
                          href="tel:+201556555816"
                          style={{
                            color: "black",
                          }}>
                          +201556555816
                        </a>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3 accent-color">
                  <span className="fs-2">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-2">البريد الالكتروني</h5>
                    <small>
                      <span>
                        <a
                          className="font-2"
                          href="mailto:ahmedelattar37@gmail.com"
                          style={{
                            color: "black",
                            fontSize: "16px",
                            textDecoration: "none",
                          }}>
                          ahmedelattar37@gmail.com
                        </a>
                      </span>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3 accent-color">
                  <span className="fs-2">
                    <i className="fa-solid fa-earth-asia" />
                  </span>
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-2">الموقع</h5>
                    <small>
                      <span>https://drahmedalattar.com</span>
                    </small>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-row align-items-center gap-3 accent-color">
                  <span className="fs-2">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <div className="d-flex flex-column">
                    <h5 className="m-0 font-2">العنوان</h5>
                    <small>
                      <span className="font-2">
                        شارع الجلاء (الجناين) - برج دار الطب - اعلى الطاهر
                        للبصريات - الدور السابع, Az Zagazig, Egypt
                      </span>
                    </small>
                    <p
                      className="font-2"
                      style={{
                        padding: "2px 0px",
                      }}>
                      مدينتي | سيزون بارك | S26 | الدور الثاني | عيادات أوركيد
                      التخصصية
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="border-bottom border-3 my-4"
              style={{
                borderColor: "var(--accent-color-1)",
              }}></div>
            <div className="d-flex flex-column">
              <h5 className="font-2">تواصل معنا : </h5>
              <div className="social-container">
                <a
                  className="social-item bg-accent-color-1"
                  href="https://web.facebook.com/doctorahmedalattar/"
                  style={{
                    height: "2.3rem",
                    width: "2.3rem",
                  }}>
                  <i className="fa-brands fa-facebook" />
                </a>
                <a
                  className="social-item bg-accent-color-1"
                  href="https://www.tiktok.com/@dr.ahmed.elattar?is_from_webapp=1&sender_device=pc"
                  style={{
                    height: "2.3rem",
                    width: "2.3rem",
                  }}>
                  <i className="fa-brands fa-tiktok" />
                </a>
                <a
                  className="social-item bg-accent-color-1"
                  href="https://www.youtube.com/@DRAhmedELattar"
                  style={{
                    height: "2.3rem",
                    width: "2.3rem",
                  }}>
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  className="social-item bg-accent-color-1"
                  href="https://www.instagram.com/elattar_ahmed"
                  style={{
                    height: "2.3rem",
                    width: "2.3rem",
                  }}>
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="h-100 d-flex flex-column p-5">
            <h5 className="font-1 lh-1 mb-3 font-2">ارسل رسالة</h5>
            <form
              action="https://www.drahmedalattar.com/messages"
              className="d-flex flex-column h-100 justify-content-center w-100  mb-3 form"
              method="post"
              noValidate>
              <input
                autoComplete="off"
                defaultValue="jJ57OXB4XwmWXTbqhpZerJzGXGk18wZNOZS45t45"
                name="_token"
                type="hidden"
              />
              <div className="mb-3">
                <input
                  className="form-control py-3 px-4 text-end "
                  defaultValue=""
                  id="name"
                  name="name"
                  placeholder="اسمك"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control py-3 px-4 font-2 text-end "
                  defaultValue=""
                  id="email"
                  name="email"
                  placeholder="البريد الالكتروني"
                  required
                  type="email"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control py-3 px-4 "
                  defaultValue=""
                  id="phone"
                  name="phone"
                  placeholder="رقم التليفون"
                  required
                  type="tel"
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control py-3 px-4 text-end "
                  defaultValue=""
                  id="subject"
                  name="subject"
                  placeholder="الموضوع"
                  required
                  type="text"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control py-3 px-4 text-end "
                  id="message"
                  name="message"
                  placeholder="محتوي الرسالة"
                  required
                  rows={5}
                />
              </div>
              <div
                className="mb-3"
                style={{
                  direction: "ltr",
                }}>
                <button className="btn submit_form py-3 font-2" type="submit">
                  ارسل رسالة
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>;

    </>
  )
}

export default page