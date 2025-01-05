const Footer = () => {
  return (
    <>
      <footer>
        <section className="bg-accent-color-1">
          <div className="r-container section border-bottom">
            <div className="row row-cols-1 row-cols-lg-2 w-100">
              <div className="col col-lg-4">
                <div className="d-flex flex-column gap-3 text-white">
                  <div className="logo-container">
                    <a href="index.html">
                      {" "}
                      <img
                        src="https://www.drahmedalattar.com/Assets/image/LoGo.png"
                        alt="logo"
                        className="img-fluid"
                        style={{ width: "75%" }}
                      />
                    </a>
                  </div>
                  <div className="social-container">
                    <a
                      href="https://web.facebook.com/doctorahmedalattar/"
                      className="social-item"
                    >
                      <i className="fa-brands fa-facebook" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@dr.ahmed.elattar?is_from_webapp=1&sender_device=pc"
                      className="social-item"
                    >
                      <i className="fa-brands fa-tiktok" />
                    </a>
                    <a
                      href="https://www.youtube.com/@DRAhmedELattar"
                      className="social-item"
                    >
                      <i className="fa-brands fa-youtube" />
                    </a>
                    <a
                      href="https://www.instagram.com/elattar_ahmed"
                      className="social-item"
                    >
                      <i className="fa-brands fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-8">
                <div className="row row-cols-1 row-cols-lg-3 text-white">
                  <div className="col">
                    <h5 className="font-2 mb-3">روابط سريعة</h5>
                    <ul className="list gap-2">
                      <li>
                        <a
                          href="https://www.drahmedalattar.com"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          الرئيسية
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.drahmedalattar.com/about"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          عنا
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.drahmedalattar.com/Services"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          خدمات
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.drahmedalattar.com/appointment"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          حجز موعد
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.drahmedalattar.com/blog"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          المدونة
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.drahmedalattar.com/ContactUs"
                          className="d-flex flex-row gap-3 align-items-center link"
                        >
                          <i className="fa-regular fa-circle-dot" />
                          تواصل معنا
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5 className="font-2 mb-3">خدماتنا</h5>
                    <ul
                      className="list gap-2"
                      style={{ fontFamily: "Markazi Text, serif" }}
                    >
                      <li>
                        <i className="fa-regular fa-circle-dot" /> تقويم العمود
                        الفقري
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> تركيب مفاصل
                        الركبة و الفخد الصناعية
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> اعادة عمليات
                        بناء الرباط الصليبي
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> اعادة بناء
                        الوتر الرافع للكتف
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> توسيع القناة
                        العصبية بالميكروسكوب
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> حقن كسور
                        العمود الفقري
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> تثبيت كسور
                        العمود الفقري بالتدخل المحدود
                      </li>
                      <li>
                        <i className="fa-regular fa-circle-dot" /> اعادة بناء حق
                        الحوض بعد الكسور المعقدة
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <h5 className="font-2 mb-3">معلومات</h5>
                    <div className="d-flex flex-column gap-3 zz">
                      <div className="d-flex flex-row align-items-center gap-3 text-white zz">
                        <span className="fs-2">
                          <i className="fa-solid fa-phone" />
                        </span>
                        <div className="d-flex flex-column">
                          <span>التليفون</span>
                          <span>
                            <a
                              href="tel:+201556555816"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              +201556555816
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://wa.me/201096577945"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              +201096577945
                            </a>
                          </span>
                          <span>
                            <a
                              href="https://wa.me/201065470154"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                              className="phone-link"
                            >
                              +20 106 547 0154
                            </a>
                          </span>
                          <span style={{ direction: "ltr", color: "white" }}>
                            <a
                              href="tel:+0552384177"
                              style={{ color: "white" }}
                            >
                              +0552384177
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center gap-3 text-white">
                        <span className="fs-2">
                          <i className="fa-solid fa-envelope" />
                        </span>
                        <div className="d-flex flex-column">
                          <span>الايميل</span>
                          <span>
                            <a
                              href="mailto:ahmedelattar37@gmail.com"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              ahmedelattar37@gmail.com
                            </a>
                          </span>
                          <span>
                            <a
                              href="mailto:ahmedelattar37@yahoo.com"
                              style={{
                                color: "inherit",
                                textDecoration: "none",
                              }}
                            >
                              ahmedelattar37@yahoo.com
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center gap-3 text-white">
                        <span className="fs-2">
                          <i className="fa-solid fa-location-dot" />
                        </span>
                        <div className="d-flex flex-column">
                          <span>العنوان</span>
                          <span>
                            شارع الجلاء (الجناين) - برج دار الطب - اعلى الطاهر
                            للبصريات - الدور السابع, الزقازيق, مصر
                          </span>
                          <p style={{ padding: "2px 0px" }}>
                            مدينتي | سيزون بارك | S26 | الدور الثاني | عيادات
                            أوركيد التخصصية
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 text-white text-center">
            <p className="m-0">
              Copyright 2024 © All Right Reserved Design by{" "}
              <a href="https://www.fikrashow.com/" style={{ color: "black" }}>
                FikraShow
              </a>
            </p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
