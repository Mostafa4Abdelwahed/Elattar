"use client"
import attar from "@/assets/image/attar.jpg"
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const openMap = (location: any) => {
    let url = "";
    if (location === "cairo") {
      url =
        "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1364062.429476017!2d31.72524410420517!3d30.42907460015342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x145849f99293e19d%3A0x21f2f3a2f0e3a887!2sCairo%2C%20Egypt!3m2!1d30.0444196!2d31.2357116!4m5!1s0x14583a3f10523eab%3A0x9d206d0b3dd4f892!2sAlexandria%2C%20Egypt!3m2!1d31.2156455!2d29.9552667!5e0!3m2!1sen!2sus!4v1647600462937!5m2!1sen!2sus";
    } else if (location === "mansoura") {
      url =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2936963012074!2d31.666879!3d30.07821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583b7489be8e35%3A0xfba5f9266b7c8b93!2sAll%20Seasons%20Park!5e0!3m2!1sen!2sus!4v1647600462937!5m2!1sen!2sus";
    }
    window.open(url, "_blank");
  };
  

  return (
    <>
      <main>
        <section
          className="section position-relative"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/1.png)",
            height: "90vh",
          }}
        >
          <div className="image-overlay" />
          <div
            className="r-container position-relative h-100"
            style={{
              zIndex: "2",
            }}
          >
            <div className="row row-cols-lg-2 row-cols-1 w-100 h-100">
              <div className="col h-100">
                <div className="d-flex flex-column h-100 justify-content-center gap-3">
                  <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                    الدكتور احمد العطار
                  </h6>
                  <h2 className="accent-color font-1 fw-semibold mt-3">
                    حافظ على قوة عظامك وصحتها
                  </h2>
                  <div className="d-flex flex-row gap-5">
                    <Link
                      className="btn button font-1 ls-2 fw-semibold  py-3 px-4"
                      href="appointment"
                    >
                      حدد مقابلة
                    </Link>
                    <button
                      className="btn request-loader"
                      data-bs-target="#exampleModal"
                      data-bs-toggle="modal"
                      type="button"
                    >
                      <i className="fa-solid fa-play" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="pb-5 position-relative"
          style={{
            marginTop: "-100px",
          }}
        >
          <div className="r-container">
            <div className="w-100 mx-auto row row-cols-1 row-cols-lg-3 px-3 px-lg-0">
              <div className="col" />
              <div className="col mb-3">
                <div className="bg-accent-color-1 rounded-3 p-3  text-white text-center d-flex flex-column">
                  <h2>
                    <i className="fa-solid fa-award" />
                  </h2>
                  <h5 className="font-2">ضمان الجودة</h5>
                  <p>
                    نلتزم بتقديم أعلى مستويات الجودة في الرعاية الطبية لضمان
                    راحة وسلامة المرضى.
                  </p>
                </div>
              </div>
              <div className="col mb-3">
                <div className="bg-accent-color rounded-3 p-3  text-white text-center d-flex flex-column">
                  <h2>
                    <i className="fa-solid fa-user-doctor" />
                  </h2>
                  <h5 className="font-2">طبيب عظام محترف</h5>
                  <p>
                    متخصص في علاج أمراض العظام باستخدام أحدث التقنيات الطبية.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section"
          style={{
            direction: "rtl",
          }}
        >
          <div className="r-container">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col mb-3">
                <div className="position-relative ps-5">
                  <Link
                    data-fslightbox="gallery"
                    href="/"
                  >
                    <Image
                      alt="attar-img"
                      className="img-fluid rounded-4"
                      src={attar}
                    />
                  </Link>
                </div>
              </div>
              <div className="col mb-3">
                <div className="d-flex flex-column gap-2 h-100 justify-content-center px-3">
                  <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                    عن الاستاذ الدكتور العطار
                  </h6>
                  <h3 className="accent-color font-1 fw-semibold">
                    توفير مستوى عالٍ من الرعاية
                  </h3>
                  <p className="font-2 fw-light">
                    نحن ملتزمون بتوفير مستوى عالٍ من الرعاية الطبية لجميع
                    مرضانا. نسعى دائمًا لتقديم أحدث العلاجات الطبية ونتبع أفضل
                    الممارسات والمعايير الدولية لضمان أن يحصل كل مريض على العلاج
                    الأمثل والراحة التامة. نولي اهتمامًا كبيرًا لكل تفصيل صغير
                    لضمان السلامة والجودة في كل خطوة.
                    <br />
                    <br /> فريقنا الطبي يتكون من خبراء متخصصين في مجالاتهم، مما
                    يضمن تلقيك لأفضل رعاية ممكنة. كما نحرص على تحديث معرفتنا
                    ومهاراتنا بشكل مستمر لمواكبة أحدث التطورات في الطب.
                  </p>
                  <div className="row row-cols-1 row-cols-lg-2 mb-4">
                    <div className="col">
                      <div className="d-flex flex-row align-items-center gap-3">
                        <img
                          alt=""
                          className="img-fluid"
                          height="50"
                          src="https://www.drahmedalattar.com/Assets/image/icon-eye.png"
                          width="50"
                        />
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="m-0 font-2">رؤيتنا</h5>
                          <p className="m-0 font-2">
                            رؤيتنا تتمحور حول تحقيق راحة تامة، ثقة مع مرضانا.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex flex-row align-items-center gap-3">
                        <img
                          alt=""
                          className="img-fluid"
                          height="50"
                          src="https://www.drahmedalattar.com/Assets/image/icon-bullseye.png"
                          width="50"
                        />
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="m-0 font-2">مهمتنا</h5>
                          <p className="m-0 font-2">
                            نحن ملتزمون بتقديم أفضل مستويات الرعاية الطبية
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-color-2">
          <div className="r-container">
            <div className="d-flex flex-column text-center gap-2">
              <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                الخدمات
              </h6>
              <h3 className="accent-color font-1 fw-semibold mb-3">
                الظروف التي يمكننا التعامل معها
              </h3>
              <p
                className="font-2 fw-light mx-auto"
                style={{
                  maxWidth: "912px",
                  textAlign: "end",
                }}
              >
                نحن متخصصون في علاج وإدارة مجموعة واسعة من الظروف الطبية. نستطيع
                التعامل مع كسور العظام، آلام المفاصل، التهابات العظام والمفاصل،
                وأمراض العمود الفقري. كما نقدم خدمات في علاج الإصابات الرياضية
                وتقويم العظام. نحن هنا لتوفير الرعاية الطبية المتقدمة والشاملة
                لجميع مرضانا.
              </p>
              <div className="w-100 row row-cols-1 row-cols-lg-3">
                <div className="col mb-3">
                  <div
                    className="rounded-3 border border-3 p-5 d-flex flex-column justify-content-center align-items-center gap-3"
                    style={{
                      borderColor: "var(--accent-color-1)",
                    }}
                  >
                    <img
                      alt="attar-img"
                      className="img-fluid"
                      height="80"
                      src="https://www.drahmedalattar.com/Assets/image/icon1.png"
                      width="80"
                    />
                    <h5 className="font-2">تقويم العمود الفقري</h5>
                    <p className="font-2">
                      إجراء طبي لتصحيح انحناءات العمود الفقري وتحسين وضعية
                      الجسم.
                    </p>
                  </div>
                </div>
                <div className="col mb-3">
                  <div
                    className="rounded-3 border border-3 p-5 d-flex flex-column justify-content-center align-items-center gap-3"
                    style={{
                      borderColor: "var(--accent-color-1)",
                    }}
                  >
                    <img
                      alt=""
                      className="img-fluid"
                      height="80"
                      src="https://www.drahmedalattar.com/Assets/image/icon2.png"
                      width="80"
                    />
                    <h5 className="font-2">علاج مفاصل الحوض</h5>
                    <p className="font-2">
                      إجراءات علاجية تهدف لتخفيف الألم وتحسين وظيفة المفاصل
                      باستخدام الحقن بالخلايا الجذعية و تركيب مفاصل صناعية .
                    </p>
                  </div>
                </div>
                <div className="col mb-3">
                  <div
                    className="rounded-3 border border-3 p-5 d-flex flex-column justify-content-center align-items-center gap-3"
                    style={{
                      borderColor: "var(--accent-color-1)",
                    }}
                  >
                    <img
                      alt="attar-img"
                      className="img-fluid"
                      height="80"
                      src="https://www.drahmedalattar.com/Assets/image/icon3.png"
                      width="80"
                    />
                    <h5 className="font-2"> الحقن الاسمنتي بالفقرات</h5>
                    <p className="font-2">
                      إجراء طبي يستخدم لتقوية الفقرات المتضررة وتخفيف الألم
                      الناتج عن الكسور.
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
            marginTop: "-100px",
          }}
        >
          <div className="r-container">
            <div className="rounded-3 bg-color-2 p-5">
              <div className="row row-cols-1 row-cols-lg-2">
                <div className="col mb-3">
                  <a
                    data-fslightbox="gallery"
                    href="https://www.drahmedalattar.com/Assets/image/تعديل  اخير ٢.png"
                  >
                    <img
                      alt="attar-img"
                      className="rounded-3 img-fluid"
                      src="https://www.drahmedalattar.com/Assets/image/تعديل  اخير ٢.png"
                    />
                  </a>
                  <div className="d-flex flex-column gap-3 mt-3">
                    <div className="r-progress w-100">
                      <span className="accent-color font-2">الخبرة</span>
                      <div className="progress-container">
                        <div className="r-progress-bar percentage-label">
                          <div className="progress-value" />
                        </div>
                      </div>
                    </div>
                    <div className="r-progress w-100">
                      <span className="accent-color font-2">العلاج</span>
                      <div className="progress-container">
                        <div className="r-progress-bar percentage-label">
                          <div className="progress-value" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-3">
                    <h6 className="fw-semibold font-1 accent-color-1 ls-2 text-end">
                      لماذا نحن
                    </h6>
                    <h3 className="accent-color font-1 fw-semibold text-end">
                      العديد من الحلول
                    </h3>
                    <p
                      className="font-2 fw-light mx-auto my-0 text-end"
                      style={{
                        maxWidth: "912px",
                      }}
                    >
                      يتمتع دكتور العطار بخبرة واسعة في مجال جراحة العظام، حيث
                      أجرى العديد من العمليات الناجحة وقدم العناية الطبية
                      المتميزة للمرضى. يهتم دكتور العطار بتقديم رعاية شخصية لكل
                      مريض، حيث يستمع بعناية إلى مخاوف المرضى ويضع خطط علاج
                      مخصصة لتلبية احتياجاتهم الفردية.
                    </p>
                    <div
                      className="d-flex flex-column gap-2 "
                      style={{
                        direction: "rtl",
                      }}
                    >
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" /> معالج محترف
                        معتمد
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" /> علاج عالي
                        الجودة وأفضل المعدات
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" /> فريق عمل ودود
                        ولطيف
                      </div>
                      <div className="d-flex flex-row gap-2 font-2 align-items-center">
                        <i className="fa-solid fa-chevron-left" /> أسعار ممتازة
                        وعلاج مضمون
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
              <h6 className="fw-semibold font-1 accent-color-1 ls-2">
                كيف نعمل
              </h6>
              <h3 className="accent-color font-1 fw-semibold">
                مراحل الاستشارة
              </h3>
              <p
                className="font-2 fw-light mx-auto"
                style={{
                  maxWidth: "912px",
                }}
              >
                نقدم استشارات متكاملة تبدأ بتقييم شامل لحالتك الصحية، مرورًا
                بتحديد خطة علاج مخصصة تناسب احتياجاتك، وانتهاءً بمتابعة مستمرة
                لضمان تحقيق أفضل النتائج الممكنة. نحن هنا لنساعدك في كل خطوة على
                الطريق نحو الشفاء.
              </p>
              <div className="row row-cols-1 row-cols-lg-4 mt-3">
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                    <div
                      className="border-3 border rounded-3 p-3 mb-3"
                      style={{
                        borderColor: "var(--accent-color-1)",
                      }}
                    >
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        height="40"
                        src="https://www.drahmedalattar.com/Assets/image/notebook.png"
                        width="40"
                      />
                    </div>
                    <h6 className="font-1 m-0">إحجز موعد</h6>
                    <p className="font-2">
                      لا تتردد في حجز موعد معنا للاستشارات المتخصصة.
                    </p>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                    <div
                      className="border-3 border rounded-3 p-3 mb-3"
                      style={{
                        borderColor: "var(--accent-color-1)",
                      }}
                    >
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        height="40"
                        src="https://www.drahmedalattar.com/Assets/image/consulting.png"
                        width="40"
                      />
                    </div>
                    <h6 className="font-1 m-0">استشارة</h6>
                    <p className="font-2">
                      يمكنك حجز استشارة للحصول على النصائح اللازمة لحالتك
                      الصحية.
                    </p>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                    <div
                      className="border-3 border rounded-3 p-3 mb-3"
                      style={{
                        borderColor: "var(--accent-color-1)",
                      }}
                    >
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        height="40"
                        src="https://www.drahmedalattar.com/Assets/image/back.png"
                        width="40"
                      />
                    </div>
                    <h6 className="font-1 m-0"> تقويم العمود الفقري</h6>
                    <p className="font-2">
                      تستطيع بتقويم العمود الفقري وتخفيف الألم بطرق طبيعية
                      وآمنة.
                    </p>
                  </div>
                </div>
                <div className="col mb-3">
                  <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                    <div
                      className="border-3 border rounded-3 p-3 mb-3"
                      style={{
                        borderColor: "var(--accent-color-1)",
                      }}
                    >
                      <img
                        alt="attar-img"
                        className="img-fluid"
                        height="40"
                        src="https://www.drahmedalattar.com/Assets/image/reviews.png"
                        width="40"
                      />
                    </div>
                    <h6 className="font-1 m-0 ">مراجعة راضية</h6>
                    <p className="font-2">
                      نحن نفخر بتلقي العديد من المراجعات الإيجابية من مرضانا
                      الذين شعروا بالتحسن .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="r-container">
            <div className="d-flex flex-lg-row flex-column-reverse">
              <div className="col col-lg-5 mb-3">
                <div className="d-flex flex-column gap-3">
                  <h3 className="accent-color font-1 fw-semibold fs-1">
                    اراء الناس
                  </h3>
                  <div className="overflow-hidden outer-margin">
                    <div className="swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                            <h1>
                              <i className="fa-solid fa-quote-right" />
                            </h1>
                            <p className="text-gray mb-4 fst-italic font-1">
                              ربنا يبارك في حضرتك ويحفظك وجزاك الله عنا كل الخير
                              وربنا يزيدك من فضله وكرمه يارب وربنا يجعلك دائماً
                              سبب لشفاء كل مريض يااااارب العالمين
                            </p>
                            <div className="d-flex flex-column flex-grow-1">
                              <h6 className="font-2 lh-1">Hamasat Hazena</h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                            <h1>
                              <i className="fa-solid fa-quote-right" />
                            </h1>
                            <p className="text-gray mb-4 fst-italic font-1">
                              دكتور محترم وامين ربنا يباركلك ياباشا ويصلح مابين
                              ايديك
                            </p>
                            <div className="d-flex flex-column flex-grow-1">
                              <h6 className="font-2 lh-1">Ahmed Abdul Azzem</h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                            <h1>
                              <i className="fa-solid fa-quote-right" />
                            </h1>
                            <p className="text-gray mb-4 fst-italic font-1">
                              خلوق وشاطر ومجتهد بالتوفيق
                            </p>
                            <div className="d-flex flex-column flex-grow-1">
                              <h6 className="font-2 lh-1">Hassan Attia</h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                            <h1>
                              <i className="fa-solid fa-quote-right" />
                            </h1>
                            <p className="text-gray mb-4 fst-italic font-1">
                              شخصية محترمه وشاطر وعنده ضمير
                            </p>
                            <div className="d-flex flex-column flex-grow-1">
                              <h6 className="font-2 lh-1">Ashraf Abdalmonam</h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                            <h1>
                              <i className="fa-solid fa-quote-right" />
                            </h1>
                            <p className="text-gray mb-4 fst-italic font-1">
                              ربنا يبارك في حضرتك ويحفظك وجزاك الله عنا كل الخير
                              وربنا يزيدك من فضله وكرمه يارب وربنا يجعلك دائماً
                              سبب لشفاء كل مريض يااااارب العالمين
                            </p>
                            <div className="d-flex flex-column flex-grow-1">
                              <h6 className="font-2 lh-1">Hamast Hazena</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-7 mb-3">
                <a
                  data-fslightbox="gallery"
                  href="https://www.drahmedalattar.com/Assets/image/attar10.png"
                >
                  <img
                    alt="attar-img"
                    className="img-fluid rounded-4"
                    src="https://www.drahmedalattar.com/Assets/image/attar10.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section position-relative bg-attach-fixed">
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
                احجز اقرب عيادة ليك
              </h3>
              <div className="location-selector">
                <div
                  className="location-button font-2"
                  id="mansoura"
                  onClick={() => {
                    openMap("mansoura");
                  }}
                >
                  الزقايق
                </div>
                <div
                  className="location-button font-2"
                  id="cairo"
                  onClick={() => {
                    openMap("cairo");
                  }}
                >
                  القاهرة
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
