import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // مسارات الملفات التي ستُستخدم لمعالجة الـ CSS
  ],
  theme: {
    extend: {}, // هنا يمكنك إضافة تعديلات مخصصة على التصميم
  },
  plugins: [], // يمكنك إضافة المكونات الإضافية هنا
};

export default config;