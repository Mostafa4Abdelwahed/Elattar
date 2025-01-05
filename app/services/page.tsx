import Link from "next/link"

const page = () => {
  return (
    <>
    <main>
  <section
    className="section position-relative"
    style={{
      backgroundImage:
        "url(https://www.drahmedalattar.com/Assets/image/banner1.jpg)",
    }}>
    <div className="image-overlay" />
    <div
      className="r-container position-relative "
      style={{
        zIndex: "2",
      }}>
      <div className="d-flex flex-column gap-3">
        <h3 className="accent-color font-1 fw-semibold">خدماتنا</h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">الرئيسية</a>
            </li>
            <li aria-current="page" className="breadcrumb-item active">
              تفاصيل الخدمات
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  <section className="section">
    <div className="r-container">
      <div className="row row-cols-1 row-cols-lg-2">
        <div className="col col-lg-8">
          <div className="d-flex flex-column">
            <img
              alt="attar-img"
              className="img-fluid rounded-4"
              src="https://www.drahmedalattar.com/Assets/image/449511966_992285492341986_3978017963045232058_n.jpg"
            />
            <h5 className="fw-semibold font-2">تقويم العمود الفقري</h5>
            <div className="d-flex flex-row gap-3 mb-3">
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-regular fa-folder" />
                الخدمات
              </div>
              |
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-regular fa-file-lines" />
                العمود الفقري
              </div>
            </div>
            <p
              className="font-2"
              style={{
                textAlign: "right",
              }}>
              يتعلق تقويم العمود الفقري بعلاج الظهر والأمراض المرتبطة به، حيث
              يعالج بالتلاعب اليدوي للعمود الفقري لتخفيف الألم واستعادة الحركة.
              يهدف هذا العلاج إلى تحسين الوظيفة الحيوية للعمود الفقري والحد من
              الشلل والأوجاع المزمنة
            </p>
            <div className="row row-cols-1 row-cols-lg-2 mb-3">
              <div className="col col-lg-7">
                <img
                  alt="attar-img"
                  className="img-fluid rounded-3"
                  src="https://www.drahmedalattar.com/Assets/image/8.jpg"
                />
              </div>
              <div
                className="col col-lg-5"
                style={{
                  direction: "rtl",
                  paddingTop: "50px",
                }}>
                <h6>العلاج الذي تحصل عليه</h6>
                <p className="font-2">
                  يتضمن علاج العظام التدخل اليدوي في العمود الفقري والمفاصل
                  لتحسين الوظيفة الحيوية والتخفيف من الألم.
                </p>
                <ul className="list gap-1">
                  <li className="d-flex flex-row gap-2 align-items-center font-2">
                    <i className="fa-regular fa-circle-dot" />
                    يحسن العلاج حركة العمود الفقري
                  </li>
                  <li className="d-flex flex-row gap-2 align-items-center font-2">
                    <i className="fa-regular fa-circle-dot" />
                    يقلل من الشلل والألم المزمن
                  </li>
                  <li className="d-flex flex-row gap-2 align-items-center font-2">
                    <i className="fa-regular fa-circle-dot" />
                    يعزز التئام الكسور والإصابات في العظام
                  </li>
                  <li className="d-flex flex-row gap-2 align-items-center font-2">
                    <i className="fa-regular fa-circle-dot" />
                    يحسن الصحة العامة للمفاصل والعمود الفقري
                  </li>
                  <li className="d-flex flex-row gap-2 align-items-center font-2">
                    <i className="fa-regular fa-circle-dot" />
                    يساهم في تحسين النشاط البدني والحركة
                  </li>
                </ul>
              </div>
            </div>
            <p
              className="font-2"
              style={{
                direction: "rtl",
              }}>
              عندما يتعلق الأمر بخدمات العظام، يعمل الأطباء على توفير الرعاية
              والعلاج اللازمين للمرضى الذين يعانون من مشاكل في العمود الفقري
              والجهاز الحركي. يتضمن ذلك تقديم النصح والعلاجات التي تساعد في
              تحسين الصحة العامة وتقليل الألم. يستخدم الأطباء تقنيات متقدمة مثل
              العلاج بالتدليك والتدريب البدني لتعزيز الشفاء واستعادة القدرة على
              الحركة بشكل طبيعي.
            </p>
            <div
              style={{
                direction: "rtl",
              }}>
              <h6 className="font-1">فوائد خدمات العظام</h6>
              <ul className="row row-cols-1 row-cols-lg-3 p-0 mt-3">
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  تحسين الصحة العامة والقدرة على الحركة
                </li>
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  تقليل الألم في منطقة العمود الفقري
                </li>
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  تعزيز الشفاء والتئام الإصابات
                </li>
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  استعادة القدرة على الحركة بشكل طبيعي
                </li>
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  تقديم توجيهات للحفاظ على الصحة
                </li>
                <li className="col mb-1 d-flex flex-row gap-2 align-items-center font-2">
                  <i className="fa-regular fa-circle-dot" />
                  تقديم علاجات مثل العلاج العلاج الطبيعي
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col col-lg-4">
          <div className="d-flex flex-column gap-3">
            <div
              className="position-relative overflow-hidden rounded-3"
              style={{
                backgroundImage:
                  "url(https://www.drahmedalattar.com/Assets/image/9.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}>
              <div className="image-overlay-2" />
              <div
                className="r-container position-relative"
                style={{
                  zIndex: "2",
                }}>
                <div className="d-flex flex-column p-5 gap-3 text-white text-center align-items-center">
                  <h5 className="font-2">هل تشعر بشيء غير طبيعي في عظامك؟</h5>
                  <Link
                    className="btn button font-1 ls-2 fw-semibold fs-7 py-3 px-4"
                    href="/contactUs">
                    اتصل بنا
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="rounded-3 bg-accent-color-1 p-5"
              style={{
                direction: "rtl",
              }}>
              <h5 className="font-2 mb-3 text-white border-bottom w-75 pb-3">
                خدمات أخرى
              </h5>
              <ul className="list gap-2">
                <li>
                  <Link
                    className="d-flex flex-row gap-3 align-items-center link"
                    href="">
                    <i className="fa-regular fa-circle-dot" />
                    تركيب مفاصل الركبة و الفخد الصناعية
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-row gap-3 align-items-center link"
                    href="">
                    <i className="fa-regular fa-circle-dot" />
                    اعادة عمليات بناء الرباط الصليبي{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-row gap-3 align-items-center link"
                    href="">
                    <i className="fa-regular fa-circle-dot" />
                    اعادة بناء الوتر الرافع للكتف{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-row gap-3 align-items-center link"
                    href="">
                    <i className="fa-regular fa-circle-dot" />
                    توسيع القناة العصبية بالميكروسكوب{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-flex flex-row gap-3 align-items-center link"
                    href="">
                    <i className="fa-regular fa-circle-dot" />
                    استعدال تشوهات العظام{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="rounded-3 bg-accent-color-1 p-5"
              style={{
                direction: "rtl",
              }}>
              <h5 className="font-2 mb-3 text-white border-bottom w-75 pb-3 ">
                تواصل معنا
              </h5>
              <div className="social-container">
                <a
                  className="social-item bg-accent-color"
                  href="https://web.facebook.com/doctorahmedalattar/">
                  <i className="fa-brands fa-facebook" />
                </a>
                <a
                  className="social-item bg-accent-color"
                  href="https://www.tiktok.com/@dr.ahmed.elattar?is_from_webapp=1&sender_device=pc">
                  <i className="fa-brands fa-tiktok" />
                </a>
                <a
                  className="social-item bg-accent-color"
                  href="https://www.youtube.com/@DRAhmedELattar">
                  <i className="fa-brands fa-youtube" />
                </a>
                <a
                  className="social-item bg-accent-color"
                  href="https://www.instagram.com/elattar_ahmed">
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
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
            <h3 className="accent-color font-1 fw-semibold fs-1">اراء الناس</h3>
            <div className="overflow-hidden outer-margin">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="d-flex flex-column bg-accent-color rounded-4 p-5 text-white">
                      <h1>
                        <i className="fa-solid fa-quote-right" />
                      </h1>
                      <p className="text-gray mb-4 fst-italic font-1">
                        ربنا يبارك في حضرتك ويحفظك وجزاك الله عنا كل الخير وربنا
                        يزيدك من فضله وكرمه يارب وربنا يجعلك دائماً سبب لشفاء كل
                        مريض يااااارب العالمين
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
                        دكتور محترم وامين ربنا يباركلك ياباشا ويصلح مابين ايديك
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
                        ربنا يبارك في حضرتك ويحفظك وجزاك الله عنا كل الخير وربنا
                        يزيدك من فضله وكرمه يارب وربنا يجعلك دائماً سبب لشفاء كل
                        مريض يااااارب العالمين
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
            href="https://www.drahmedalattar.com/Assets/image/review.png">
            <img
              alt="attar-img"
              className="img-fluid rounded-4"
              src="https://www.drahmedalattar.com/Assets/image/review.png"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</main>;

    </>
  )
}

export default page