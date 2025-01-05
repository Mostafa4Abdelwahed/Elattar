import headerImage from "@/assets/headerImage.jpg";
import HeaderSection from "@/components/shared/HeaderSection";

export default function page() {
  return (
    <>
      <HeaderSection name="تواصل معنا" image={headerImage} />
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <main>
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* نموذج إرسال رسالة */}
          <div className="border-2 border-main/10 shadow-md rounded-lg !p-6">
            <h2 className="text-2xl !mt-4 font-bold text-gray-800 mb-6">
              ارسل رسالة
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="اسمك"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-main focus:outline-none"
              />
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-main focus:outline-none"
              />
              <input
                type="text"
                placeholder="رقم الهاتف"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-main focus:outline-none"
              />
              <input
                type="text"
                placeholder="الموضوع"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-main focus:outline-none"
              />
              <textarea
                placeholder="محتوى الرسالة"
                rows={4}
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-main focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-main text-white py-3 rounded-md hover:bg-main/85 transition"
              >
                ارسل رسالة
              </button>
            </form>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 !mt-0 mb-4">
              ابقى على تواصل
            </h2>
            <p className="text-gray-600 mb-6">
              تواصل معنا للحصول على استشارة مع دكتور متخصص. نحن هنا لمساعدتك.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-main/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-main"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13V8m0 13H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2h-6z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">البريد الإلكتروني</p>
                  <a
                    href="mailto:ahmedelattar@gmail.com"
                    className="text-gray-800 font-medium"
                  >
                    ahmedelattar@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-main/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-main"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h11m8 10H7a2 2 0 01-2-2V7a2 2 0 012-2h11l4 4v11a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">العنوان</p>
                  <p className="text-gray-800 font-medium">
                    شارع الثورة، الزقازيق، مصر
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="bg-main/20 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-main"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A3.966 3.966 0 0018 14V9a4 4 0 10-8 0v5c0 .728-.195 1.41-.595 2L8 17h5v5a1 1 0 102 0v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-600">الهاتف</p>
                  <a
                    href="tel:+201555958516"
                    className="text-gray-800 font-medium"
                  >
                    +201555958516
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
