"use client";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/heroImage.png";
import {
  FaCalendarCheck,
  FaComments,
  FaHands,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import AboutusImage from "@/assets/aboutUs.jpg";
import { Container } from "@/components/craft";
import ChoiceImage from "@/assets/choice.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutusSection />
      <ServicesSection />
      <WhyusSection />
      <TestimonialsSection />
      <ChoiceClinic />
    </>
  );
}

const HeroSection = () => {
  return (
    <section>
      <div className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row items-center lg:justify-between py-5 lg:py-0">
            {/* Text Content */}
            <div className="max-w-lg text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
                الرعاية المثالية لعلاج{" "}
                <span className="text-main">مشاكل العظام</span>
              </h1>
              <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                استعد لحياة خالية من الألم مع أحدث تقنيات علاج العظام. نحن هنا
                لمساعدتك على استعادة نشاطك.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start gap-4">
                <a
                  href="#book"
                  className="px-6 py-3 !no-underline bg-main !text-white font-medium rounded-lg shadow hover:bg-main/75 transition"
                >
                  احجز موعدًا الآن
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 !no-underline bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                  خدماتنا
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="mt-12 lg:mt-0 grow">
              <Image
                src={heroImage}
                alt="دكتور عظام"
                className="w-full max-w-md lg:max-w-sm mx-auto"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

const AboutusSection = () => {
  return (
    <section>
      <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20 py-20 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-0 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-main/85 opacity-20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-main opacity-20 rounded-full filter blur-3xl"></div>
              <Image
                src={AboutusImage}
                alt="About Us"
                className="w-full rounded-3xl shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl lg:text-7xl !font-medium text-gray-800 dark:text-white !mb-7 !mt-0">
                توفير مستوى عالٍ من الرعاية
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                نحن ملتزمون بتوفير مستوى عالٍ من الرعاية الطبية لجميع مرضانا.
                نسعى دائمًا لتقديم أحدث العلاجات الطبية ونتبع أفضل الممارسات
                والمعايير الدولية لضمان أن يحصل كل مريض على العلاج الأمثل
                والراحة التامة. نولي اهتمامًا كبيرًا لكل تفصيل صغير لضمان
                السلامة والجودة في كل خطوة.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed !mt-5">
                فريقنا الطبي يتكون من خبراء متخصصين في مجالاتهم، مما يضمن تلقيك
                لأفضل رعاية ممكنة. كما نحرص على تحديث معرفتنا ومهاراتنا بشكل
                مستمر لمواكبة أحدث التطورات في الطب.
              </p>
              {/* <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    أحدث التقنيات في علاج العظام
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    فريق من الخبراء المتخصصين
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    خدمات مصممة لتلبية احتياجاتك
                  </p>
                </div>
              </div> */}
              <Link
                href=""
                className="mt-8 !no-underline inline-block px-6 py-3 bg-main !text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="text-main w-20 h-20"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="578.000000pt"
          height="600.000000pt"
          viewBox="0 0 578.000000 600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M2500 5789 c-263 -44 -498 -224 -615 -470 -56 -120 -77 -215 -78
     -354 0 -133 16 -215 62 -326 l28 -68 -60 -26 c-272 -118 -619 -385 -860 -664
     -306 -352 -439 -625 -441 -901 -1 -250 73 -380 453 -798 l76 -84 2 -106 c2
     -182 50 -344 144 -488 28 -42 49 -78 47 -79 -2 -2 -59 -33 -128 -70 -283 -153
     -410 -230 -525 -319 -87 -69 -195 -179 -242 -247 -94 -137 -153 -322 -153
     -480 0 -61 3 -70 26 -88 34 -27 67 -27 97 2 21 19 26 36 35 127 21 199 80 320
     226 466 124 123 295 234 677 437 l106 57 39 -31 c101 -80 254 -149 389 -174
     108 -21 294 -16 395 10 107 27 275 115 363 190 l79 67 96 -36 c175 -64 242
     -67 340 -17 66 35 107 91 299 421 253 432 241 406 204 451 l-19 24 -353 5
     -352 5 -23 67 c-31 93 -86 194 -145 268 -28 34 -49 63 -47 65 6 6 1296 85
     1380 85 66 0 80 -4 128 -33 40 -23 64 -47 88 -87 31 -52 33 -60 30 -130 l-4
     -75 -336 -655 c-185 -360 -378 -738 -430 -840 -53 -104 -111 -233 -131 -295
     -41 -122 -73 -291 -63 -330 15 -60 80 -84 126 -47 17 14 24 34 31 98 10 92 47
     226 88 323 33 76 808 1591 821 1605 5 5 28 -8 55 -32 64 -56 137 -82 230 -82
     109 0 175 27 251 104 108 108 129 215 85 431 -132 643 -366 1119 -731 1485
     -218 219 -459 375 -750 485 -41 16 -77 30 -78 31 -2 1 7 42 19 91 29 114 32
     283 5 393 -24 97 -93 244 -149 318 -191 247 -502 371 -807 321z m350 -177
     c198 -65 373 -239 436 -437 32 -97 42 -233 25 -330 -62 -353 -407 -607 -757
     -557 -167 25 -295 92 -413 218 -350 375 -163 992 338 1119 84 21 287 14 371
     -13z m617 -1126 c613 -234 1060 -757 1286 -1506 40 -133 83 -318 99 -430 14
     -94 3 -142 -45 -197 -79 -89 -205 -96 -290 -15 -43 41 -55 71 -82 205 -103
     507 -251 823 -463 989 -122 96 -304 178 -392 178 -135 0 -253 -101 -311 -266
     -47 -136 -68 -350 -51 -524 5 -52 8 -96 8 -97 -1 -1 -175 -13 -386 -26 l-385
     -24 -90 44 c-138 66 -225 86 -385 86 -190 1 -328 -37 -486 -133 l-69 -42 -22
     29 c-52 64 -67 185 -33 275 18 48 161 251 254 359 53 62 48 126 -12 147 -46
     16 -75 -5 -171 -125 -199 -248 -244 -339 -244 -488 0 -98 20 -167 75 -256 15
     -25 28 -49 28 -52 0 -3 -23 -37 -52 -74 -28 -37 -71 -110 -96 -161 -37 -79
     -46 -91 -59 -81 -26 22 -197 221 -258 299 -102 133 -145 244 -145 375 1 191
     86 391 271 638 253 337 563 600 912 774 l108 54 88 -84 c98 -93 208 -157 341
     -199 65 -20 95 -23 230 -23 135 0 165 3 230 23 185 58 352 176 451 320 17 23
     36 42 44 42 7 0 53 -15 102 -34z m253 -979 c167 -83 267 -182 359 -357 42 -81
     121 -283 121 -310 0 -5 -15 -3 -34 5 -61 26 -136 27 -460 6 -176 -11 -322 -19
     -324 -16 -3 2 -7 78 -10 167 -7 257 29 417 114 505 43 45 43 45 101 41 40 -3
     81 -16 133 -41z m-1515 -791 c119 -40 208 -97 306 -196 71 -71 94 -103 133
     -181 65 -133 81 -199 80 -344 0 -128 -15 -201 -59 -301 -132 -298 -458 -486
     -775 -445 -261 33 -477 186 -591 416 -50 102 -69 176 -76 295 -19 313 174 617
     468 736 106 43 172 54 309 50 103 -3 139 -8 205 -30z m1164 -678 c-44 -83
     -313 -535 -327 -551 -24 -27 -66 -47 -100 -47 -24 0 -119 28 -183 55 -15 5
     -11 18 27 95 60 119 94 255 94 376 l0 94 250 0 251 0 -12 -22z"
            />
            <path
              d="M5399 1915 c-77 -42 -86 -149 -17 -213 98 -90 256 37 195 158 -30 59
     -119 87 -178 55z"
            />
            <path
              d="M5045 1069 c-73 -21 -115 -112 -81 -176 26 -51 62 -73 118 -73 43 0
     55 5 83 33 60 60 59 134 -1 186 -19 17 -41 31 -49 31 -7 0 -19 2 -27 4 -7 2
     -27 0 -43 -5z"
            />
            <path
              d="M4315 550 c-55 -22 -90 -95 -74 -153 39 -143 249 -115 249 33 0 92
     -92 155 -175 120z"
            />
          </g>
        </svg>
      ),
      title: "الحقن الاسمنتي بالفقرات",
      description:
        "إجراء طبي يستخدم لتقوية الفقرات المتضررة وتخفيف الألم الناتج عن الكسور.",
    },
    {
      icon: (
        <svg
          className="text-main w-20 h-20"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="600.000000pt"
          height="595.000000pt"
          viewBox="0 0 600.000000 595.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,595.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M2250 5679 c-291 -268 -591 -436 -865 -484 -74 -13 -105 -13 -196 -3
     -277 31 -550 -60 -750 -249 -130 -124 -239 -276 -239 -334 0 -43 40 -83 83
     -83 43 0 61 14 105 84 166 262 404 410 666 413 50 1 134 -2 186 -7 75 -7 114
     -5 184 8 308 59 649 247 923 509 86 83 104 118 82 159 -18 34 -40 47 -79 47
     -29 0 -47 -10 -100 -60z"
            />
            <path
              d="M3599 5727 c-26 -20 -41 -57 -34 -87 8 -35 131 -155 263 -258 243
     -187 502 -311 748 -358 70 -13 109 -15 184 -8 52 5 136 8 186 7 262 -3 500
     -151 666 -413 44 -70 62 -84 105 -84 42 0 83 40 83 80 0 59 -114 219 -241 339
     -199 187 -472 278 -748 247 -91 -10 -122 -10 -196 3 -272 48 -555 204 -851
     472 -68 61 -87 73 -115 73 -19 0 -41 -6 -50 -13z"
            />
            <path
              d="M1973 4336 c-136 -33 -245 -122 -310 -252 -38 -77 -38 -79 -38 -199
     0 -120 0 -122 37 -196 60 -121 153 -203 276 -243 l52 -18 0 -1579 c0 -1685 -2
     -1625 45 -1643 38 -14 82 -6 106 20 l24 26 3 1588 2 1589 38 12 c107 34 218
     120 269 207 83 141 83 333 0 474 -37 64 -128 145 -199 178 -105 49 -203 60
     -305 36z m232 -191 c213 -104 215 -408 4 -514 -68 -34 -148 -41 -219 -20 -59
     18 -130 78 -164 139 -27 49 -31 64 -31 135 0 70 4 87 30 134 33 60 93 114 151
     136 54 20 177 15 229 -10z"
            />
            <path
              d="M3831 4339 c-113 -22 -251 -119 -308 -217 -63 -107 -80 -255 -44
     -371 26 -83 60 -137 123 -198 55 -51 120 -89 190 -112 l38 -12 2 -1589 3
     -1588 24 -26 c24 -26 68 -34 106 -20 47 18 45 -42 45 1643 l0 1579 53 18 c122
     40 215 122 275 243 37 74 37 76 37 196 0 120 0 122 -38 199 -96 194 -298 296
     -506 255z m189 -184 c61 -22 121 -74 155 -136 26 -47 30 -64 30 -134 0 -71 -4
     -86 -31 -135 -36 -64 -107 -123 -170 -140 -57 -16 -159 -9 -209 15 -84 41
     -148 131 -161 228 -17 124 69 261 191 305 45 16 147 14 195 -3z"
            />
            <path
              d="M2943 4156 l-28 -24 -3 -526 -3 -525 -62 -44 c-99 -70 -184 -116
     -297 -162 -124 -50 -149 -74 -134 -132 7 -28 17 -42 42 -55 31 -15 39 -15 85
     -1 81 23 290 127 377 187 l80 55 78 -53 c136 -94 358 -196 426 -196 44 0 75
     27 82 71 9 52 -22 80 -136 124 -104 41 -200 93 -297 162 l-62 44 -3 525 -3
     526 -28 24 c-16 13 -41 24 -57 24 -16 0 -41 -11 -57 -24z"
            />
            <path
              d="M938 3700 c-23 -17 -26 -29 -32 -117 -27 -387 -230 -746 -580 -1024
     -55 -45 -107 -88 -113 -97 -22 -28 -15 -71 16 -103 47 -46 75 -40 178 40 282
     219 487 487 587 771 15 41 29 82 32 90 8 20 16 -1 70 -194 83 -293 144 -603
     181 -916 14 -122 17 -283 20 -1024 l4 -878 24 -24 c33 -33 87 -33 120 1 l25
     24 0 838 c0 657 -3 874 -15 1006 -38 430 -126 852 -267 1272 -60 178 -118 318
     -140 338 -27 23 -79 22 -110 -3z"
            />
            <path
              d="M4952 3703 c-22 -20 -80 -160 -140 -338 -141 -420 -229 -842 -267
     -1272 -12 -132 -15 -349 -15 -1006 l0 -838 25 -24 c33 -34 87 -34 120 -1 l24
     24 4 878 c3 741 6 902 20 1024 38 323 103 649 189 945 27 93 51 171 53 174 3
     2 7 -2 9 -10 3 -8 17 -48 32 -89 100 -284 305 -552 587 -771 103 -80 131 -86
     178 -40 31 32 38 75 17 103 -7 9 -58 52 -114 96 -350 280 -553 638 -580 1025
     -6 88 -9 100 -32 117 -31 25 -83 26 -110 3z"
            />
            <path
              d="M2877 960 c-14 -11 -28 -33 -32 -49 -7 -33 15 -85 40 -95 21 -8 209
     -8 230 0 25 10 47 62 40 95 -12 54 -46 69 -155 69 -82 0 -101 -3 -123 -20z"
            />
          </g>
        </svg>
      ),
      title: "علاج مفاصل الحوض",
      description:
        "إجراءات علاجية تهدف لتخفيف الألم وتحسين وظيفة المفاصل باستخدام الحقن بالخلايا الجذعية و تركيب مفاصل صناعية .",
    },
    {
      icon: (
        <svg
          className="text-main w-20 h-20"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="551.000000pt"
          height="600.000000pt"
          viewBox="0 0 551.000000 600.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)"
            fill="currentColor"
            stroke="none"
          >
            <path
              d="M1997 5785 c-168 -32 -323 -113 -450 -234 -87 -83 -135 -148 -191
     -258 -138 -276 -114 -625 62 -891 19 -29 33 -54 31 -56 -2 -2 -47 -15 -100
     -30 -229 -62 -431 -175 -528 -297 -19 -23 -162 -271 -317 -550 -238 -430 -283
     -518 -294 -572 -14 -77 -3 -153 34 -224 14 -26 124 -185 245 -353 202 -281
     218 -306 204 -322 -9 -10 -59 -39 -112 -64 -171 -84 -300 -240 -346 -419 -31
     -121 -16 -184 61 -255 37 -34 50 -40 88 -40 51 0 85 23 131 90 37 54 87 81
     215 120 58 17 167 52 243 77 134 44 139 45 201 34 72 -13 157 -1 218 30 20 10
     42 19 47 19 30 0 625 -476 639 -510 5 -12 -117 -30 -205 -30 -181 0 -369 51
     -589 161 -183 91 -260 112 -334 90 -57 -17 -84 -48 -116 -139 -89 -252 -159
     -393 -260 -528 -68 -90 -184 -200 -274 -260 -75 -50 -90 -76 -74 -123 12 -33
     53 -56 86 -48 78 20 285 202 394 346 77 103 194 332 249 489 38 111 39 112 70
     112 19 0 94 -31 191 -79 177 -88 215 -102 359 -136 217 -52 344 -55 535 -13
     52 11 100 21 107 22 6 0 105 -91 220 -204 249 -245 267 -256 523 -319 396 -97
     894 -167 1430 -201 287 -18 844 -25 878 -11 37 16 57 57 43 92 -20 54 -14 53
     -440 61 -748 12 -1378 84 -1909 218 -186 47 -198 55 -452 306 -258 254 -328
     319 -532 489 -109 92 -389 309 -426 331 -2 1 7 34 19 74 27 90 23 174 -13 251
     -14 30 -82 134 -152 231 -70 97 -125 182 -121 188 9 15 81 50 104 50 28 0 86
     -72 171 -211 60 -100 97 -147 190 -242 192 -198 275 -251 535 -341 273 -94
     259 -87 266 -138 18 -120 110 -235 224 -277 109 -42 281 -14 346 55 12 13 28
     24 35 24 6 0 44 -30 84 -67 l72 -66 651 37 652 38 98 39 c173 69 334 162 426
     244 34 31 41 44 41 75 0 30 -6 43 -26 59 -38 30 -66 26 -116 -16 -107 -90
     -325 -207 -444 -237 -39 -10 -254 -26 -640 -47 l-581 -33 -61 53 -61 53 282
     391 c154 216 302 423 328 460 59 85 85 172 76 257 -4 33 -52 219 -108 413 -55
     194 -134 478 -175 632 -90 338 -115 395 -213 488 -108 101 -265 167 -473 197
     -49 7 -88 14 -88 16 0 1 20 35 45 75 272 441 112 1028 -345 1263 -130 68 -241
     97 -385 102 -80 2 -146 -1 -198 -11z m403 -180 c98 -34 235 -120 298 -189 69
     -74 136 -187 167 -277 37 -109 46 -294 21 -404 -27 -115 -97 -244 -183 -335
     -158 -169 -360 -251 -583 -237 -505 31 -835 551 -646 1017 68 167 217 321 384
     398 111 51 175 62 322 59 117 -3 146 -7 220 -32z m-771 -1425 c106 -83 283
     -151 439 -169 212 -23 452 40 624 166 l47 34 103 -11 c314 -34 490 -117 567
     -269 11 -21 41 -116 66 -212 60 -225 182 -663 251 -902 54 -188 64 -259 44
     -312 -12 -31 -679 -965 -724 -1013 -83 -90 -198 -93 -282 -8 -50 49 -69 105
     -60 169 6 39 50 106 307 463 167 233 299 426 299 438 0 45 -217 826 -235 846
     -19 21 -64 26 -95 10 -46 -25 -43 -44 65 -450 l103 -384 -265 -369 c-146 -203
     -274 -385 -285 -404 -14 -23 -26 -33 -37 -29 -95 30 -386 138 -421 155 -150
     77 -348 276 -459 460 -124 207 -212 282 -313 268 -23 -3 -75 -22 -115 -43 -71
     -36 -74 -37 -88 -18 -157 220 -163 229 -151 244 51 71 251 320 256 320 8 0 20
     -127 20 -210 0 -67 18 -97 66 -106 24 -5 37 0 60 19 29 25 29 26 26 129 -5
     181 -34 348 -71 398 -19 26 -48 35 -86 26 -14 -4 -100 -104 -239 -280 -184
     -234 -216 -280 -216 -308 0 -28 48 -101 291 -438 160 -223 295 -415 300 -428
     12 -32 11 -115 -2 -149 -25 -66 -110 -123 -184 -123 -48 0 -112 28 -141 61
     -19 21 -604 834 -694 964 -31 45 -35 57 -35 115 l0 65 254 460 c140 253 274
     490 298 527 89 137 276 240 548 303 55 13 106 24 114 24 7 1 30 -12 50 -29z
     m-750 -2403 c39 -54 71 -102 71 -107 0 -5 -60 -28 -132 -50 -73 -23 -162 -50
     -198 -61 -87 -27 -146 -62 -199 -118 l-44 -46 5 52 c12 132 128 279 278 351
     47 23 96 50 110 62 14 11 28 19 32 17 3 -1 38 -46 77 -100z"
            />
            <path
              d="M4531 4592 c-75 -37 -99 -125 -53 -189 69 -97 232 -48 232 69 0 55
     -30 105 -75 124 -45 18 -63 18 -104 -4z"
            />
            <path
              d="M4501 3885 c-91 -77 -42 -225 75 -225 83 0 134 47 134 125 0 78 -51
     125 -134 125 -33 0 -52 -6 -75 -25z"
            />
            <path
              d="M4519 3206 c-85 -48 -85 -166 0 -223 84 -56 191 8 191 115 0 34 -6
     49 -33 78 -28 31 -41 37 -83 40 -31 3 -58 -1 -75 -10z"
            />
            <path
              d="M1044 350 c-28 -11 -54 -48 -54 -78 0 -12 11 -34 25 -47 l24 -25 610
     0 c345 0 620 4 634 9 13 5 30 24 37 42 12 27 11 36 -1 58 -29 51 -21 51 -659
     50 -327 0 -605 -4 -616 -9z"
            />
          </g>
        </svg>
      ),
      title: "تقويم العمود الفقري",
      description:
        "إجراء طبي لتصحيح انحناءات العمود الفقري وتحسين وضعية الجسم.",
    },
  ];
  return (
    <section>
      <div className="relative bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <span>الخدمات</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white !my-0 !mb-5">
              الظروف التي يمكننا التعامل معها
            </h2>
            <p className="text-sm max-w-4xl !mx-auto">
              نحن متخصصون في علاج وإدارة مجموعة واسعة من الظروف الطبية. نستطيع
              التعامل مع كسور العظام، آلام المفاصل، التهابات العظام والمفاصل،
              وأمراض العمود الفقري. كما نقدم خدمات في علاج الإصابات الرياضية
              وتقويم العظام. نحن هنا لتوفير الرعاية الطبية المتقدمة والشاملة
              لجميع مرضانا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center transition-transform transform hover:shadow-sm"
              >
                <div className="flex justify-center items-center !mb-5">
                  {service.icon}
                </div>
                <h3 className="!text-xl font-semibold text-gray-800 dark:text-white !mt-0 !mb-7">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 !text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-main opacity-20 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-main opacity-20 rounded-full filter blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

const WhyusSection = () => {
  const steps = [
    {
      icon: <FaCalendarCheck className="text-blue-600 w-12 h-12" />,
      title: "احجز موعد",
      description: "لا تتردد في حجز موعد معنا للاستشارات المتخصصة.",
    },
    {
      icon: <FaComments className="text-blue-600 w-12 h-12" />,
      title: "استشارة",
      description:
        "يمكنك حجز استشارة للحصول على النصائح اللازمة لحالتك الصحية.",
    },
    {
      icon: <FaHands className="text-blue-600 w-12 h-12" />,
      title: "تقويم العمود الفقري",
      description: "تستطيع تقويم العمود الفقري وتخفيف الآلام بطرق طبيعية.",
    },
    {
      icon: <FaStar className="text-blue-600 w-12 h-12" />,
      title: "مراجعة راضية",
      description:
        "نحن نفخر بتلقي العديد من المراجعات الإيجابية من مرضانا الذين شعروا بالتحسن.",
    },
  ];

  return (
    <section className="relative bg-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl font-bold !mt-0 !mb-5 text-gray-800 dark:text-white text-center">
          كيف نعمل
        </h2>
        <p className="text-lg text-gray-600 !mx-auto dark:text-gray-300 text-center !mb-12 max-w-2xl">
          نقدم استشارات متكاملة تبدأ بتقييم شامل لحالتك الصحية، مرورًا بتحديد
          خطة علاج مخصصة تناسب احتياجاتك.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center transform transition duration-300 hover:-translate-y-2"
            >
              {/* Decorative Background Circle */}
              <div className="absolute -top-10 -left-10 w-36 h-36 bg-gradient-to-br from-main to-main rounded-full opacity-20 group-hover:opacity-30 transition duration-300 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-gradient-to-br from-green-500 to-green-300 rounded-full opacity-20 group-hover:opacity-30 transition duration-300 blur-2xl"></div>

              {/* Icon */}
              <div className="relative mb-6">{step.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-main to-green-500 opacity-0 group-hover:opacity-20 rounded-2xl transition duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Abdul Azzem",
      feedback: "دكتور محترم وأمين ربنا يبارك لك يا باشا ويصلح ملايين بإيديك.",
    },
    {
      id: 2,
      name: "Sara Ali",
      feedback: "تجربة رائعة مع الدكتور، شعرت بتحسن كبير من الجلسة الأولى!",
    },
    {
      id: 3,
      name: "Sara Ali",
      feedback: "تجربة رائعة مع الدكتور، شعرت بتحسن كبير من الجلسة الأولى!",
    },
    {
      id: 4,
      name: "Sara Ali",
      feedback: "تجربة رائعة مع الدكتور، شعرت بتحسن كبير من الجلسة الأولى!",
    },
    {
      id: 5,
      name: "Sara Ali",
      feedback: "تجربة رائعة مع الدكتور، شعرت بتحسن كبير من الجلسة الأولى!",
    },
    {
      id: 6,
      name: "Sara Ali",
      feedback: "تجربة رائعة مع الدكتور، شعرت بتحسن كبير من الجلسة الأولى!",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-main via-main to-main dark:from-gray-800 dark:to-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl lg:text-5xl !mt-0 !mb-3 font-bold text-gray-800 dark:text-white text-center">
          آراء الناس
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 !text-center !mb-16 max-w-2xl !mx-auto">
          استمع لما يقوله عملاؤنا عن تجربتهم معنا.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg relative p-8 transform transition duration-300 hover:-translate-y-2"
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed relative mb-4">
                  <FaQuoteLeft className="text-blue-500 w-8 h-8 absolute -top-3 left-0" />
                  {testimonial.feedback}
                </p>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white text-right">
                  - {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

const ChoiceClinic = () => {
  return (
    <section className="relative flex items-center overflow-hidden justify-center flex-col py-32">
      <Image src={ChoiceImage} className="absolute w-full h-full indent-0 object-cover" alt="image" />
      <div className="bg-black w-full h-full absolute inset-0 opacity-50" />
      <div className="relative z-50">
        <h1 className="text-5xl text-center !text-white !font-bold !my-0">
          احجز اقرب عيادة ليك
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <button className="bg-main grow !text-white rounded-lg text-lg py-2 px-7">
            القاهرة
          </button>
          <button className="bg-main grow !text-white rounded-lg text-lg py-2 px-7">
            الزقازيق
          </button>
        </div>
      </div>
    </section>
  );
};
