import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const HeaderSection = ({ name, image }: { name: string; image: StaticImageData }) => {
  return (
    <header>
      <div className="relative">
        {/* صورة الخلفية */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt="Background"
            className="w-full h-full object-cover !mt-0"
          />
          {/* طبقة شفافة */}
          <div className="absolute inset-0 bg-main/75"></div>
        </div>

        {/* المحتوى */}
        <div className="relative z-10 container mx-auto px-6 py-16 text-center !text-white">
          {/* عنوان الصفحة */}
          <h1 className="text-4xl sm:text-5xl !font-bold !text-white mb-4">
            {name}
          </h1>

          {/* مسار الصفحة */}
          <nav className="flex justify-center space-x-4 rtl:space-x-reverse text-sm">
            <Link href={"/"} className="!text-white !no-underline">
              الرئيسية
            </Link>
            <span className="!text-white/75">/</span>
            <span>{name}</span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
