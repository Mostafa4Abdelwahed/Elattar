import Link from "next/link";

const page = () => {
  return (
    <>
      <main>
        <section
          className="section position-relative"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/banner3.jpg)",
          }}
        >
          <div className="image-overlay" />
          <div
            className="r-container position-relative h-50"
            style={{
              zIndex: "2",
            }}
          ></div>
        </section>
        <section className="section">
          <div className="r-container">
            <div className="d-flex flex-column gap-3 text-center">
              <h6 className="fw-semibold font-1 accent-color-1 ls-2">للحجز</h6>
              <h3 className="accent-color font-1 fw-semibold">إحجز موعد</h3>
              <p
                className="font-2 fw-light mx-auto"
                style={{
                  maxWidth: "912px",
                }}
              >
                يُمكنك حجز موعد بسهولة وسرعة من خلال موقعنا الإلكتروني. نحن هنا
                لمساعدتك في تحسين صحتك والاهتمام بعظامك. استمتع برعاية طبية
                متميزة وخدمات احترافية لضمان راحتك وسلامتك. لا تتردد في الاتصال
                بنا لأي استفسارات أو للحصول على المزيد من المعلومات حول خدماتنا.
              </p>
              <div>
                <div className="toast-container position-fixed bottom-0 end-0 p-3">
                  <div
                    aria-atomic="true"
                    aria-live="assertive"
                    className="toast success_msg_appointment bg-dark-transparent text-white"
                    id="liveToast"
                    role="alert"
                  >
                    <div className="d-flex">
                      <button
                        aria-label="Close"
                        className="btn me-2 m-auto text-white"
                        data-bs-dismiss="toast"
                        type="button"
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    </div>
                  </div>
                </div>
                <form
                  action="https://www.drahmedalattar.com/appointment"
                  className="d-flex flex-column h-100 justify-content-center w-100 form"
                  method="post"
                >
                  <input
                    autoComplete="off"
                    defaultValue="jJ57OXB4XwmWXTbqhpZerJzGXGk18wZNOZS45t45"
                    name="_token"
                    type="hidden"
                  />
                  <div className="mb-3">
                    <input
                      className="form-control py-3 px-4 "
                      defaultValue=""
                      id="name"
                      name="name"
                      placeholder="ادخل اسمك"
                      type="text"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control py-3 px-4 "
                      defaultValue=""
                      id="phone"
                      name="phone"
                      placeholder="رقم التليفون (مثال: 0123456789)"
                      type="tel"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control py-3 px-4 "
                      defaultValue=""
                      id="email"
                      name="email"
                      placeholder="البريد الالكتروني (اختياري)"
                      type="email"
                    />
                  </div>
                  <div className="row row-cols-1  row-cols-lg-1">
                    <div className="col mb-3">
                      <select
                        className="form-select  py-3 px-4 "
                        name="location"
                      >
                        <option disabled selected>
                          اختر عيادة
                        </option>
                        <option value="القاهرة">القاهرة</option>
                        <option value="الزقازيق">الزقازيق</option>
                      </select>
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col mb-3">
                      <select className="form-select py-3 px-4 " name="service">
                        <option disabled selected>
                          اختر خدمة
                        </option>
                        <option value="تركيب مفاصل الركبة والفخذ الصناعية">
                          تركيب مفاصل الركبة و الفخد الصناعية
                        </option>
                        <option value="اعادة عمليات بناء الرباط الصليبي">
                          اعادة عمليات بناء الرباط الصليبي
                        </option>
                        <option value="اعادة بناء الوتر الرافع للكتف">
                          اعادة بناء الوتر الرافع للكتف
                        </option>
                        <option value="توسيع القناة العصبية بالميكروسكوب">
                          توسيع القناة العصبية بالميكروسكوب
                        </option>
                        <option value="إستعدال تشوهات العظام">
                          إستعدال تشوهات العظام
                        </option>
                        <option value="إستعدال تشوهات الركبة">
                          إستعدال تشوهات الركبة
                        </option>
                        <option value="حقن كسور العمود الفقري">
                          حقن كسور العمود الفقري
                        </option>
                        <option value="تثبيت كسور العمود الفقري بالتدخل المحدود">
                          تثبيت كسور العمود الفقري بالتدخل المحدود
                        </option>
                        <option value="إعادة بناء حق الحوض بعد الكسور المؤقته">
                          إعادة بناء حق الحوض بعد الكسور المؤقته
                        </option>
                        <option value="other">اخري</option>
                      </select>
                    </div>
                    <div className="col mb-3">
                      <input
                        className="form-control py-3 px-4 "
                        defaultValue=""
                        id="date"
                        name="date"
                        type="date"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-primary py-3 font-2"
                      type="submit"
                    >
                      حدد موعدا
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section position-relative bg-attach-fixed"
          style={{
            backgroundImage:
              "url(https://www.drahmedalattar.com/Assets/image/6.jpg)",
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
                يُمكنك حجز موعد بسهولة وسرعة من خلال موقعنا الإلكتروني. نحن هنا
                لمساعدتك في تحسين صحتك والاهتمام بعظامك. استمتع برعاية طبية
                متميزة وخدمات احترافية لضمان راحتك وسلامتك. لا تتردد في الاتصال
                بنا لأي استفسارات أو للحصول على المزيد من المعلومات حول خدماتنا.
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
        <section className="section">
          <div className="r-container">
            <div
              className="d-flex flex-column gap-3 text-center"
              style={{
                direction: "rtl",
              }}
            >
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
                        alt=""
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
                        alt=""
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
                        alt=""
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
                        alt=""
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
      </main>
      ;
    </>
  );
};

export default page;
